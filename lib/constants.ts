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
    role: "Software Engineer",
    tagline:
      "I build premium web products with Next.js, TypeScript, and reliable backend foundations.",
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
      { label: "Experience", value: "3+ years" },
      { label: "Production modules shipped", value: "15+" },
      { label: "Users impacted", value: "10K+" },
    ],
    quickFacts: [
      "Lighthouse 95+ mentality",
      "SSR • SSG • ISR with API integration",
      "AI-assisted dev workflows (Cursor/Copilot)",
    ],
  },

  about: {
    title: "About",
    lead: "I’m a frontend-leaning fullstack developer who turns product ideas into fast, polished interfaces backed by practical server-side architecture.",
    body: [
      "Most of my work sits on the user-facing side: Next.js App Router, responsive UI systems, accessibility, motion, and performance tuning that keeps products feeling sharp.",
      "I also handle the backend pieces that make those experiences dependable, including REST APIs, auth flows, Supabase/PostgreSQL data models, caching strategies, and deployment workflows.",
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
          "Next.js (App Router)",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Redux Toolkit",
          "Zustand",
          "TanStack Query",
          "Accessibility (a11y)",
          "Performance optimization",
        ],
      },
      {
        id: "backend",
        label: "Backend",
        items: [
          "Node.js",
          "Express",
          "REST APIs",
          "Supabase",
          "PostgreSQL",
          "Database modeling",
          "AWS fundamentals",
          "Auth (sessions/JWT)",
          "Caching strategies",
        ],
      },
      {
        id: "tools",
        label: "Tools & DevOps",
        items: [
          "Git & GitHub",
          "GitHub Actions",
          "Docker",
          "Vercel",
          "Testing mindset",
          "Observability basics",
          "Cursor / Copilot",
        ],
      },
    ] satisfies SkillGroup[],
  },

  experience: {
    title: "Experience",
    subtitle:
      "Impact-driven work across product UI, API integration, and delivery quality.",
    items: [
      {
        title: "Frontend-leaning Fullstack Developer",
        org: "Product teams (Client work)",
        location: "Remote",
        period: "2022 — Present",
        bullets: [
          "Built 15+ production-grade modules used by 10K+ users, combining polished React/Next.js interfaces with clean data and API contracts.",
          "Reduced API overhead by 40% and improved load time by 30% through caching, request shaping, server rendering choices, and frontend performance work.",
          "Delivered dashboards, onboarding flows, and role-based product screens while supporting auth, Supabase data access, and deployment workflows.",
        ],
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind",
          "Node.js",
          "Supabase",
          "Performance",
          "CI/CD",
          "Docker",
          "AWS",
          "Github",
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
          "AI-based health assistant with a polished nutrition workflow, personalized recommendations, and dependable request handling.",
        highlights: [
          "Designed a clean onboarding flow, responsive nutrition UI, and structured prompts for consistent outputs.",
          "Connected AI request flows with server-side validation, caching where appropriate, and predictable loading states.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "AI", "Node.js"],
        links: {
          live: { label: "Live", href: "#" },
          github: { label: "GitHub", href: "#" },
        },
      },
      {
        title: "AI Assistant Platform",
        description:
          "A multi-modal assistant experience combining chat, voice interaction, and API-backed conversation flows.",
        highlights: [
          "Built scalable UI patterns for conversation views, tool-like interactions, and animated feedback.",
          "Structured client/server boundaries for AI responses, progressive rendering, and perceived speed.",
        ],
        stack: [
          "Next.js",
          "React",
          "Framer Motion",
          "TypeScript",
          "AI",
          "Node.js",
        ],
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
        title: "MyExpertPal",
        description:
          "Learning platform featuring dashboards, role-based experiences, and Supabase-backed product flows.",
        highlights: [
          "Designed modular dashboard components with consistent spacing, hierarchy, and reusable primitives.",
          "Improved maintainability with typed data models, auth-aware screens, and Supabase data access.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
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
    cta: { label: "Email me", href: "mailto:mirzatouheed27@gmail.com" },
  },

  social: [
    {
      id: "email",
      label: "Email",
      href: "mailto:mirzatouheed27@gmail.com",
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
