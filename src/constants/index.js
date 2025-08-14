// index.js
export const servicesData = [
  {
    title: "Full-Stack Web Development",
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
    title: "E-Commerce & Shopify Development",
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
    name: "Gyaanik - Used Bookstore",
    description:
      "Buy & sell used books with advanced filters, sorting, and pagination. Secure auth (JWT, cookies, email verification), Razorpay payments, Cloudinary uploads, and an admin dashboard. Built with Next.js, Express, Node.js, MongoDB, and Tailwind CSS.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
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
      "Pizza ordering app with microservices for auth, billing, orders, coupons, and real-time tracking. Dynamic pricing by size/toppings, Stripe payments, RSA-secure auth with PostgreSQL, and MongoDB for orders/billing. Built with Next.js, Node.js, and Express.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "MongoDB" },
    ],
  },
  {
    id: 3,
    name: "SkillX - AI Career Coach",
    description:
      "AI-powered career platform with personalized onboarding, career insights, AI quizzes, and built-in resume & cover letter tools.",
    href: "",
    image: "/assets/projects/game-store.jpg",
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
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohit-gupta-519755245/",
  },
  { name: "GitHub", href: "https://github.com/MohitCode17" },
];
