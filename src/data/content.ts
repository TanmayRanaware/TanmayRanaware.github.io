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
      title: "CryptoStream Gateway",
      description: "Production-grade real-time transaction streaming gateway for crypto trade simulation with sub-100ms latency. Supports 50k+ concurrent WebSocket connections, 500k+ messages/second throughput, with Kafka event backbone, Redis caching, and comprehensive monitoring.",
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
      subroles: [
        {
          team: "Financial Services Team",
          bullets: [
            "Engineered LLM-powered document analysis workflows, cutting loan collection time by 40–50%.",
            "Built account aggregator REST APIs (Java, Spring Boot, OneMoney) with circuit breaker patterns for 99.9% uptime.",
            "Practiced TDD with 90%+ coverage to harden model integrations and accelerate safe ML deploys."
          ]
        },
        {
          team: "GPS Team",
          bullets: [
            "Designed telemetry pipelines (Kafka, AWS Glue) processing 680GB/day for 20k+ IoT devices.",
            "Built Spring Boot + MySQL + Redis services to cut device checkout latency 170s → 50s.",
            "Improved observability and autoscaling to sustain 99.99% SLA across clusters."
          ]
        }
      ]
    },
    {
      company: "Legato Health Technologies",
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      period: "May 2022 – Jul 2022",
      bullets: [
        "Built synthetic data pipelines (Python, Hive, CTGAN) for privacy-preserving ML.",
        "Automated distributed telemetry replication to speed up research refreshes.",
        "Produced statistically preserved datasets to boost reproducibility and compliance."
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
