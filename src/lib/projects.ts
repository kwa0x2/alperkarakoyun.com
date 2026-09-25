export type Category = "Full-Stack" | "Backend" | "Security" | "Tools";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: Category;
  featured?: boolean;
  stars?: number;
  status?: "live";
  privateSource?: boolean;
  stack: string[];
  links: ProjectLink[];
  highlights?: string[];
};

export const categories: readonly ("All" | Category)[] = [
  "All",
  "Full-Stack",
  "Backend",
  "Security",
];

export const projects: Project[] = [
  {
    slug: "tunploy",
    title: "Tunploy",
    tagline: "Self-hosted WireGuard VPN panel",
    description:
      "A self-hosted control panel for your own WireGuard VPN servers, shipped as a single Docker container. Spin up VPN servers on this or other machines over SSH, add devices by QR code, and see who is connected and how much they use, without writing a config file.",
    category: "Full-Stack",
    featured: true,
    status: "live",
    stack: [
      "Go",
      "WireGuard",
      "Docker",
      "SQLite",
      "SSH",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Let’s Encrypt",
      "Amazon S3",
      "GitHub Actions",
    ],
    links: [
      { label: "Live", href: "https://tunploy.alperkarakoyun.com" },
      { label: "Code", href: "https://github.com/kwa0x2/tunploy" },
    ],
    highlights: [
      "One-command install; each VPN runs in its own container",
      "Multi-node: runs VPN servers on other VPSes over SSH",
      "Per-device data limits, expiry, live usage and activity log",
      "Scoped HTTP API, encrypted S3 backups, updates that roll back",
    ],
  },
  {
    slug: "taskpricer",
    title: "TaskPricer",
    tagline: "AI pricing for freelance work",
    description:
      "A live SaaS that analyzes freelance project briefs, breaks them into structured tasks, estimates completion time with AI, and calculates price offers from a developer’s hourly rate. A CV-based skill assessment sharpens the estimates.",
    category: "Full-Stack",
    featured: true,
    status: "live",
    privateSource: true,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Express",
      "MongoDB",
      "RabbitMQ",
      "JWT",
      "Paddle",
      "OpenAI API",
      "Amazon S3",
      "Docker",
      "Dokploy",
      "Cloudflare",
    ],
    links: [
      { label: "Live", href: "https://taskpricer.com/en" },
      {
        label: "Post",
        href: "https://www.linkedin.com/posts/atalay-karahan_taskpricer-yapay-zeka-ile-proje-fiyatlama-activity-7381599942819311617-GXA2",
      },
    ],
    highlights: [
      "Turns freelance briefs into structured task breakdowns",
      "AI time estimates and price offers from hourly rates",
      "CV-based skill assessment to improve accuracy",
      "Built end to end together with a teammate",
    ],
  },
  {
    slug: "smartsrt",
    title: "SmartSRT",
    tagline: "AI-powered subtitle generation",
    description:
      "Upload a video and get accurate subtitles back as an SRT file. Audio is extracted, transcribed with OpenAI Whisper on AWS Lambda, and returned to the user, all built as event-driven microservices.",
    category: "Full-Stack",
    featured: true,
    stars: 1,
    status: "live",
    stack: [
      "Go",
      "Next.js",
      "TypeScript",
      "AWS Lambda",
      "Amazon S3",
      "DynamoDB",
      "RabbitMQ",
      "MongoDB",
      "Whisper",
      "Paddle",
      "Prometheus",
      "Grafana",
      "Sentry",
      "Docker",
    ],
    links: [
      { label: "Live", href: "https://smartsrt.com" },
      { label: "Backend", href: "https://github.com/kwa0x2/SmartSRT-Backend" },
      { label: "Frontend", href: "https://github.com/kwa0x2/SmartSRT-Frontend" },
      { label: "Lambda", href: "https://github.com/kwa0x2/SmartSRT-Lambda" },
      {
        label: "Post",
        href: "https://www.linkedin.com/posts/alperkarakoyun_smartsrt-ai-powered-subtitle-generator-activity-7391036443789279232-E-hG",
      },
    ],
    highlights: [
      "Event-driven microservices coordinated with RabbitMQ",
      "Serverless transcription on AWS Lambda + Whisper",
      "Clean Architecture with OAuth2 and Paddle billing",
      "Full observability via Prometheus, Grafana & Sentry",
    ],
  },
  {
    slug: "swiftchat",
    title: "SwiftChat",
    tagline: "Real-time chat application",
    description:
      "A real-time messaging app with authentication, sessions and live updates over WebSockets. A Go/Gin backend with PostgreSQL, Redis and S3, paired with a polished Next.js + shadcn/ui frontend.",
    category: "Full-Stack",
    featured: true,
    stars: 5,
    status: "live",
    stack: [
      "Go",
      "Gin",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Amazon S3",
      "JWT",
      "Next.js",
      "Auth.js",
      "shadcn/ui",
      "Tailwind CSS",
      "Docker",
    ],
    links: [
      { label: "Live", href: "https://chat.alperkarakoyun.com" },
      { label: "Backend", href: "https://github.com/kwa0x2/SwiftChat-Backend" },
      { label: "Frontend", href: "https://github.com/kwa0x2/SwiftChat-Frontend" },
      {
        label: "Post",
        href: "https://www.linkedin.com/posts/alperkarakoyun_new-project-swiftchat-hey-everyone-activity-7251826634926739457-xGvu",
      },
    ],
    highlights: [
      "Real-time messaging powered by Socket.IO",
      "JWT auth with Redis-backed sessions",
      "Profile media stored on Amazon S3",
      "Fully containerized with Docker Compose",
    ],
  },
  {
    slug: "gosortstack",
    title: "GoSortStack",
    tagline: "Stack-sorting visualizer",
    description:
      "A stack-based sorting algorithm built in Go for the 42 Heilbronn sorting challenge, sorting data with a limited instruction set and two-stack constraints. It also ships with a web-based visualizer that animates each move.",
    category: "Tools",
    stack: ["Go", "Algorithms", "Data Structures", "Web"],
    links: [
      { label: "Code", href: "https://github.com/kwa0x2/GoSortStack" },
      {
        label: "Post",
        href: "https://www.linkedin.com/posts/alperkarakoyun_recently-i-decided-to-improve-my-skills-activity-7394343223063752705-fWhq",
      },
    ],
    highlights: [
      "Built for the 42 Heilbronn sorting challenge",
      "Optimized for a limited instruction set and two-stack constraints",
      "Interactive web visualizer that animates each move",
    ],
  },
  {
    slug: "nettasec",
    title: "NettaSec",
    tagline: "Cybersecurity company platform",
    description:
      "Corporate site and platform for a cybersecurity company. A marketing frontend built in Next.js, backed by a Go (Gin + GORM) API over PostgreSQL.",
    category: "Full-Stack",
    stars: 1,
    status: "live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "Gin", "PostgreSQL"],
    links: [
      { label: "Live", href: "https://nettasec.alperkarakoyun.com" },
      { label: "Frontend", href: "https://github.com/kwa0x2/nettasec-com" },
    ],
  },
  {
    slug: "medimanage",
    title: "MediManage",
    tagline: "Clinic management system",
    description:
      "A healthcare management system for appointments, patients and records. Go (Gin + GORM) backend over PostgreSQL with Redis, plus a Next.js dashboard.",
    category: "Full-Stack",
    stack: ["Go", "Gin", "GORM", "PostgreSQL", "Redis", "Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Backend", href: "https://github.com/kwa0x2/MediManage-Backend" },
      { label: "Frontend", href: "https://github.com/kwa0x2/MediManage-Frontend" },
    ],
  },
  {
    slug: "settle",
    title: "Settle",
    tagline: "Chat for serious gamers",
    description:
      "A gamer-focused chat where only Steam accounts with 500+ hours can join. Steam OpenID auth, real-time messaging and S3 media handling, structured with Clean Architecture.",
    category: "Backend",
    stars: 1,
    stack: [
      "Go",
      "MongoDB",
      "Steam OpenID",
      "Socket.IO",
      "Amazon S3",
      "Clean Architecture",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    links: [{ label: "Backend", href: "https://github.com/kwa0x2/Settle-Backend" }],
  },
  {
    slug: "coffeeshop",
    title: "CoffeeShop",
    tagline: "Coffee shop operations backend",
    description:
      "A backend for running a coffee shop, covering orders, inventory and user auth. Express + Mongoose with RabbitMQ messaging, Redis-backed sessions and Sentry monitoring.",
    category: "Backend",
    stars: 1,
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose", "RabbitMQ", "Redis", "Sentry", "Docker"],
    links: [{ label: "Backend", href: "https://github.com/kwa0x2/CoffeeShop-Backend" }],
  },
  {
    slug: "go4hackers",
    title: "Go4Hackers Scanner",
    tagline: "Vulnerability scanner",
    description:
      "A small, fast vulnerability scanner written in Go for quick security reconnaissance from the command line.",
    category: "Security",
    stars: 2,
    stack: ["Go", "Security", "Networking", "CLI"],
    links: [{ label: "Code", href: "https://github.com/kwa0x2/Go4Hackers-Vuln-Scanner" }],
  },
];
