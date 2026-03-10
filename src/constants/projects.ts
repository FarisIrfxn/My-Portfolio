import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: "Cube Solver",
    tag: "DESKTOP APP",
    description: "Desktop application using computer vision to scan and solve Rubik's Cube in real-time.",
    tech: ["C++", "OPENCV", "CLUSTERING"],
    impact: "Solved a 3x3 cube in under 30 steps with 98% scan accuracy.",
    featured: true,
    color: "#FF9100",
    category: "AI/ML",
    stars: 124,
    forks: 43,
    id: "CubeSolver"
  },
  {
    title: "Improvement Tree",
    tag: "MOBILE APP",
    description: "Full-stack mobile app with cloud server that gamifies personal development.",
    tech: ["REACT NATIVE", "EXPO", "JAVA"],
    impact: "Achieved 10k downloads with 4.8 user rating on the App Store.",
    featured: true,
    color: "#00C853",
    category: "Web Development",
    stars: 89,
    forks: 12,
    id: "ImprovementTree"
  },
  {
    title: "Nebula",
    tag: "DESKTOP APP",
    description: "Arcade runner game with procedural terrain generation and dynamic gameplay.",
    tech: ["PYTHON", "KIVY", "GAME DEV"],
    impact: "Optimized rendering for 60fps on even legacy hardware.",
    featured: true,
    color: "#AA00FF",
    category: "Other",
    stars: 45,
    forks: 5,
    id: "Nebula"
  },
  {
    title: "Multi-Class Object Detection",
    tag: "AI RESEARCH",
    description: "Scalable multi-class object detection and distributed training on HPC clusters using custom YOLO architecture.",
    tech: ["PYTHON", "YOLO", "PYTORCH", "DASK"],
    impact: "99.2% mAP accuracy on proprietary industrial datasets.",
    featured: true,
    color: "#FF5252",
    category: "AI/ML",
    stars: 567,
    forks: 112,
    id: "MultiClassDetection"
  },
  {
    title: "Portfolio Infrastructure",
    tag: "DEVOPS",
    description: "Production-ready Terraform infrastructure for deploying modern web applications on Google Cloud Platform.",
    tech: ["TERRAFORM", "GCP", "DOCKER", "GKE"],
    impact: "Automated standard high-availability setup reduced deployment time by 80%.",
    featured: false,
    color: "#2979FF",
    category: "Cloud Native CI/CD",
    stars: 213,
    forks: 56,
    id: "PortfolioInfrastructure"
  },
  {
    title: "Portfolio (Backend)",
    tag: "SYSTEM ARCH",
    description: "FastAPI backend for portfolio websites with JWT authentication, CRUD operations, and complete CI/CD pipeline.",
    tech: ["FASTAPI", "POSTGRESQL", "JWT", "REDIS"],
    impact: "Handles 1000+ concurrent requests with sub-50ms latency.",
    featured: false,
    color: "#F50057",
    category: "Backend",
    stars: 156,
    forks: 34,
    id: "PortfolioBackend"
  }
];
