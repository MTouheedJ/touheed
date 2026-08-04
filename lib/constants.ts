import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Code2,
  Cpu,
  FileDown,
  Layers,
  Link,
  Mail,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export type NavSectionId =
  | "top"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "contact";

export type SocialId = "email" | "linkedin" | "github";

export type SkillGroupId = "frontend" | "backend" | "tools";

/** Ambient color story per section (extends hero: fuchsia / violet / cyan) */
export type SectionTone = "violet" | "fuchsia" | "cyan";

export type PortfolioNavItem = {
  id: NavSectionId;
  label: string;
};

export type PortfolioSocialLink = {
  id: SocialId;
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  id: SkillGroupId;
  label: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: {
    live?: ProjectLink;
    github?: ProjectLink;
  };
};

export const PORTFOLIO = {
  meta: {
    title: "Mirza Touheed Ali Baig — Software Engineer",
    description:
      "Software Engineer building polished Next.js products with reliable APIs, scalable architecture, and measurable outcomes.",
    ogTitle: "Mirza Touheed Ali Baig",
  },

  person: {
    name: "Mirza Touheed Ali Baig",
    location: "Lahore, Pakistan",
    role: "Full-Stack Developer",
    tagline:
      "I build end-to-end web applications with React/Next.js front-ends backed by Node.js and FastAPI services.",
    availabilityBadge: "Open to select opportunities",
  },

  /**
   * Résumé file: add your PDF to the project’s `public/` folder so it is served
   * at the URL below (e.g. public/Touheed_resume.pdf → /Touheed_resume.pdf).
   */
  resume: {
    href: "/Touheed_resume.pdf",
    /** Suggested filename when the user downloads (browser `download` attribute) */
    downloadFileName: "Mirza_Touheed_Ali_Baig_Resume.pdf",
    label: "Download CV",
    shortLabel: "Résumé",
    description: "Full CV as a single PDF — experience, impact, and stack.",
    icon: FileDown,
  },

  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ] satisfies PortfolioNavItem[],

  hero: {
    eyebrow: "Developer Portfolio",
    headlineAccent: "Polished interfaces. Reliable systems.",
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Contact", href: "#contact" },
    stats: [
      { label: "Experience", value: "4 years" },
      { label: "Production modules shipped", value: "15+" },
      { label: "Users impacted", value: "10K+" },
    ],
    quickFacts: [
      "Lighthouse 95+ mentality",
      "SSR • SSG • ISR with API integration",
      "AI-assisted dev workflows (GitHub Copilot, Cursor)",
      "OpenAI-powered features and prompt engineering",
    ],
  },

  about: {
    title: "About",
    lead: "Full-Stack Developer with 4 years building production web applications end-to-end — React/Next.js/TypeScript front-ends backed by Node.js and FastAPI systems.",
    body: [
      "Most of my work sits on the user-facing side: Next.js App Router, responsive UI systems, accessibility, motion, and performance tuning that keeps products feeling sharp.",
      "I also build dependable backend services and APIs, working with Supabase/PostgreSQL, FastAPI, Docker, and OpenAI-powered LLM features.",
      "I’ve shipped platforms serving 10K+ users with strong frontend performance (95+ Lighthouse, ~30% faster loads) and scalable architecture.",
      "I earned a BSc in Computer Science from Bahria University and bring CI/CD, Agile delivery, and practical product focus into every build.",
    ],
    highlights: [
      {
        title: "Performance-first",
        description:
          "Lighthouse-focused interfaces with careful hydration boundaries, lean bundles, and sensible data loading.",
        icon: Zap,
      },
      {
        title: "Scalable UI architecture",
        description:
          "Design systems, patterns, and conventions that reduce churn as features grow.",
        icon: Layers,
      },
      {
        title: "Backend awareness",
        description:
          "API integration, auth, database basics, and caching choices that support stable product flows.",
        icon: ShieldCheck,
      },
      {
        title: "Reliable delivery",
        description:
          "CI/CD with GitHub Actions and pragmatic quality gates that keep velocity high.",
        icon: Sparkles,
      },
    ] satisfies Highlight[],
  },

  skills: {
    title: "Skills",
    subtitle:
      "A frontend-strong fullstack toolkit for shipping polished products with dependable server-side support.",
    groups: [
      {
        id: "frontend",
        label: "Frontend",
        items: [
          "React",
          "Next.js (App Router, SSR, SSG, ISR)",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Material UI",
          "Framer Motion",
          "Redux Toolkit",
          "Zustand",
          "TanStack Query",
          "React Query",
          "Accessibility (a11y)",
          "Performance optimization",
        ],
      },
      {
        id: "backend",
        label: "Backend",
        items: [
          "Node.js",
          "FastAPI",
          "Python",
          "SQL",
          "REST API design",
          "Authentication (JWT)",
          "WebSockets",
          "OpenAI API",
          "Prompt engineering",
          "LLM prompt chaining",
          "PostgreSQL",
          "Supabase",
          "Database modeling",
          "API design review",
        ],
      },
      {
        id: "tools",
        label: "Tools & DevOps",
        items: [
          "Git & GitHub",
          "Docker",
          "GitHub Actions",
          "CI/CD Pipelines",
          "Vercel",
          "Netlify",
          "React Testing Library",
          "Playwright",
          "Component-driven development",
          "Agile/Scrum",
          "AI-assisted development",
          "GitHub Copilot",
          "Cursor",
        ],
      },
    ] satisfies SkillGroup[],
  },

  experience: {
    title: "Experience",
    subtitle:
      "Production-ready web platforms with frontend performance, backend APIs, and reliable CI/CD delivery.",
    items: [
      {
        title: "Full Stack Developer",
        org: "MindRind",
        location: "Lahore, Pakistan",
        period: "Feb 2023 – Present",
        bullets: [
          "Developed and maintained 15+ production-ready features and modules using React, Next.js, TypeScript, Node.js, FastAPI, and Supabase for 10K+ monthly active users.",
          "Built end-to-end solutions with intuitive frontend experiences and scalable backend services, including REST APIs, authentication systems, and real-time functionality.",
          "Improved application performance by optimizing state management with Redux Toolkit, refining API interactions, and implementing caching strategies for faster loads and fewer server requests.",
          "Created responsive, user-friendly interfaces with Tailwind CSS and Material UI, ensuring consistency across devices while maintaining accessibility and performance.",
          "Used Docker to simplify development and deployment environments, reducing setup issues and improving team consistency.",
          "Automated build, testing, and deployment workflows with GitHub Actions to accelerate releases and improve development efficiency.",
          "Implemented secure authentication, authorization, and database solutions with Supabase for reliable and scalable architectures.",
          "Participated in Agile cycles, code reviews, sprint planning, and cross-functional collaboration to deliver features on schedule.",
          "Worked closely with designers, product managers, and developers to convert business requirements into practical solutions and continuously improve the user experience.",
        ],
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "React Query",
          "Redux Toolkit",
          "Zustand",
          "GitHub Actions",
          "Figma",
          "Performance",
          "CI/CD",
          "Supabase",
          "REST API",
        ],
      },
      {
        title: "Associate Software Engineer",
        org: "Technoventures",
        location: "Lahore, Pakistan",
        period: "Aug 2022 – Jan 2023",
        bullets: [
          "Built responsive web interfaces with HTML5, CSS3, and JavaScript.",
          "Developed reusable, scalable React components to improve UI consistency and development efficiency.",
          "Improved website performance, mobile responsiveness, and SEO to enhance user experience.",
          "Maintained and updated existing websites by fixing bugs, implementing new features, and ensuring reliable functionality.",
          "Worked with backend developers to integrate REST APIs into frontend workflows.",
          "Used native and third-party libraries for state management throughout the project.",
        ],
        tags: [
          "React",
          "HTML5",
          "CSS3",
          "JavaScript",
          "REST API",
          "State management",
          "Performance",
        ],
      },
    ] satisfies ExperienceItem[],
  },

  projects: {
    title: "Projects",
    subtitle:
      "Selected builds showcasing polished interfaces, practical backend integration, and performance-minded engineering.",
    items: [
      {
        title: "AI Nutritionist",
        description:
          "AI-driven nutritionist app that generates personalized weekly diet plans from fitness goals, dietary restrictions, and activity levels.",
        highlights: [
          "Built a RESTful FastAPI backend handling user profiles and LLM prompt chaining for structured meal-plan generation.",
          "Delivered a Next.js/TypeScript frontend with responsive UI and personalized weekly diet workflows.",
        ],
        stack: ["FastAPI", "OpenAI API", "Prompt Engineering", "Next.js", "TypeScript", "Tailwind CSS"],
        links: {
          live: { label: "Live", href: "https://www.eatsumn.com/" },
          github: { label: "GitHub", href: "#" },
        },
      },
      {
  "title": "Dispatch Dudes",
  "description": "Full-service logistics and truck dispatching platform engineered for high conversion with interactive quote workflows and transparent service models.",
  "highlights": [
    "Engineered a high-conversion landing platform featuring interactive multi-tier pricing structures, dynamic quote forms, and 24/7 onboarding workflows.",
    "Built responsive, accessible UI modules showcasing multi-trailer logistics services, structured FAQ accordions, and real-time social proof sections."
  ],
  "stack": ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "links": {
    "live": { "label": "Live", "href": "https://dispatch-dudes-llc.vercel.app/" },
    "github": { "label": "GitHub", "href": "#" }
  }
},
      {
        title: "AI Assistant Platform",
        description:
          "AI assistant dashboard supporting chat and voice interaction with scalable Redux Toolkit state management.",
        highlights: [
          "Built an AI assistant dashboard supporting chat and voice interaction with scalable real-time state management.",
          "Implemented Redux Toolkit patterns to manage global application state for complex AI interactions.",
        ],
        stack: ["React", "Next.js", "Redux Toolkit", "TypeScript"],
        links: {
          live: { label: "Live", href: "#" },
          github: { label: "GitHub", href: "#" },
        },
      },
      {
        title: "Gifto",
        description:
          "WooCommerce-based Next.js project with conversion-focused UX, fast SEO-friendly pages, and commerce API integration.",
        highlights: [
          "Implemented reusable product UI components, listing layouts, and optimized image loading behavior.",
          "Integrated WooCommerce data flows for product content while keeping pages fast and cache-friendly.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "WooCommerce"],
        links: {
          live: { label: "Live", href: "#" },
          github: { label: "GitHub", href: "#" },
        },
      },
      {
        title: "AI House Visualizer",
        description:
          "AI-based platform for restyling house-exterior components from uploaded photos using SSR and dynamic SVG rendering.",
        highlights: [
          "Implemented SSR and polygon-driven dynamic SVG for an interactive, real-time editing experience.",
          "Built photo-driven exterior styling features with responsive UI and performance-focused rendering.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Node.js", "Docker", "Supabase"],
        links: {
          live: { label: "Live", href: "#" },
          github: { label: "GitHub", href: "#" },
        },
      },
      {
        title: "MyExpertPal",
        description:
          "Scalable learning platform with interactive dashboards and leaderboards built on an optimized component architecture.",
        highlights: [
          "Built a scalable learning platform with interactive dashboards and leaderboards using optimized component architecture.",
          "Implemented REST API integration and robust state management for performance and maintainability.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Node.js"],
        links: {
          live: { label: "Live", href: "#" },
          github: { label: "GitHub", href: "#" },
        },
      },
      
    ] satisfies Project[],
  },

  contact: {
    title: "Contact",
    subtitle:
      "Want a polished frontend with the backend pieces to support it? Let’s talk.",
    cta: { label: "Email me", href: "mailto:touheedmirza096@gmail.com" },
  },

  social: [
    {
      id: "email",
      label: "Email",
      href: "mailto:touheedmirza096@gmail.com",
      icon: Mail,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mirza-touheed-1495371a9/",
      icon: Link,
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/MTouheedJ",
      icon: Code2,
    },
  ] satisfies PortfolioSocialLink[],

  ui: {
    skipToContent: "Skip to content",
    navbarCta: { label: "Let’s build", href: "#contact", icon: ArrowRight },
    sectionEyebrow: "Overview",
    /** Tied to CSS + components — keep keys in sync with section `id`s */
    sectionAtmosphere: {
      about: "violet",
      skills: "fuchsia",
      experience: "cyan",
      projects: "violet",
      contact: "fuchsia",
    } satisfies Record<Exclude<NavSectionId, "top">, SectionTone>,
    badges: {
      performance: { label: "Performance", icon: Cpu },
      architecture: { label: "Architecture", icon: Code2 },
    },
    footer: {
      builtWithLabel:
        "Built with Next.js, TypeScript, Tailwind, Motion, and API-ready architecture.",
      copyrightLabel: "All rights reserved.",
    },
  },
} as const;
