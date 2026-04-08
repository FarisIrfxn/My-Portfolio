import { Project } from "../types";

const R2_URL = `${process.env.NEXT_PUBLIC_R2_BASE_URL}/Projects`;

export const PROJECTS: Project[] = [
  {
    title: "DuriooChat",
    tag: "WEB APP",
    description: "An AI-powered customer support chatbot built for Durioo+, designed to handle user inquiries, resolve technical issues, and recommend relevant content through intelligent conversational workflows. The system integrates seamless human intervention, allowing customer support agents to take over conversations in real-time when necessary and return control back to the AI.",
    tech: ["NEXT.JS", "N8N", "SUPABASE (VECTOR)", "BIGQUERY", "FASTAPI", "GEMINI API"],
    impact: "Automated a significant portion of customer support interactions while enabling real-time human escalation, improving response efficiency and user satisfaction.",
    featured: true,
    color: "#5C6BC0",
    category: "AI/ML",
    id: "ChatBot",
    year: "2026",
    thumbnail: `${R2_URL}/ChatBot/thumbnail.png`,
    mockups: {
      desktop: `${R2_URL}/ChatBot/desktop.png`,
      mobile: `${R2_URL}/ChatBot/mobile.png`
    },
    workflow: [
      {
        step: "Chatbot Interface (Next.js)",
        description: "Embedded chatbot UI integrated via iframe into the Durioo app, providing users with a seamless support experience."
      },
      {
        step: "Agent Orchestration (n8n + MCP)",
        description: "Handles AI workflow logic, connecting LLMs with internal tools and services using MCP (Model Context Protocol)."
      },
      {
        step: "Backend Layer (FastAPI)",
        description: "Centralized backend service that manages incoming webhooks, processes AI requests, and coordinates communication between frontend and AI agents."
      },
      {
        step: "RAG Knowledge Base (Supabase Vector)",
        description: "Stores and retrieves Durioo knowledge base using vector embeddings for accurate and context-aware responses."
      },
      {
        step: "Content Discovery (BigQuery via MCP)",
        description: "AI dynamically generates analytical queries to recommend relevant content based on user intent and behavior."
      },
      {
        step: "CS Dashboard (Next.js)",
        description: "Real-time monitoring dashboard for customer support agents to observe conversations, intervene when needed, and hand control back to AI."
      }
    ],
    challenges: [
      {
        challenge: "LLM Hallucination in Complex Analytical Queries",
        solution: "Implemented a multi-stage Agentic SQL pipeline where a 'Planner Agent' translates vague user intent into potential queries, which are then validated against strict schema metadata by a 'Reviewer Agent' before execution on BigQuery."
      },
      {
        challenge: "Loss of Semantic Context in Large RAG Documents",
        solution: "Developed a custom Recursive-Character Splitting strategy that prioritizes structural boundaries (headers, chapters) over fixed token counts, ensuring the Supabase Vector engine retrieves complete, coherent context without broken chunks."
      }
    ],
    status: "Active",
    gallery: [`https://youtu.be/RZo-hnkZQBs`],
    galleryDetails: [
      {
        title: "Chatbot Demonstration",
        description: "Full walkthrough of the AI support system in action, showing real-time agent handoff and content recommendations.",
        maxWidth: "550px", // Kita bagi lebar sikit dari standard
        aspectRatio: "16/9"
      }
    ]

  },
  {
    title: "DuriooAI",
    tag: "WEB PLATFORM",
    description: "An internal AI tools hub built for the Durioo team, centralizing multiple Automation and AI-powered utilities into a single platform. The system allows team members to directly run AI workflows such as video and audio processing without switching between multiple external tools.",
    tech: ["REACT", "FASTAPI", "MONGODB"],
    impact: "Reduced workflow friction by consolidating multiple Automation and AI tools into a single interface, enabling team members to execute tasks faster without context switching across platforms.",
    featured: true,
    color: "#E91E63",
    category: "Web Development",
    id: "DuriooAI",
    year: "2025",
    thumbnail: `${R2_URL}/DuriooAI/thumbnail.png`,
    mockups: {
      desktop: `${R2_URL}/DuriooAI/desktop.png`
    },
    workflow: [
      {
        step: "Frontend Interface (React)",
        description: "A centralized dashboard that organizes multiple AI tools into a single accessible interface for internal team usage."
      },
      {
        step: "AI Tool Execution",
        description: "Users can directly run AI-powered utilities such as video analysis, compilation generation, and audio processing within the platform."
      },
      {
        step: "Backend Processing (FastAPI)",
        description: "Handles API requests, manages AI processing workflows, and connects frontend interactions to AI services."
      }
    ],
    challenges: [
      {
        challenge: "Learning to Manage Multiple Tools in One Platform",
        solution: "Built the project while figuring out how to structure multiple AI tools together, gaining hands-on experience in organizing frontend and backend workflows."
      },
      {
        challenge: "Understanding Web Development as a Beginner",
        solution: "Learned React and FastAPI on the go, implementing a functional system that allowed internal team members to run AI workflows in a unified interface."
      }
    ],
    status: "Active",
    gallery: [`${R2_URL}/DuriooAI/image1.png`, `${R2_URL}/DuriooAI/image2.png`],
    galleryDetails: [
      {
        title: "Main Page",
        description: "Onboarding and welcome page introducing the Durioo AI website.",
        flex: "1 1 450px", // Biar dia kembang ikut ruang
        maxWidth: "520px",
        aspectRatio: "16/9"
      },
      {
        title: "Dashboard Page",
        description: "The centralized hub organizing all available automation and AI tools for the team.",
        flex: "1 1 450px",
        maxWidth: "520px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "Duri Image Gen",
    tag: "WEB APP",
    description: "An interactive image generation website built for a Durioo campaign to introduce the 'Duri' character. The platform allows children to generate creative images of Duri using simple prompts in their native language, making AI image generation accessible and fun.",
    tech: ["REACT", "FASTAPI", "COMFYUI", "FLUX (LoRA)", "GEMINI API"],
    impact: "Enabled non-technical users, especially children, to generate character-based AI images through simplified prompts, enhancing engagement during the campaign.",
    featured: true,
    color: "#AA00FF",
    category: "AI/ML",
    id: "DuriImageGen",
    year: "2024",
    thumbnail: `${R2_URL}/Duri-Imagen/thumbnail.png`,
    mockups: {
      mobile: `${R2_URL}/Duri-Imagen/mobile-center.png`,
      mobileLeft: `${R2_URL}/Duri-Imagen/mobile-left.png`,
      mobileRight: `${R2_URL}/Duri-Imagen/mobile-right.png`
    },
    workflow: [
      {
        step: "Child-Friendly UI (React)",
        description: "Users enter simple prompts in Malay or other languages, designed for ease of use by children."
      },
      {
        step: "Prompt Enhancement (Gemini)",
        description: "Transforms simple or non-English prompts into structured, detailed prompts. Includes translation, character injection (Duri), and prompt enrichment."
      },
      {
        "step": "Image Generation (Flux LoRA via ComfyUI)",
        "description": "Custom-trained LoRA model generates images of the Duri character. ComfyUI is used with GGUF quantization (Q4) to enable efficient local inference."
      },
      {
        "step": "Backend Processing (FastAPI)",
        "description": "Handles prompt flow, API communication, and routing between frontend, Gemini, and ComfyUI services."
      }
    ],
    challenges: [
      {
        "challenge": "Simple User Prompts Not Suitable for Image Models",
        "solution": "Integrated a prompt enhancement layer using Gemini to translate, enrich, and standardize prompts before passing them to the image generation model."
      },
      {
        "challenge": "Running Image Models on Limited Hardware",
        "solution": "Utilized ComfyUI with GGUF quantization (Q4) to reduce computational load, enabling the model to run efficiently on lower-end hardware."
      },
      {
        "challenge": "Ensuring Consistent Character Generation",
        "solution": "Trained a LoRA model on the Duri character and enforced prompt rules to maintain visual consistency across generated outputs."
      },
      {
        "challenge": "Tight Development Timeline (Less Than One Month)",
        "solution": "Focused on building a lean and functional version of the system by prioritizing core features and iterating quickly to meet the campaign deadline."
      }
    ],
    status: "Completed",
    gallery: [`${R2_URL}/Duri-Imagen/mobile-center.png`, `${R2_URL}/Duri-Imagen/mobile-left.png`, `${R2_URL}/Duri-Imagen/mobile-right.png`],
    galleryDetails: [
      {
        title: "Main Page",
        description: "Onboarding and welcome page introducing the Duri Image Gen website.",
        maxWidth: "310px", // Size untuk muat 3 sebaris
        aspectRatio: "9/16"
      },
      {
        title: "Prompt Page",
        description: "The prompt has been refined to make it easier for children to use and optimized to support multiple languages.",
        maxWidth: "310px",
        aspectRatio: "9/16"
      },
      {
        title: "Result Page",
        description: "Users can download and share the generated images.",
        maxWidth: "310px",
        aspectRatio: "9/16"
      }
    ]
  },
  {
    title: "DuriooGPT",
    tag: "WEB APP",
    description: "A centralized internal AI platform built by forking OpenWebUI, designed to provide the Durioo team with a unified interface to interact with multiple AI models. The system enables team members to chat with LLMs that are enhanced with company-specific knowledge while maintaining full control over internal data.",
    tech: ["OPENWEBUI (FORK)", "LLM", "IMAGEN", "VEO"],
    impact: "Replaced reliance on external AI tools by consolidating multiple models into a single private platform, improving data control and enabling more flexible AI usage across the team.",
    featured: true,
    color: "#6366F1",
    category: "AI/ML",
    id: "DuriooGPT",
    year: "2024",
    thumbnail: `${R2_URL}/DuriooGPT/thumbnail.png`,
    mockups: {
      desktop: `${R2_URL}/DuriooGPT/desktop.png`,
      mobile: `${R2_URL}/DuriooGPT/mobile.png`
    },
    workflow: [
      {
        step: "Platform Base (OpenWebUI Fork)",
        description: "Customized OpenWebUI to serve as the foundation for a private, extensible AI platform tailored for internal use."
      },
      {
        step: "Multi-Model Integration",
        description: "Integrated multiple AI providers including GPT, Gemini, and open-source models such as LLaMA and DeepSeek into a single interface."
      },
      {
        step: "Company Knowledge Integration",
        description: "Enabled LLMs to access and utilize internal company data, allowing more relevant and context-aware responses."
      },
      {
        step: "Multimodal Generation",
        description: "Extended capabilities beyond text by integrating image generation (Imagen) and video generation (Veo) models."
      }
    ],
    challenges: [
      {
        challenge: "Inconsistent Response Quality Across Different AI Models",
        solution: "Tested and tuned prompts and configurations for each model to achieve more consistent and reliable outputs across providers."
      },
      {
        challenge: "Knowledge Base Chunking Not Returning Relevant Answers",
        solution: "Adjusted how OpenWebUI processes and chunks the knowledge base to improve retrieval accuracy and ensure more relevant responses."
      },
      {
        challenge: "Lack of Native Support for Certain Models (e.g. Veo 3)",
        solution: "Implemented custom tools and modifications within OpenWebUI to enable support for unsupported models and extend platform capabilities."
      }
    ],
    status: "Active",
    gallery: [`${R2_URL}/DuriooGPT/image1.gif`, `${R2_URL}/DuriooGPT/image2.gif`, `${R2_URL}/DuriooGPT/image3.png`, `${R2_URL}/DuriooGPT/image4.png`],
    galleryDetails: [
      {
        title: "Knowledge Base Integration",
        description: "RAG-powered chat that allows the team to interact with internal documents securely.",
        flex: "1 1 450px",
        maxWidth: "520px",
        aspectRatio: "16/9"
      },
      {
        title: "Multi-Model Chat",
        description: "Switch between different AI models (GPT, Gemini, LLaMA) in a single unified interface.",
        flex: "1 1 450px",
        maxWidth: "520px",
        aspectRatio: "16/9"
      },
      {
        title: "Video Generation",
        description: "Prompt-to-video integration using Google Veo and other creative models.",
        flex: "1 1 450px",
        maxWidth: "520px",
        aspectRatio: "16/9"
      },
      {
        title: "Image Generation",
        description: "Prompt-to-image integration using Google Imagen and other creative models.",
        flex: "1 1 450px",
        maxWidth: "520px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "Video-To-Video",
    tag: "EXPERIMENTAL AI",
    description: "An early-stage experimental project exploring video-to-video transformation before modern video generation models were available. The project transforms a live-action scene into a stylized output by combining frame-by-frame generation techniques and manual compositing.",
    tech: ["STYLEGAN", "EBSYNTH", "AFTER EFFECTS"],
    impact: "Demonstrated the feasibility of generating stylized video outputs using limited AI tools at the time, contributing to early exploration of AI-assisted video production workflows.",
    featured: false,
    color: "#8BC34A",
    category: "AI/ML",
    id: "Vid2Vid",
    year: "2023",
    link: "https://youtu.be/wMm1x1dz_Fo",
    thumbnail: `${R2_URL}/Vid2Vid/thumbnail.png`,
    workflow: [
      {
        step: "Frame Extraction",
        description: "Selected and extracted frames from a live-action Abibi scene to be used as the base for transformation."
      },
      {
        step: "Pose-to-Pose Generation (StyleGAN)",
        description: "Generated stylized frames by approximating pose consistency across key frames using StyleGAN."
      },
      {
        step: "Frame Interpolation (EbSynth)",
        description: "Applied EbSynth to propagate styles between keyframes, maintaining temporal consistency across the video."
      },
      {
        step: "Compositing & Effects (After Effects)",
        description: "Final video compositing, transitions, and visual effects were refined using After Effects."
      }
    ],
    challenges: [
      {
        challenge: "Lack of Mature Video Generation Models at the Time",
        solution: "Built a custom pipeline combining image-based generation and frame interpolation tools to simulate video generation."
      },
      {
        challenge: "Maintaining Consistency Across Frames",
        solution: "Used pose-to-pose techniques with StyleGAN and leveraged EbSynth to propagate visual consistency between frames."
      },
      {
        challenge: "Manual and Time-Consuming Workflow",
        solution: "Optimized the pipeline by selecting keyframes strategically and relying on EbSynth to reduce the need for frame-by-frame generation."
      }
    ],
    status: "Completed",
    gallery: [`https://youtu.be/wMm1x1dz_Fo`, `https://youtu.be/XopXDXaE4js`],
    galleryDetails: [
      {
        title: "Abibi PSA 1",
        description: "Experimental results of video stylization before AI video generators existed.",
        flex: "1 1 450px",
        maxWidth: "550px",
        aspectRatio: "16/9"
      },
      {
        title: "Abibi PSA 2",
        description: "Experimental results of video stylization before AI video generators existed.",
        flex: "1 1 450px",
        maxWidth: "550px",
        aspectRatio: "16/9"
      }
    ]

  },
  {
    title: "Aurat Intelligence",
    tag: "AI EDITING",
    description: "An AI-assisted video editing pipeline developed for Durioo. The system focuses on modifying visual elements in videos through three main operations: Cover, Replace, and Remove, enabling content to be adjusted according to specific requirements such as modesty compliance and visual correction.",
    tech: ["YOLO", "STABLE DIFFUSION", "EBSYNTH", "PROPAINTER", "AFTER EFFECTS"],
    impact: "Streamlined complex video editing workflows by combining AI detection, generation, and inpainting techniques, reducing manual effort in post-production.",
    featured: true,
    color: "#9C27B0",
    category: "AI/ML",
    id: "AuratIntelligence",
    year: "2023",
    thumbnail: `${R2_URL}/AuratIntelligence/thumbnail.png`,
    workflow: [
      {
        step: "Object Detection (YOLO)",
        description: "Detects specific objects or regions (e.g. clothing, accessories, weapons) that need to be modified within the video frames."
      },
      {
        step: "Masking & Tracking",
        description: "Applies masking and tracking to targeted areas. Manual masking is performed in After Effects when detection is not accurate."
      },
      {
        step: "Cover / Replace / Remove Logic",
        description: "Defines the type of transformation: covering (e.g. adding clothing), replacing objects, or removing unwanted elements."
      },
      {
        step: "AI Generation / Editing",
        description: "Uses Stable Diffusion or other image editing AI tools to generate or modify visual elements based on the selected operation."
      },
      {
        step: "Frame Propagation (EbSynth / Propainter)",
        description: "Ensures temporal consistency by propagating edits across frames using EbSynth or removing objects using Propainter."
      },
      {
        step: "Final Compositing (After Effects)",
        description: "Refines and composites the final output video with manual adjustments and visual polishing."
      }
    ],
    challenges: [
      {
        challenge: "Inconsistent Object Detection for Specific Targets",
        solution: "Used YOLO for automated detection and fallback to manual masking in After Effects when detection failed."
      },
      {
        challenge: "Maintaining Visual Consistency Across Video Frames",
        solution: "Leveraged EbSynth and Propainter to propagate edits and maintain temporal consistency throughout the video."
      }
    ],
    status: "Completed",
    gallery: [`https://youtu.be/u8MC5q-ssXs`, `https://youtu.be/0en_f3Fn4LY`, `https://youtube.com/shorts/Ab6QaorRga4`],
    galleryDetails: [
      {
        title: "Clothing Replacement",
        description: "Replace the outfit of one of the main characters in Riseman",
        maxWidth: "520px",
        flex: "1 1 450px",
        aspectRatio: "16/9"
      },
      {
        title: "Object Removal",
        description: "Remove the necklace from one of the main characters in the movie Kapten Pengu.",
        maxWidth: "520px",
        flex: "1 1 450px",
        aspectRatio: "16/9"
      },
      {
        title: "Object Replacement",
        description: "Replace the tongue with a closed mouth on the main cat in Cats The Movie.",
        maxWidth: "320px",
        aspectRatio: "9/16"
      }
    ]
  },
  {
    title: "Intro Remover",
    tag: "AUTOMATION SCRIPT",
    description: "A large-scale video processing script developed to support Durioo's transition from manually edited videos to a dynamic content system. The script automates the process of separating combined videos (shorts/PSA + intro + episode) into individual components for system-based recomposition.",
    tech: ["PYTHON", "FFMPEG", "OPENCV", "MOVIEPY"],
    impact: "Automated the processing of tens of thousands of videos, enabling the migration to a modular content system and eliminating the need for manual video editing.",
    featured: false,
    color: "#F44336",
    category: "Automation",
    id: "IntroRemover",
    year: "2023",
    github: "https://github.com/FarisIrfxn/IntroRemover",
    thumbnail: `${R2_URL}/IntroRemover/thumbnail.png`,
    workflow: [
      {
        step: "Frame Matching (OpenCV)",
        description: "Scans each video frame and compares it against a reference image using pixel difference to detect the exact transition point."
      },
      {
        step: "Dynamic Cut Point Detection",
        description: "Determines cut timing based on detected frame position instead of relying on fixed durations."
      },
      {
        step: "Offset Adjustment",
        description: "Applies a timing offset after detection to ensure clean transitions and avoid cutting too early."
      },
      {
        step: "Efficient Video Cutting (FFmpeg)",
        description: "Uses FFmpeg stream copy to cut videos without re-encoding, significantly improving processing speed."
      },
      {
        step: "Batch Processing",
        description: "Processes large volumes of videos iteratively across folders to handle tens of thousands of files."
      }
    ],
    challenges: [
      {
        challenge: "Inconsistent Intro and Video Durations",
        solution: "Implemented frame-based detection using a reference image instead of relying on fixed timestamps."
      },
      {
        challenge: "Scattered and Inconsistent Video File Locations",
        solution: "Manually re-collected and organized videos from multiple sources before processing to ensure consistency."
      },
      {
        challenge: "Large-Scale Processing (Tens of Thousands of Videos)",
        solution: "Executed the script in batches and ran processing continuously over an extended period to complete the dataset."
      },
      {
        challenge: "Performance Constraints When Processing Videos",
        solution: "Used FFmpeg stream copy to avoid re-encoding and reduce processing time significantly."
      }
    ],
    status: "Completed",
    gallery: [`https://youtu.be/nf2p0yQ4WRc`],
    galleryDetails: [
      {
        title: "Script Walkthrough",
        description: "Shows how frames are detected and the intro is removed.",
        maxWidth: "550px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "Watermark The Videos",
    tag: "AUTOMATION SCRIPT",
    description: "A utility script developed to prepare videos for external sharing with clients or investors. The script automatically compresses videos and overlays a centered Durioo watermark to protect and standardize shared content.",
    tech: ["PYTHON", "FFMPEG"],
    impact: "Standardized video sharing workflow by ensuring all externally shared content is compressed and watermarked, reducing manual editing effort.",
    featured: false,
    color: "#607D8B",
    category: "Automation",
    id: "WatermarkTheVideos",
    year: "2024",
    github: "https://github.com/FarisIrfxn/WatermarkTheVideos",
    thumbnail: `${R2_URL}/WatermarkTheVideos/thumbnail.png`,
    workflow: [
      {
        step: "Input Video Processing",
        description: "Accepts raw video input intended for external sharing."
      },
      {
        step: "Compression (FFmpeg)",
        description: "Reduces video file size to optimize for sharing while maintaining acceptable quality."
      },
      {
        step: "Watermark Overlay",
        description: "Applies a centered Durioo logo watermark to protect content before distribution."
      },
      {
        step: "Output Generation",
        description: "Exports the processed video ready for sharing with external stakeholders."
      }
    ],
    challenges: [
      {
        challenge: "Maintaining Video Quality While Compressing",
        solution: "Tuned FFmpeg compression settings to balance file size reduction and visual quality."
      },
      {
        challenge: "Consistent Watermark Placement Across Different Video Sizes",
        solution: "Used dynamic scaling and positioning to ensure the watermark remains centered regardless of resolution."
      }
    ],
    status: "Completed",
    gallery: [`https://youtu.be/-cHJzoPRimk`],
    galleryDetails: [
      {
        title: "Script Walkthrough",
        description: "Shows how the script compresses and watermarks videos.",
        maxWidth: "550px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "Video Analyzer",
    tag: "VIDEO TOOL",
    description: "A web-based platform designed for Durioo to automate metadata extraction from videos. Users can select videos from the platform, run them through Gemini multimodal AI to analyze content, and extract structured metadata like tags and genres. The resulting embeddings enable advanced features such as semantic search and personalized recommendations.",
    tech: ["REACT", "FASTAPI", "GEMINI API", "VECTOR EMBEDDING", "DURIOO API"],
    impact: "Reduced manual effort in cataloging video content while enabling smarter search, recommendations, and content discovery across the platform.",
    featured: false,
    color: "#3F51B5",
    category: "AI/ML",
    id: "VideoAnalyzer",
    year: "2024",
    thumbnail: `${R2_URL}/VidAnalyzer/thumbnail.png`,
    workflow: [
      {
        step: "Video Selection (Durioo API)",
        description: "Team selects videos from the platform that need metadata extraction."
      },
      {
        step: "Multimodal Analysis (Gemini)",
        description: "Videos are sent to Gemini AI with pre-defined system prompts to extract structured metadata such as tags, genres, and key scenes."
      },
      {
        step: "Embedding Generation",
        description: "Metadata is converted into vector embeddings using Gemini, enabling semantic search and recommendation functionalities."
      }
    ],
    challenges: [
      {
        challenge: "High Cost of Video Analysis",
        solution: "Optimized video selection and batching to reduce the number of calls to Gemini API, minimizing processing costs."
      },
      {
        challenge: "Designing Effective System Prompts for Consistent Results",
        solution: "Iteratively developed structured system prompts to extract metadata in a standardized and repeatable manner."
      }
    ],
    status: "Active",
    gallery: [`${R2_URL}/VidAnalyzer/image1.png`],
    galleryDetails: [
      {
        title: "Metadata Example",
        description: "Example of the metadata extracted from a video.",
        maxWidth: "550px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "VocalOnly Generator",
    tag: "AUDIO TOOL",
    description: "A web-based platform developed for Durioo to separate vocals from video/audio content. The system allows users to upload videos, which are then processed via a FastAPI backend using AI audio separation models to extract vocals only. The resulting vocal tracks are automatically uploaded back to the Durioo platform for distribution.",
    tech: ["REACT", "MDX-NET", "FASTAPI"],
    impact: "Streamlined the process of creating vocal-only tracks, enabling content sharing that respects religious or regional preferences without requiring manual audio editing.",
    featured: false,
    color: "#00ACC1",
    category: "Automation",
    id: "VocalOnlyGenerator",
    year: "2024",
    thumbnail: `${R2_URL}/VocalOnlyGen/thumbnail.png`,
    workflow: [
      {
        step: "Video Selection (Durioo API)",
        description: "Users select the video content they want to extract vocals from."
      },
      {
        step: "Audio Separation (FastAPI Backend)",
        description: "The video is sent to a Python backend which uses AI audio separation models to isolate vocals from background music."
      },
      {
        step: "VocalOnly Upload (Durioo API)",
        description: "The extracted vocal-only track is automatically uploaded back to the Durioo platform for immediate use."
      }
    ],
    challenges: [
      {
        challenge: "Selecting the Most Suitable Model for Clean Vocal Separation",
        solution: "Experimented with multiple AI models and configurations to minimize residual background music and produce the highest quality vocal-only tracks."
      }
    ],
    status: "Active",
    gallery: [`https://youtu.be/1GFfzp7G0xM`],
    galleryDetails: [
      {
        title: "VocalOnly Showcase",
        description: "Shows how it separates vocals from background music.",
        maxWidth: "550px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "Subtitle Generator",
    tag: "TRANSCRIPTION TOOL",
    description: "A web platform for generating and translating subtitles for Durioo videos. Users select videos in a React frontend, which are processed through an ElevenLabs API backend to generate SRT files. Once subtitles are generated, users can optionally translate them into other languages using Gemini AI.",
    tech: ["REACT", "FASTAPI", "ELEVENLABS API", "GEMINI API"],
    impact: "Automates subtitle generation and translation, reducing manual effort and improving content accessibility.",
    featured: false,
    color: "#43A047",
    category: "AI/ML",
    id: "SubtitleGenerator",
    year: "2024",
    thumbnail: `${R2_URL}/SubtitleGen/thumbnail.png`,
    workflow: [
      {
        step: "Video Selection (Durioo API)",
        description: "Users select videos they want to generate subtitles for."
      },
      {
        step: "Subtitle Generation (FastAPI Backend)",
        description: "The video is sent to a Python backend which uses ElevenLabs API to generate SRT subtitle files."
      },
      {
        step: "Optional Translation (Gemini Backend)",
        description: "The extracted SRT subtitle files are translated into other languages using Gemini AI."
      },
      {
        step: "Subtitle Upload (Durioo API)",
        description: "The extracted SRT subtitle files are automatically uploaded back to the Durioo platform for immediate use."
      }
    ],
    challenges: [
      {
        challenge: "Accurately Generating Subtitles Across Diverse Video Content",
        solution: "Integrated ElevenLabs API with pre-processing to ensure accurate transcription for different audio qualities."
      },
      {
        challenge: "Ensuring High-Quality Translations",
        solution: "Used Gemini AI to translate SRT files while maintaining timing and context for readability."
      }
    ],
    status: "Active",
    gallery: [`${R2_URL}/SubtitleGen/image1.png`, `${R2_URL}/SubtitleGen/image2.png`, `${R2_URL}/SubtitleGen/image3.png`],
    galleryDetails: [
      {
        title: "Transcription Results",
        description: "The transcription results of the video.",
        maxWidth: "520px", // Besarkan supaya muat 2 saja sebaris
        flex: "1 1 450px",
        aspectRatio: "16/9"
      },
      {
        title: "Successful Transcription",
        description: "Successfully generated the subtitles for the video.",
        maxWidth: "520px",
        flex: "1 1 450px",
        aspectRatio: "16/9"
      },
      {
        title: "Multi-Language",
        description: "Preview of the subtitles in multiple languages.",
        maxWidth: "520px",
        flex: "1 1 450px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "Compilation Generator",
    tag: "VIDEO TOOL",
    description: "A web tool that allows users to select multiple videos and automatically merge them into a single video using FFmpeg. The system streamlines the compilation process, eliminating the need for manual download, import, and rendering in video editing software.",
    tech: ["REACT", "FASTAPI", "FFMPEG"],
    impact: "Saved significant production time by automating video compilation, allowing the team to quickly prepare videos for publishing or sharing without manual editing steps.",
    featured: false,
    color: "#FB8C00",
    category: "Automation",
    id: "CompilationGenerator",
    year: "2024",
    thumbnail: `${R2_URL}/CompilationGen/thumbnail.png`,
    workflow: [
      {
        step: "Video Selection (Durioo API)",
        description: "Users select the videos they want to compile from the platform."
      },
      {
        step: "Automated Merging (FFmpeg)",
        description: "The selected videos are sent to the backend, where FFmpeg merges them into a single output file without manual intervention."
      },
      {
        step: "Output Generation",
        description: "The compiled video is returned to the user, ready for sharing or further processing."
      }
    ],
    challenges: [
      {
        challenge: "Handling Intro/Outro Segments",
        solution: "The platform requires users to specify which videos have intro/outro segments to trim; otherwise, the system merges videos as-is, keeping the original intro/outro."
      }
    ],
    status: "Active",
    gallery: [`${R2_URL}/CompilationGen/image1.png`, `${R2_URL}/CompilationGen/image2.png`, `${R2_URL}/CompilationGen/image3.png`],
    galleryDetails: [
      {
        title: "Merging Process",
        description: "Selecting and ordering multiple video clips for seamless merging.",
        maxWidth: "520px", // Besarkan supaya muat 2 saja sebaris
        flex: "1 1 450px",
        aspectRatio: "16/9"
      },
      {
        title: "Thumbnail Extraction",
        description: "Extracting thumbnails from the video.",
        maxWidth: "520px",
        flex: "1 1 450px",
        aspectRatio: "16/9"
      },
      {
        title: "Final Output",
        description: "Ready-to-use compiled video output after successful merging.",
        maxWidth: "520px",
        flex: "1 1 450px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "Dubbing Generator",
    tag: "AUDIO TOOL",
    description: "An AI-powered dubbing system under development for Durioo, enabling high-quality multi-language dubbing to English. It automates the majority of tasks from audio extraction to re-synchronized video output, reducing manual editing effort and improving content localization efficiency.",
    tech: ["NEXT.JS", "FASTAPI", "PYTHON", "SILERO_VAD", "GEMINI API", "TTS"],
    impact: "Automates multi-language dubbing while maintaining high-quality synchronization, reducing the need for manual audio editing and enabling faster content localization.",
    featured: false,
    color: "#FB8C00",
    category: "AI/ML",
    id: "DubbingGenerator",
    year: "2025",
    thumbnail: `${R2_URL}/DubbingGen/thumbnail.png`,
    workflow: [
      {
        step: "Vocal Separation",
        description: "Extract vocals from video using the same AI model as VocalOnly Generator."
      },
      {
        step: "Transcription",
        description: "Transcribe extracted vocals into text using a speech-to-text pipeline similar to Subtitle Generator."
      },
      {
        step: "Audio & Transcription Chunking",
        description: "Split audio and transcription into segments (sentence by sentence) using Silero VAD to enable efficient AI dubbing."
      },
      {
        step: "Translation",
        description: "Translate each transcription segment to English via Gemini AI."
      },
      {
        step: "Text-to-Speech (TTS) Dubbing",
        description: "Send translated segments to a proprietary TTS AI model to generate dubbed audio."
      },
      {
        step: "Audio Enhancement & Trimming",
        description: "Enhance and trim generated TTS audio using Silero to ensure clean alignment and quality."
      },
      {
        step: "Video Re-synchronization",
        description: "Merge dubbed audio segments back into the original video, maintaining sync and continuity."
      },
      {
        step: "Manual Segment Adjustment (Web Interface)",
        description: "Next.js video editor allows manual correction of segments that failed automatic dubbing or timing."
      }
    ],
    challenges: [
      {
        challenge: "Handling Edge Cases Where Segments Fail Automatic Dubbing",
        solution: "Developed a web interface for manual adjustments, allowing team to correct segments and maintain high-quality output."
      },
      {
        challenge: "Maintaining Accurate Synchronization Across Multiple Audio Chunks",
        solution: "Chunked audio with Silero VAD and carefully aligned TTS output to video frames to minimize desync."
      },
      {
        challenge: "Cocktail Party Effect in Some Scenes",
        solution: "Currently investigating solutions for scenes with overlapping voices and background noise; pipeline for this is still under R&D."
      }
    ],
    status: "Discontinued",
    gallery: [`https://youtu.be/FA_M3uuG54o`, `${R2_URL}/DubbingGen/image1.png`],
    galleryDetails: [
      {
        title: "Dubbing Results",
        description: "Video outcome showing English dubbing perfectly aligned with original visuals.",
        flex: "1 1 450px",
        maxWidth: "550px",
        aspectRatio: "16/9"
      },
      {
        title: "Web Editor",
        description: "Next.js based interface for precise manual segment and timing correction.",
        flex: "1 1 450px",
        maxWidth: "550px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "Durioo Wrapped",
    tag: "Video Tool",
    description: "A prototype for a 'Spotify Wrapped'-style visualization for Durioo users. The system reads user data via Remotion and visualizes it to show personalized highlights.",
    tech: ["REMOTION", "JAVASCRIPT"],
    impact: "Created a proof-of-concept for personalized user analytics visualization, demonstrating feasibility for user engagement campaigns.",
    featured: true,
    color: "#E53935",
    category: "Web Development",
    id: "DuriooWrapped",
    year: "2025",
    thumbnail: `${R2_URL}/DuriooWrapped/thumbnail.png`,
    workflow: [
      {
        step: "Data Extraction",
        description: "Retrieve user-specific data from the Durioo database."
      },
      {
        step: "Visualization Prototype (Remotion)",
        description: "Generate visualizations of user data to mimic a 'Wrapped'-style highlight experience."
      }
    ],
    challenges: [
      {
        challenge: "Time Constraints",
        solution: "Due to last-minute request, only a prototype and skeleton could be created before project was discontinued."
      }
    ],
    status: "Discontinued",
    gallery: [`https://www.youtube.com/shorts/Wi8sEqCb7M8`, `${R2_URL}/DuriooWrapped/image1.png`],
    galleryDetails: [
      {
        title: "Personal Highlights",
        description: "Animated mobile-first visualization of user's yearly activity on Durioo+.",
        maxWidth: "320px",
        aspectRatio: "9/16"
      },
      {
        title: "Personalized Summary",
        description: "Personalized summary of user's yearly activity on Durioo+.",
        maxWidth: "320px",
        aspectRatio: "9/16"
      }
    ]
  },
  {
    title: "Durioo IP Gems",
    tag: "WEB & AI TOOL",
    description: "A centralized portal for Durioo's Gemini Gems, allowing the team to generate new scripts for IPs and create new Durioo characters efficiently from a single interface.",
    tech: ["EXPRESS.JS", "GEMINI"],
    impact: "Simplified access to multiple Gemini Gems, improving efficiency for the team when generating scripts and character content while keeping everything organized in one place.",
    featured: false,
    color: "#FFB300",
    category: "Web Development",
    id: "DuriooIPGems",
    year: "2025",
    thumbnail: `${R2_URL}/DuriooGems/thumbnail.png`,
    workflow: [
      {
        step: "Preconfigure Gemini Gems",
        description: "Set up system prompts and upload reference files so each Gem generates scripts or characters according to team requirements."
      },
      {
        step: "Link Centralization",
        description: "Aggregate all pre-configured Gems links into a single Express.js web portal for easy access."
      }
    ],
    challenges: [
      {
        challenge: "Configuring Gemini Gems to Meet Team Requirements",
        solution: "Iteratively fine-tuned the system prompts and uploaded reference files to Gemini Gems to ensure generated scripts and characters matched team expectations."
      }
    ],
    status: "Active",
    gallery: [`${R2_URL}/DuriooGems/image1.png`, `${R2_URL}/DuriooGems/image2.png`, `${R2_URL}/DuriooGems/image3.png`],
    galleryDetails: [
      {
        title: "Main Page",
        description: "Selection screen for different IP-specific Gemini Gems.",
        maxWidth: "400px", // Lebar secukupnya untuk muat 2 saja sebaris
        flex: "1 1 400px",
        aspectRatio: "1/1"
      },
      {
        title: "Available Characters",
        description: "Choosing character for the image generation.",
        maxWidth: "400px",
        flex: "1 1 400px",
        aspectRatio: "1/1"
      },
      {
        title: "Image Gen Result",
        description: "Result of the image generation in Google Gemini Custom.",
        maxWidth: "400px",
        flex: "1 1 400px",
        aspectRatio: "1/1"
      }
    ]
  },
  {
    title: "n8n Automation Solution",
    tag: "AI & AUTOMATION",
    description: "A company-wide automation framework using n8n, designed to streamline repetitive tasks and integrate workflows across different teams. Each workflow identifies manual processes, analyzes them, and implements automated solutions where possible.",
    tech: ["N8N", "NODE.JS", "API", "LLM"],
    impact: "Reduced manual work and improved process efficiency by automating recurring tasks and connecting disparate systems across the company.",
    featured: false,
    color: "#EA4B71",
    category: "Automation",
    id: "N8nAutomation",
    year: "2026",
    thumbnail: `${R2_URL}/n8n/thumbnail.png`,
    workflow: [
      {
        step: "Process Analysis",
        description: "Identify manual workflows within teams and understand the current process steps."
      },
      {
        step: "Automation Design",
        description: "Determine which parts of the workflow can be automated and build n8n workflows to handle them."
      },
      {
        step: "Implementation & Testing",
        description: "Deploy the automated workflow and test it to ensure it aligns with the intended process."
      }
    ],
    challenges: [
      {
        challenge: "Legacy Systems and Unorganized Workflows",
        solution: "Often had to coordinate with teams to reorganize or update outdated systems before automation could be implemented effectively."
      }
    ],
    status: "Active",
    gallery: [`${R2_URL}/n8n/image1.png`, `${R2_URL}/n8n/image2.png`, `${R2_URL}/n8n/image3.png`],
    galleryDetails: [
      {
        title: "Simple Chatbot",
        description: "Simple nodes for simple chatbot.",
        maxWidth: "520px", // Besarkan supaya muat 2 saja sebaris
        flex: "1 1 450px",
        aspectRatio: "16/9"
      },
      {
        title: "Database Query",
        description: "Use AI for database queries.",
        maxWidth: "520px",
        flex: "1 1 450px",
        aspectRatio: "16/9"
      },
      {
        title: "Knowledge Base Automation",
        description: "Extract database for knowledge base.",
        maxWidth: "520px",
        flex: "1 1 450px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "LLM Quantization",
    tag: "AI OPTIMIZATION",
    description: "A volunteer project to quantize fine-tuned LLMs from Mesolitica, such as LLaMA and Mistral models optimized for Malay, making them lightweight and runnable on local machines. The quantized models are shared on Hugging Face for public use.",
    tech: ["LLAMA.CPP", "PYTHON", "HUGGINGFACE"],
    impact: "Enabled wider access to fine-tuned LLMs by reducing model size and resource requirements, helping the community use high-quality Malay language models locally.",
    featured: false,
    color: "#795548",
    category: "AI/ML",
    id: "LLMQuantization",
    year: "2024",
    link: "https://huggingface.co/FarisIrfxn/malaysian-llama2-7b-32k-instructions-v2-GGUF",
    thumbnail: `${R2_URL}/LLMQuantize/thumbnail.png`,
    workflow: [
      {
        step: "Model Selection",
        description: "Choose fine-tuned LLaMA or Mistral models from Mesolitica optimized for Malay."
      },
      {
        step: "Quantization",
        description: "Use llama.cpp to quantize the models, reducing size and memory footprint for local usage."
      },
      {
        step: "Distribution",
        description: "Upload the quantized models to Hugging Face to share with the community for easy access."
      }
    ],
    challenges: [
      {
        challenge: "Reducing Model Size Without Losing Performance",
        solution: "Carefully applied llama.cpp quantization techniques to balance size reduction with model accuracy and usability."
      }
    ],
    status: "Completed",
    gallery: [`${R2_URL}/LLMQuantize/image1.png`],
    galleryDetails: [
      {
        title: "Model Showcase",
        description: "The quantized Malay LLM model hosted on Hugging Face, optimized for local inference.",
        maxWidth: "320px", // Optimization for portrait
        aspectRatio: "9/16"
      }
    ]
  },
  {
    title: "BraveGemini News",
    tag: "NEWS & AI",
    description: "A news aggregation platform built as part of a technical assessment for a startup. The system fetches news articles from the Brave API and enhances them with AI-generated summaries using Gemini, improving readability and user experience.",
    tech: ["VITE", "SQLITE", "BRAVE API", "GEMINI API"],
    impact: "Demonstrated the ability to quickly learn and integrate new technologies while enhancing raw news data with AI-powered summarization.",
    featured: false,
    color: "#FF7043",
    category: "Web Development",
    id: "BraveGeminiNews",
    year: "2025",
    github: "https://github.com/FarisIrfxn/BraveGemini-News",
    thumbnail: `${R2_URL}/BraveGeminiNews/thumbnail.png`,
    workflow: [
      {
        step: "News Fetching (Brave API)",
        description: "Retrieve news articles from Brave Search API."
      },
      {
        step: "Data Storage (SQLite)",
        description: "Store fetched articles locally for faster access and processing."
      },
      {
        step: "AI Summarization (Gemini)",
        description: "Generate concise summaries for each article to improve readability."
      },
      {
        step: "Frontend Display (Vite + React)",
        description: "Display articles and summaries in a responsive web interface."
      }
    ],
    challenges: [
      {
        challenge: "Learning New Tools and Stack Under Time Constraint",
        solution: "Quickly adapted to Vite, SQLite, and new APIs while building a functional end-to-end system."
      }
    ],
    status: "Completed",
    gallery: [`${R2_URL}/BraveGeminiNews/image1.png`],
    galleryDetails: [
      {
        title: "News Dashboard",
        description: "AI-summarized news feed fetching real-time data from the Brave API.",
        maxWidth: "400px", // Sesuai untuk square item
        aspectRatio: "1/1"
      }
    ]
  },
  {
    title: "NotificationTest",
    tag: "MOBILE APP",
    description: "A mobile app prototype built as part of a technical assessment to explore push notification systems. The project uses a simple Tic-Tac-Toe game concept to trigger notifications when certain conditions are met.",
    tech: ["EXPO", "REACT NATIVE", "ONESIGNAL"],
    impact: "Demonstrated the ability to quickly learn mobile development and implement push notification systems using OneSignal.",
    featured: true,
    color: "#26C6DA",
    category: "Mobile Development",
    id: "NotificationTest",
    year: "2026",
    github: "https://github.com/FarisIrfxn/NotiTest",
    thumbnail: `${R2_URL}/NotificationTest/thumbnail.png`,
    workflow: [
      {
        step: "Mobile App Development (Expo)",
        description: "Built a simple Tic-Tac-Toe mobile app as a testing environment for notification logic."
      },
      {
        step: "Trigger Logic",
        description: "Implemented game conditions where losing lives triggers a notification event."
      },
      {
        step: "Push Notification (OneSignal)",
        description: "Integrated OneSignal to send push notifications when the defined conditions are met."
      }
    ],
    challenges: [
      {
        challenge: "Learning Mobile Development with Expo for the First Time",
        solution: "Quickly adapted to Expo and React Native to build a functional prototype within a short timeframe."
      },
      {
        challenge: "Implementing Push Notification Logic",
        solution: "Integrated OneSignal and tested trigger-based notifications to ensure correct delivery."
      }
    ],
    status: "Completed",
    gallery: [`${R2_URL}/NotificationTest/image1.png`, `${R2_URL}/NotificationTest/image2.jpeg`],
    galleryDetails: [
      {
        title: "Game Interface",
        description: "Tic-Tac-Toe mobile game built with Expo and React Native.",
        maxWidth: "320px", // Sesuai untuk mobile layout
        aspectRatio: "9/16"
      },
      {
        title: "Push Notification",
        description: "Native push notification successfully delivered via OneSignal integration.",
        maxWidth: "320px",
        aspectRatio: "9/16"
      }
    ]
  },
  {
    title: "Rotoscope",
    tag: "ANIMATION",
    description: "A rotoscope animation project created during diploma studies, where selected scenes from a Bruno Mars music video were manually traced frame-by-frame to produce a stylized sketch-like visual.",
    tech: ["AFTER EFFECTS", "PHOTOSHOP"],
    impact: "Demonstrated strong fundamentals in animation, attention to detail, and frame-by-frame visual consistency.",
    featured: false,
    color: "#00BCD4",
    category: "Media Production",
    id: "Rotoscope",
    year: "2022",
    link: "https://youtu.be/7siQMLxLG-4",
    thumbnail: `${R2_URL}/Rotoscope/thumbnail.png`,
    workflow: [
      {
        step: "Scene Selection",
        description: "Selected a segment from a Bruno Mars music video for rotoscope animation."
      },
      {
        step: "Frame-by-Frame Tracing",
        description: "Manually traced each frame to create a consistent sketch-style animation."
      },
      {
        step: "Animation Compilation",
        description: "Compiled all traced frames into a continuous animated sequence."
      }
    ],
    challenges: [
      {
        challenge: "Maintaining Frame Consistency",
        solution: "Carefully traced each frame to ensure smooth motion and consistent visual style."
      },
      {
        challenge: "Time-Intensive Manual Process",
        solution: "Managed workflow efficiently to complete frame-by-frame tracing within project timeline."
      }
    ],
    status: "Completed",
    gallery: ["https://youtu.be/7siQMLxLG-4"],
    galleryDetails: [
      {
        title: "Bruno Mars",
        description: "Frame-by-frame stylized tracing of the 'That's What I Like' music video.",
        maxWidth: "550px",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    title: "Motion Graphics",
    tag: "ANIMATION",
    description: "A typography-based motion graphics project created during diploma studies, where song lyrics were animated into a music video using dynamic text and visual transitions.",
    tech: ["AFTER EFFECTS"],
    impact: "Showcased skills in motion design, timing, and visual storytelling through synchronized typography animation.",
    featured: false,
    color: "#FF9800",
    category: "Media Production",
    id: "MotionGraphics",
    year: "2022",
    link: "https://youtu.be/7EmxyM7Q0hY",
    thumbnail: `${R2_URL}/MotionGraphic/thumbnail.png`,
    workflow: [
      {
        step: "Lyric Breakdown",
        description: "Analyzed song lyrics and timing to plan animation flow."
      },
      {
        step: "Typography Animation",
        description: "Animated text using motion graphics techniques to match rhythm and mood of the music."
      },
      {
        step: "Final Composition",
        description: "Combined all animated elements into a complete music video sequence."
      }
    ],
    challenges: [
      {
        challenge: "Synchronizing Animation with Music Timing",
        solution: "Carefully aligned keyframes and transitions to match the rhythm and pacing of the song."
      },
      {
        challenge: "Creating Engaging Visual Flow",
        solution: "Experimented with typography styles and motion techniques to maintain viewer interest throughout the video."
      }
    ],
    status: "Completed",
    gallery: ["https://youtu.be/7EmxyM7Q0hY", "https://youtu.be/ptB3ImvZByU"],
    galleryDetails: [
      {
        title: "Typography Animation 1",
        description: "Based on Five Nights at Freddy's - It's Been So Long.",
        flex: "1 1 450px",
        maxWidth: "550px",
        aspectRatio: "16/9"
      },
      {
        title: "Typography Animation 2",
        description: "Based on Cuco - Lo Que Siento.",
        flex: "1 1 450px",
        maxWidth: "550px",
        aspectRatio: "16/9"
      }
    ]
  }
];
