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
      opacity: 0.1,
      depthWrite: false // Prevents the globe wireframe from blocking the skills behind it
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Skills
    const allSkills = TECH_STACK.flatMap(cat => cat.items);
    const skillGroup = new THREE.Group();
    scene.add(skillGroup);

    const createSkillTexture = (skill: { name: string; icon?: string }) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      canvas.width = 600;
      canvas.height = 80;
      
      const texture = new THREE.CanvasTexture(canvas);
      
      const draw = (img: HTMLImageElement | null) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const isDark = document.documentElement.classList.contains('dark');
        ctx.fillStyle = isDark ? '#ffffff' : '#111111';
        ctx.font = 'bold 36px Inter, system-ui, sans-serif';
        ctx.textBaseline = 'middle';
        
        if (img) {
          const textWidth = ctx.measureText(skill.name).width;
          const gap = 16;
          const iconSize = 40;
          const totalWidth = iconSize + gap + textWidth;
          const startX = (canvas.width - totalWidth) / 2;
          
          ctx.drawImage(img, startX, (canvas.height - iconSize) / 2, iconSize, iconSize);
          ctx.textAlign = 'left';
          ctx.fillText(skill.name, startX + iconSize + gap, canvas.height / 2);
        } else {
          ctx.textAlign = 'center';
          ctx.fillText(skill.name, canvas.width / 2, canvas.height / 2);
        }
        texture.needsUpdate = true;
      };

      if (skill.icon) {
        const img = new window.Image();
        img.onload = () => draw(img);
        img.onerror = () => draw(null);
        img.src = skill.icon;
      } else {
        draw(null);
      }
      
      return texture;
    };

    allSkills.forEach((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / allSkills.length);
      const theta = Math.sqrt(allSkills.length * Math.PI) * phi;
      
      const pos = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
      
      const texture = createSkillTexture(skill);
      if (texture) {
        const spriteMaterial = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true,
          alphaTest: 0.05, // Discards pixels with low alpha to prevent "boxes"
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(pos);
        sprite.scale.set(30, 4, 1);
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
    const tempWorldPos = new THREE.Vector3();
    let animationFrameId: number;
    const animate = () => {
      if (!isDragging) {
        skillGroup.rotation.y += 0.002;
        globe.rotation.y += 0.002;
      }

      // Dynamic opacity based on distance from camera
      skillGroup.children.forEach((child) => {
        if (child instanceof THREE.Sprite) {
          child.getWorldPosition(tempWorldPos);
          
          // normalized depth from front (radius) to back (-radius)
          const normalizedZ = tempWorldPos.z / radius; 
          
          // Fade things in the back: front (1.0) -> back (0.2)
          const opacity = THREE.MathUtils.mapLinear(normalizedZ, -1, 1, 0.2, 1.0);
          child.material.opacity = opacity;
          
          // Scale slightly smaller in the back (0.8x -> 1.1x)
          const scaleFactor = THREE.MathUtils.mapLinear(normalizedZ, -1, 1, 0.8, 1.1);
          child.scale.set(30 * scaleFactor, 4 * scaleFactor, 1);
        }
      });

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
