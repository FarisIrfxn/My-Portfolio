'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TECH_STACK } from "@/constants/tech-stack";

export default function SkillsGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 60;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Globe
    const radius = 25;
    const geometry = new THREE.SphereGeometry(radius * 0.95, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x444444,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Skills
    const allSkills = TECH_STACK.flatMap(cat => cat.items);
    const skillGroup = new THREE.Group();
    scene.add(skillGroup);

    const createTextTexture = (text: string) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      canvas.width = 256;
      canvas.height = 64;
      
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Check current theme - since we are in useEffect we can check document class
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? '#ffffff' : '#111111';
      ctx.font = 'bold 36px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 128, 32);
      
      return new THREE.CanvasTexture(canvas);
    };

    allSkills.forEach((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / allSkills.length);
      const theta = Math.sqrt(allSkills.length * Math.PI) * phi;
      
      const pos = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
      
      const texture = createTextTexture(skill);
      if (texture) {
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(pos);
        sprite.scale.set(12, 3, 1);
        skillGroup.add(sprite);
      }
    });

    // Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      skillGroup.rotation.y += deltaMove.x * 0.005;
      skillGroup.rotation.x += deltaMove.y * 0.005;
      globe.rotation.y += deltaMove.x * 0.005;
      globe.rotation.x += deltaMove.y * 0.005;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!isDragging) {
        skillGroup.rotation.y += 0.002;
        globe.rotation.y += 0.002;
      }
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      // Clean up Three.js objects
      geometry.dispose();
      material.dispose();
      skillGroup.children.forEach(child => {
        if (child instanceof THREE.Sprite) {
          child.material.map?.dispose();
          child.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
