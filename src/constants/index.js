// index.js
export const servicesData = [
  {
    title: "Full Stack Web Development",
    description:
      "From concept to deployment, I build fast, scalable, and reliable websites and web apps that bring your vision to life. Clean code, optimized databases, and smooth functionality—crafted for performance and growth.",
    items: [
      {
        title: "Backend Development",
        description:
          "(REST APIs, Database Design, Microservices, Secure Authentication System)",
      },
      {
        title: "Frontend Development",
        description: "React, Next.js, Responsive Layouts, Interactive UI/UX)",
      },
      {
        title: "Database Management",
        description:
          "(PostgreSQL, MongoDB, Optimized Queries, Scalable Structures)",
      },
    ],
  },
  {
    title: "UI/UX & Frontend Services",
    description:
      "Your brand deserves a design that feels as good as it looks. I create clean, user-friendly interfaces that make your site intuitive and engaging—on every device.",
    items: [
      {
        title: "Responsive Design",
        description: "(Mobile-first layouts for all screen sizes)",
      },
      {
        title: "Interactive Elements",
        description: "(Animations, Transitions, Micro-interactions)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Shopify Development",
    description:
      "Sell smarter with a fully functional online store. I create Shopify and custom e-commerce solutions that are secure, easy to manage, and optimized for conversions.",
    items: [
      {
        title: "Shopify Store Setup",
        description: "(Theme customization, Product setup)",
      },
      {
        title: "E-Commerce Development",
        description: "(Cart systems, Payment gateways, Inventory APIs)",
      },
      {
        title: "Custom Features",
        description: "(Discounts, Subscription Models, Tracking)",
      },
    ],
  },
  {
    title: "Deployment & Hosting",
    description:
      "I handle the entire deployment process so your site goes live smoothly—whether it’s on Hostinger, cPanel, or other platforms. Optimized hosting setup for speed, security, and uptime.",
    items: [
      {
        title: "Hostinger Deployments",
        description: "(Domain setup, SSL, Server Configuration)",
      },
      {
        title: "Performance Optimization",
        description: "(Caching, Compression, Load Speed Improvements)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Gyaanik - Bookstore Ecommerce App",
    description:
      "A fullstack bookstore app to sell used books with advanced filters, sorting, and pagination. Secure auth (JWT, cookies, email verification), Razorpay payments, Cloudinary uploads, profile management and an admin dashboard.",
    href: "https://github.com/MohitCode17/gyaanik-ecommerce-app-client",
    image: "/assets/projects/gyaanik.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind" },
      { id: 6, name: "TypeScript" },
    ],
  },
  {
    id: 2,
    name: "Pizza - Microservices App",
    description:
      "A microservices-based pizza ordering app with real-time order tracking via WebSockets, dynamic pricing, and secure Stripe payments. Secure authentication with PostgreSQL, MongoDB for orders and billing, Kafka for event-driven communication, and Docker for containerized deployment.",
    href: "#",
    image: "/assets/projects/pizza.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "MongoDB" },
      { id: 6, name: "Docker" },
    ],
  },
  {
    id: 3,
    name: "SkilliX - AI Career Coach",
    description:
      "An AI-powered career platform offering personalized onboarding, intelligent career insights, AI-driven quizzes, and built-in tools for crafting professional resumes and cover letters to boost career growth.",
    href: "https://github.com/MohitCode17/skillix",
    image: "/assets/projects/skillix.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Shadcn" },
      { id: 3, name: "Tailwind" },
      { id: 4, name: "NeonDB" },
      { id: 5, name: "Clerk" },
      { id: 6, name: "Gemini" },
    ],
  },
  {
    id: 4,
    name: "NextRide - Marketplace for Bikes & EVs",
    description:
      "A full-stack marketplace for bikes and EVs featuring ride listings, filtering, EMI calculator, and test drive scheduling. Integrated Gemini AI for auto-filling ride details, Clerk for authentication, and an admin dashboard to manage rides, bookings, users, and inventory.",
    href: "https://nextride-marketplace.vercel.app/",
    image: "/assets/projects/nextride.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Shadcn" },
      { id: 3, name: "Supabase" },
      { id: 5, name: "Clerk" },
      { id: 6, name: "Gemini" },
    ],
  },
  {
    id: 5,
    name: "Neofit - AI Fitness Coach",
    description:
      "An AI-powered fitness coach that generates personalized diet plans and workout routines using Gemini and Vapi APIs. Built with Next.js, Convex, Shadcn, and Clerk for authentication, offering a seamless and interactive user experience.",
    href: "https://neofit-ai.vercel.app/",
    image: "/assets/projects/neofit.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Shadcn" },
      { id: 3, name: "Tailwind" },
      { id: 4, name: "Convex" },
      { id: 5, name: "Clerk" },
      { id: 6, name: "Gemini & Vapi" },
    ],
  },
  {
    id: 6,
    name: "Nomibless – Shopify E-commerce Store",
    description:
      "Built a Shopify e-commerce store for beauty products as a freelance project, customizing themes, optimizing UI/UX, and integrating razorpay payment gateways for a seamless shopping experience.",
    href: "https://nomibless.com/",
    image: "/assets/projects/nomibless.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Tailwind" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Stremify" },
    ],
  },
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohit-gupta-519755245/",
  },
  { name: "GitHub", href: "https://github.com/MohitCode17" },
];
