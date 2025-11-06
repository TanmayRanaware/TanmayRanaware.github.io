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
    "Full Stack Developer contributing to all phases of the software development lifecycle. Recognized for delivering scalable, high-performance, maintainable applications with clean architecture, seamless collaboration, and reliable cloud deployment.",

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
      techStack: "Java, Spring Boot, Python, Go, Redis, MySQL, Kafka, Spark, Docker, Kubernetes, REST, gRPC, AWS (EC2, EKS, Lambda, CloudWatch, RDS), Terraform, CI/CD (Jenkins)",
      subroles: [
        {
          team: "Financial Services Team",
          bullets: [
            "Built high-throughput REST and gRPC microservices using Java and Spring Boot, processing thousands of financial transactions per second with 99.9% uptime and low-latency performance.",
            "Implemented asynchronous event pipelines with Kafka and AWS Lambda for secure, real-time payment orchestration, reducing end-to-end transaction latency by 35%.",
            "Strengthened platform reliability through test-driven development (TDD), integration testing, and automated CI/CD pipelines, ensuring fault tolerance and auditability across distributed systems."
          ]
        },
        {
          team: "Telematics Team",
          bullets: [
            "Designed a real-time data ingestion service using Kafka, Cassandra, and Spark, processing 100 GB+ of telemetry data/day with optimized throughput and parallelism.",
            "Containerized and deployed scalable microservices with Docker and Kubernetes on AWS EKS, achieving resilient, self-healing cloud infrastructure production stack.",
            "Developed monitoring and alerting pipelines via AWS CloudWatch and Prometheus, automating anomaly detection and ensuring secure, mission-critical uptime for large-scale distributed services."
          ]
        }
      ]
    },
    {
      company: "Legato Health Technologies (Elevance Health)",
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      period: "May 2022 – Jun 2022",
      techStack: "Python, PySpark, Hive, TensorFlow, Docker, Grafana, Prometheus, CI/CD",
      bullets: [
        "Engineered ETL pipelines to process healthcare data, ensuring data integrity and compliance.",
        "Built Grafana + Prometheus dashboards for real-time pipeline monitoring, reducing alert response time by 25%.",
        "Applied TDD within CI/CD pipelines to automate data validation and regression testing."
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
