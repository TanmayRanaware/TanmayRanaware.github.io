const data = {
  profile: {
    name: "Tanmay Ranaware",
    title: "Software Engineering • Artificial Intelligence",
    tagline: "San Jose, California",
    email: "tanmayranware14@gmail.com",
    phone: "+1 408-549-6932",
    location: "San Jose, CA",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tanmayranaware14/" },
      { label: "GitHub", href: "https://github.com/TanmayRanaware" },
      { label: "Download Resume", href: "/Tanmay_Ranaware_Resume.pdf" }
    ]
  },

  about:
    "Software Engineer contributing to all phases of the software development lifecycle. Recognized for delivering scalable, high-performance, maintainable applications with clean architecture, seamless collaboration, and reliable cloud deployment.\n\nWith hands-on experience at Blackbuck (Zinka Logistics) and Legato Health Technologies (Elevance Health), I've developed and deployed production grade microservices, optimized data pipelines, fine-tuned LLM, and designed cloud infrastructure using AWS, Kubernetes, and Terraform. My work blends strong fundamentals in software architecture, data engineering, AI and DevOps automation.\n\nI love working across the stack from backend services and APIs to frontend interfaces and cloud orchestration. Beyond coding, I'm an open-source contributor, a Hacktoberfest 2025 Super Contributor, and a Google Cloud-certified GenAI developer, constantly exploring AI.",

  research: [
    {
      title: "Error cascade detection in LLM agent pipelines:",
      description: "An error cascade detection system for LLM agent pipelines enabling reliable deployment of agentic AI. Reduced task failure rates through real-time monitoring, cascade prediction, and automated recovery mechanisms.",
      tech: []
    },
    {
      title: "RAG system prompt injection defense with content verification",
      description: "A security filter that stops attackers from hijacking RAG systems through poisoned entities",
      tech: []
    }
  ],

  projects: [
    {
      title: "AppLens",
      description: "Engineered a distributed microservice analysis platform that scans GitHub repositories of microservices and builds interactive 3D dependency graphs visualizing HTTP calls, Kafka flows, and service communication. Developed backend systems in FastAPI + PostgreSQL integrated with CrewAI for error detection and what-if simulations, leveraging vector search (pgvector) for intelligent dependency reasoning. Deployed using Docker Compose, implemented GitHub MCP to get repo data and scan microservices for connections between them, and designed RESTful APIs to query large service graphs efficiently.",
      tech: ["AWS", "Docker", "Jenkins", "Python", "FastAPI", "PostgreSQL (pgvector)", "Kafka", "CrewAI", "Next.js"],
      links: []
    },
    {
      title: "Driftwise",
      description: "Comprehensive system for monitoring financial contract changes and detecting policy violations using Claude Sonnet 4.5, LangGraph, and LandingAI ADE. Continuously processes financial contracts and automatically generates machine-enforceable validation rules for real-time compliance monitoring with sub-second violation detection.",
      tech: ["Python", "FastAPI", "LangGraph", "Claude Sonnet 4.5", "LandingAI ADE", "Pathway", "Server-Sent Events", "PDF Processing"],
      links: []
    },
    {
      title: "TraceQA - Enterprise Requirements AI",
      description: "Comprehensive system for managing enterprise requirements, generating test cases, and tracking changes in banking and financial services projects. Features RAG-powered semantic search, version control with semantic diffing, automated test generation, and on-premises deployment with support for local LLMs, Claude, Gemini, and OpenAI.",
      tech: ["Python", "FastAPI", "RAG", "Vector Database", "Docker", "Ollama", "Anthropic Claude", "Google Gemini", "OpenAI", "PDF Processing"],
      links: []
    },
    {
      title: "CryptoStream Gateway",
      description: "Real-time transaction streaming gateway for crypto trade simulation with sub-100ms latency. Features Kafka event backbone, Redis caching, WebSocket connections, and comprehensive monitoring.",
      tech: ["Go", "Node.js", "Kafka", "Redis", "WebSocket", "Docker", "Kubernetes", "AWS Lambda", "Prometheus", "Grafana", "k6"],
      links: []
    },
    {
      title: "Tool Research AI-Agent",
      description: "LLM research agent with web scraping and structured extraction to automate tool evaluation and synthesize insights.",
      tech: ["LangChain", "LangGraph", "LangSmith", "Python", "Firecrawl"],
      links: []
    },
    {
      title: "Transfer Learning for Pneumonia Detection",
      description: "Implemented CNN transfer learning (ResNet, DenseNet, InceptionV3) with explainability (SHAP/LIME). 96% acc, 90% precision, 88% recall, 89% F1.",
      tech: ["TensorFlow", "Keras", "Python"],
      links: []
    }
  ],

  experience: [
    {
      company: "Blackbuck (Zinka Logistics)",
      role: "Software Engineer",
      location: "Bangalore, India",
      period: "Jul 2023 – Jun 2025"
    },
    {
      company: "Legato Health Technologies (Elevance Health)",
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      period: "May 2022 – Jun 2022"
    }
  ],

  achievements: [
    { text: "Open Source Contribution - Super Contributor in Hacktoberfest 2025", image: "/images/hacktoberfest-2025-badge.png" },
    "Google Cloud Badges: Prompt Design in Vertex AI (Apr 2025)",
    "Build Real-World AI Apps with Gemini and Imagen (Apr 2025)",
    "Develop GenAI Apps with Gemini and Streamlit (Apr 2025)",
    "Inspect Rich Documents with Gemini Multimodality and RAG (Apr 2025)",
    "Explore Generative AI with Vertex AI Gemini API (Apr 2025)"
  ]
} as const

export type Content = typeof data
export default data
