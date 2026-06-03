import { Code, Code2, Database, Layout, Server, Settings, ShieldCheck, Smartphone, Zap, Globe, Figma, Maximize } from 'lucide-react';
import websiteDesignImg from './assets/images/website_design_1780481421214.png';
import airscopeTechImg from './assets/images/airscope_tech_1780481441855.png';
import nbsUaeImg from './assets/images/nbs_uae_1780481461069.png';
import walaCoffeeImg from './assets/images/wala_coffee_1780481478692.png';

export const HERO = {
  headline: "Building High-Performance WordPress Websites That Drive Results",
  subheadline: "Full Stack WordPress Developer with 3+ years of experience creating responsive, SEO-friendly, and conversion-focused websites for businesses worldwide.",
};

export const ABOUT = {
  intro: "Hi, I'm M. Fardeen Azam, a Full Stack WordPress Developer specializing in custom WordPress development, Elementor, WooCommerce, website optimization, and API integrations. I help businesses transform ideas into powerful digital experiences through modern, scalable, and user-friendly websites.",
  highlights: [
    "3+ Years Experience",
    "100+ Completed Projects",
    "Custom WordPress Development",
    "Elementor Expert",
    "WooCommerce Solutions",
    "Website Speed Optimization",
    "Responsive Design",
    "API Integrations"
  ]
};

export const SERVICES = [
  {
    title: "Custom WordPress Development",
    description: "SCALABLE, SECURE, AND HIGH-PERFORMANCE CUSTOM WORDPRESS SITES TAILORED TO YOUR GOALS.",
    icon: Globe
  },
  {
    title: "Elementor Website Design",
    description: "MODERN, PROFESSIONAL, AND CONVERSION-FOCUSED SECTIONS WITH SMOOTH UI.",
    icon: Layout
  },
  {
    title: "Frontend Development",
    description: "CLEAN, RESPONSIVE, AND INTERACTIVE UIS USING REACT, TAILWIND, AND MODERN JS.",
    icon: Code2
  },
  {
    title: "Figma to WordPress",
    description: "PIXEL-PERFECT CONVERSION OF FIGMA/XD/PSD DESIGNS TO FULLY RESPONSIVE WORDPRESS SITES.",
    icon: Figma
  },
  {
    title: "Landing Page Development",
    description: "HIGH-CONVERTING PAGES OPTIMIZED FOR ENGAGEMENT AND LEAD GENERATION.",
    icon: Maximize
  },
  {
    title: "Website Speed Optimization",
    description: "OPTIMIZED CORE WEB VITALS AND SPEED FOR BETTER SEO AND USER EXPERIENCE.",
    icon: Zap
  },
  {
    title: "Website Maintenance",
    description: "ONGOING SUPPORT, UPDATES, BUG FIXING, AND BACKUPS TO KEEP YOUR SITE SECURE.",
    icon: ShieldCheck
  },
  {
    title: "API Integration",
    description: "CONNECTING THIRD-PARTY SERVICES, PAYMENT GATEWAYS, AND EXTERNAL APIS SEAMLESSLY.",
    icon: Settings
  },
  {
    title: "Responsive Web Design",
    description: "ENSURING YOUR SITE LOOKS PERFECT ACROSS DESKTOP, TABLET, AND MOBILE DEVICES.",
    icon: Smartphone
  }
];

export const SKILLS = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "Responsive Design"],
  WordPress: ["Custom Themes", "Elementor", "WooCommerce", "ACF", "Custom Post Types", "WPBakery"],
  Backend: ["PHP", "MySQL", "REST APIs", "API Integrations"],
  Tools: ["Git & GitHub", "cPanel", "WHM", "Cloudflare", "Hostinger", "GoDaddy"]
};

export const PORTFOLIO = [
  {
    title: "Website Design Company",
    description: "Professional IT and digital marketing service agency website.",
    category: "Corporate",
    image: websiteDesignImg
  },
  {
    title: "Airscope Tech",
    description: "Technology and drone services platform.",
    category: "Technology",
    image: airscopeTechImg
  },
  {
    title: "NBS UAE",
    description: "Business and corporate services in the UAE.",
    category: "Business",
    image: nbsUaeImg
  },
  {
    title: "Wala Coffee",
    description: "E-Commerce website for a coffee brand with online ordering.",
    category: "WooCommerce",
    image: walaCoffeeImg
  }
];

export const EXPERIENCE = [
  {
    role: "Frontend | Wordpress Developer",
    company: "Visual-Z ",
    period: "September 2025 - Present",
    achievements: [
      "Developing custom WordPress websites, converting Figma designs into responsive web experiences, building WooCommerce stores, and optimizing website performance for speed and usability."
    ],
        technologies: [ "Figma to WP", "Custom Theme Development", "WooCommerce","Git"]
  },
  {
    role: "Wordpress Developer",
    company: "Digital Ride",
    period: "January 2025 - Aug 2025 (8 months)",
    achievements: [
      "Custom WordPress Development – Designed and developed fully tailored WordPress themes and plugins to match unique client requirements.",
      "Pixel-Perfect Design Conversion – Transformed Figma, Adobe XD, and PSD designs into responsive, dynamic, and high-performing WordPress websites."
    ],
    technologies: [ "Figma to WP", "Custom Themes", "Custom Theme Development"]
  },
  {
    role: "Landing page  |Wordpress Developer",
    company: "Local Freelancer",
    period: "January 2024 – Present",
    achievements: [
      "Client-Based Projects: Designed and developed custom WordPress websites for small businesses and individuals.",
      "Custom Theme Development: Built tailored themes and plugins to match client needs and branding.",
      "Responsive & SEO-Friendly Sites: Delivered mobile-friendly and optimized websites for better performance and rankings.",
      "Direct Client Collaboration: Managed end-to-end communication, gathering requirements, and delivering solutions on time."
    ],
    technologies: ["Figma to WordPress", "Elementor", "Landing pages", "Responsive UI"]
  },
  {
    role: "Frontend  |  Wordpress Developer ",
    company: "USEO - United Search Engine Optimization",
    period: "January 2023 - January 2024 (1 year 1 month)",
    achievements: [
      "Advanced Content Management: Implemented custom post types, taxonomies, and Advanced Custom Fields (ACF) for flexible content handling.",
      "Design-to-Code Conversion: Converted Figma, Adobe XD, and PSD designs into fully functional, dynamic WordPress sites.",
      "Website Maintenance & Bug Fixing: Provided ongoing support, bug fixes, and performance optimizations across multiple client sites."
    ],
    technologies: ["WordPress", "ACF", "Custom Post Types", "PHP", "MySQL"]
  }
];

export const TESTIMONIALS = [
  {
    text: "Excellent developer with strong technical expertise and timely delivery.",
    client: "Client Feedback 1"
  },
  {
    text: "Highly professional and responsive throughout the project.",
    client: "Client Feedback 2"
  },
  {
    text: "Delivered exactly what we needed and exceeded expectations.",
    client: "Client Feedback 3"
  }
];

export const WHY_CHOOSE_ME = [
  "Clean & Maintainable Code",
  "Mobile-First Development",
  "SEO-Friendly Structure",
  "Fast Loading Websites",
  "Reliable Communication",
  "On-Time Project Delivery",
  "Ongoing Support"
];
