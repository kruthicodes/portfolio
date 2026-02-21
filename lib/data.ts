export const navItems = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Contact", href: "#contact" }
] as const;

export const projects = [
  {
    title: "Distributed Checkout Intelligence",
    impact: "Reduced cart failure incidents by 38% via event-driven resiliency patterns.",
    tech: ["TypeScript", "Next.js", "Kafka", "Redis"],
    github: "https://github.com/kruthi/distributed-checkout-intelligence",
    demo: "https://checkout-intelligence.vercel.app"
  },
  {
    title: "MentorLoop Platform",
    impact: "Connected 8,000+ learners with targeted coding mentorship workflows.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/kruthi/mentorloop-platform",
    demo: "https://mentorloop-platform.vercel.app"
  },
  {
    title: "Realtime Knowledge Canvas",
    impact: "Cut internal documentation lookup time by 52% with semantic search.",
    tech: ["Next.js", "OpenAI", "Pinecone", "FastAPI"],
    github: "https://github.com/kruthi/realtime-knowledge-canvas",
    demo: "https://knowledge-canvas.vercel.app"
  },
  {
    title: "SpeakerOps Dashboard",
    impact: "Automated session planning and audience insights for 20+ events.",
    tech: ["TypeScript", "Tailwind", "Supabase", "Framer Motion"],
    github: "https://github.com/kruthi/speakerops-dashboard",
    demo: "https://speakerops.vercel.app"
  }
] as const;

export const aiSystems = [
  {
    title: "Enterprise RAG Chatbot",
    problem:
      "Support teams struggled with fragmented knowledge across docs, tickets, and policy repositories.",
    approach:
      "Built retrieval-augmented conversational workflows with context ranking and citation-bound responses.",
    architecture:
      "LLM orchestrator + vector database + backend API gateway with role-based access controls.",
    tech: ["Python", "FastAPI", "LangChain", "Pinecone", "OpenAI"],
    impact:
      "Improved first-response accuracy from 71% to 91% and reduced escalation volume by 34%."
  },
  {
    title: "Multi-Agent Research Assistant",
    problem:
      "Research requests required manual synthesis across web, internal notes, and historical reports.",
    approach:
      "Designed planner, tool-using, and retrieval agents with deterministic routing for repeatable results.",
    architecture:
      "Planner agent decomposes tasks, tool agent executes API/search calls, retrieval agent grounds findings with structured JSON outputs.",
    tech: ["TypeScript", "Node.js", "LangGraph", "Elasticsearch", "OpenAI"],
    impact:
      "Reduced analyst preparation time by 47% while improving response consistency across teams."
  },
  {
    title: "Custom Fine-Tuned Model",
    problem:
      "General-purpose models underperformed on domain-specific compliance language and edge cases.",
    approach:
      "Fine-tuned a transformer on 1.4M labeled examples with targeted instruction tuning and eval gating.",
    architecture:
      "Data curation pipeline + distributed training framework + model registry + autoscaled inference endpoint.",
    tech: ["PyTorch", "Transformers", "DeepSpeed", "Weights & Biases", "Kubernetes"],
    impact:
      "Raised F1 from 0.78 to 0.91, latency under 250ms P95, deployed via containerized API service."
  }
] as const;
