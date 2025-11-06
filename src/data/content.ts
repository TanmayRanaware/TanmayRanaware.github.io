const data = {
  profile: {
    name: "Tanmay Ranaware",
    title: "Artificial Intelligence • Machine Learning • Software Engineering",
    tagline: "San Jose, California",
    email: "tanmayranware14@gmail.com",
    phone: "+1 408-549-6932",
    location: "San Jose, CA",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tanmayranaware14/" },
      { label: "GitHub", href: "https://github.com/TanmayRanaware" },
      { label: "Download Resume", href: "/Tanmay_Ranaware_AI.pdf" }
    ]
  },

  about:
    "Software engineer and AI practitioner with hands-on experience building LLM-powered systems, high-scale data pipelines, and production microservices. Comfortable across the ML lifecycle (training, deployment, MLOps) and backend (Java/Spring, Python). Passionate about reliable systems and shipping clean, measurable outcomes.",

  projects: [
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
      period: "Jul 2023 – Jun 2025",
      techStack: "Java, Spring Boot, Python, Redis, MySQL, Kafka, Spark, Docker, Kubernetes, REST, gRPC, CI/CD, Cassandra, Terraform, Jenkins, GitHub Actions, AWS (EC2, EKS, S3, Auto Scale, Lambda, Cost Explorer, Glue, RDS)",
      subroles: [
        {
          team: "Financial Services Team",
          bullets: [
            "Developed high-availability REST APIs and orchestration layers handling loan disbursement and repayment workflows with algorithm-driven validation logic, sustaining 99.9% uptime.",
            "Engineered scalable document verification and credit scoring pipelines, integrating rule-based decision models.",
            "Optimized data models and Redis caching, cutting response latency by 40% and improving throughput for loan approval, payment authorization, and transaction reconciliation APIs.",
            "Built ML-powered risk scoring models using Python and Scikit-learn, integrating predictions into transactional microservices for real-time loan validation.",
            "Collaborated with product and sales team to build a Multi Agent by fine tuning LLM for risk assessment heuristics, automate fraud checks, and ensure compliance with transactional SLAs using TDD and CI/CD."
          ]
        },
        {
          team: "Telematics Team",
          bullets: [
            "Led the design and implementation of a multilayered GPS Data Ingestion Pipeline using Kafka, Cassandra, and Spark, processing around 100GB/day of telemetry data with 40% improvement in throughput.",
            "Developed and optimized spatial-matching and route-optimization algorithms for GPS data streams, reducing tracking deviation by 25% and enhancing real-time location accuracy across 20K+ devices.",
            "Spearheaded migration of Telematics Stack from GCP to AWS, benchmarking Redis vs MySQL bottlenecks and implementing caching practices to cut query latency from 300ms to 40ms by revamping the GPS Subscription System.",
            "Engineered a Vendor Data Ingestion System for B2B customers enabling seamless telemetry integration."
          ]
        }
      ]
    },
    {
      company: "Legato Health Technologies (Elevance Health)",
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      period: "May 2022 – Jun 2022",
      bullets: [
        "Engineered scalable ETL and ML pipelines to process healthcare data, ensuring regulatory compliance.",
        "Built end-to-end monitoring dashboards using Grafana and Prometheus to visualize pipeline health and latency.",
        "Optimized distributed Spark jobs through performance tuning and testing, integrating unit and integration checks in CI/CD pipelines, which improved deployment reliability by 25%."
      ]
    },
    {
      company: "The Sparks Foundation",
      role: "Web Development Intern",
      location: "Bangalore, India",
      period: "Mar 2022 – Apr 2022",
      bullets: [
        "Developed a full-stack data management platform with HTML/CSS/JS.",
        "Optimized MySQL schemas for efficient queries and analytics.",
        "Dockerized and deployed on AWS with CI/CD."
      ]
    }
  ],

  achievements: [
    "Google Cloud Badges: Prompt Design in Vertex AI (Apr 2025)",
    "Build Real-World AI Apps with Gemini and Imagen (Apr 2025)",
    "Develop GenAI Apps with Gemini and Streamlit (Apr 2025)",
    "Inspect Rich Documents with Gemini Multimodality and RAG (Apr 2025)",
    "Explore Generative AI with Vertex AI Gemini API (Apr 2025)"
  ]
} as const

export type Content = typeof data
export default data
