export const site = {
  name: "Alper Karakoyun",
  role: "Full Stack Developer",
  url: "https://alperkarakoyun.com",
  email: "hello@alperkarakoyun.com",
  phone: "+353 85 800 5606",
  company: {
    name: "Netta Technologies",
    cro: "5802085",
    url: "https://core.cro.ie/e-commerce/company/5802085",
  },
  resume: "/alper-karakoyun-cv.pdf",
  intro:
    "Full-stack developer building products end to end. I work with Go and Node.js on the backend and Next.js on the frontend, designing clean APIs, real-time and event-driven services, and shipping them with the infrastructure to actually run in production.",
  social: {
    github: "https://github.com/kwa0x2",
    linkedin: "https://www.linkedin.com/in/alperkarakoyun/",
  },
  about: [
    "I’m Alper, a full-stack developer with a security background, living in Dublin. I work mostly with Go and Node.js on the backend and Next.js on the frontend.",
    "I’ve built things like a real-time chat app, an AI subtitle tool and TaskPricer, a SaaS for pricing freelance work. I tend to enjoy projects that have a real backend behind them: APIs, queues, auth, payments and the AWS setup to run it all.",
    "Outside of product work, I keep a bunch of smaller projects and experiments on my GitHub.",
  ],
  facts: [
    { label: "Focus", value: "Full-stack web development" },
    { label: "Based in", value: "Dublin, Ireland" },
    { label: "Work eligibility", value: "EU / UK" },
  ],
} as const;

export const stats = [
  { value: "20+", label: "Repositories" },
  { value: "5★", label: "Top project" },
] as const;

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const techGroups = [
  {
    title: "Languages",
    items: ["Go", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Gin", "Express", "Node.js", "REST APIs", "Socket.IO", "RabbitMQ", "OpenAI API"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "React Native", "Tailwind CSS", "shadcn/ui", "Auth.js"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "GORM", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS Lambda", "Amazon S3", "Docker", "Cloudflare", "Dokploy", "Prometheus", "Grafana", "Sentry"],
  },
  {
    title: "Practices",
    items: ["Microservices", "Clean Architecture", "Event-driven", "JWT / OAuth2", "OpenID"],
  },
] as const;
