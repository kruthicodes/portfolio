export const siteConfig = {
  profile: {
    monogram: "K",
    name: "Kruthika",
    greeting: "Hello, I'm",
    roleLabel: "I build",
    buildItems: ["AI Automation Systems", "Apps", "Web Platforms"],
    summary:
      "Passionate full stack developer with 5 years of professional experience building scalable software applications and AI-powered solutions",
    email: "kruthi.codes@gmail.com",
    location: "Bangalore, India",
    photoSrc: "/dp.jpg",
    photoAlt: "Kruthika profile photo"
  },
  sections: {
    about: true,
    whatIDo: true,
    projects: false,
    aiSystems: false,
    speaking: false,
    mentorship: true,
    contact: true
  },
  about: {
    title: "About",
    subtitle:
      "I build software that scales with product ambition and engineer AI systems that stay reliable in production.",
    body:
      "I am an SDE 2 at Amex focused on distributed backend platforms, resilient full-stack products, and practical AI applications. Alongside engineering, I mentor developers, teach modern web and AI workflows, and speak about architecture decisions that improve both system reliability and team velocity."
  },
  whatIDo: {
    title: "What I Do",
    subtitle: "Engineering depth, AI product thinking, and practical knowledge transfer.",
    cards: [
      {
        title: "Engineering",
        desc: "Design and deliver robust full-stack systems with strong observability and reliability practices."
      },
      {
        title: "AI & Intelligent Systems",
        desc: "Build production-ready LLM applications, retrieval pipelines, and evaluation frameworks."
      },
      {
        title: "Tech Educator",
        desc: "Design and deliver practical learning sessions that simplify engineering, system design, and AI for students and professionals."
      }
    ]
  },
  mentorship: {
    title: "Teaching & Mentorship",
    subtitle:
      "Focused coaching for placements, interviews, DSA, system design, and practical AI implementation.",
    description:
      "Mentorship combines structured roadmap planning, project-based review cycles, and focused guidance for placement preparation, interview preparation, DSA coaching, system design rounds, and AI project readiness.",
    focusItems: [
      "Placement prep with role-wise strategy and timelines",
      "Interview prep with targeted question strategy and feedback loops",
      "DSA coaching focused on patterns, speed, and clarity",
      "System design mentoring for LLD and HLD rounds",
      "AI mentoring for real-world application and deployment"
    ],
    topmateUrl: "https://topmate.io/kruthika_r11/",
    topmateLabel: "Book a Mentorship Session on Topmate",
    stats: [
      { label: "Students Mentored", value: 100 },
      { label: "Hands-On Workshops", value: 10 }
    ]
  },
  contact: {
    title: "Contact",
    heading: "Let's Build, Speak, or Collaborate",
    email: "kruthi.codes@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/kruthika-786?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  }
} as const;

export function getNavItems() {
  const items = [
    { key: "about", label: "About", href: "#about" },
    { key: "whatIDo", label: "What I Do", href: "#what-i-do" },
    { key: "projects", label: "Projects", href: "#projects" },
    { key: "aiSystems", label: "AI Systems", href: "#ai-systems" },
    { key: "speaking", label: "Talks", href: "#speaking" },
    { key: "mentorship", label: "Mentorship", href: "#mentorship" },
    { key: "contact", label: "Contact", href: "#contact" }
  ] as const;

  return items.filter((item) => siteConfig.sections[item.key]);
}
