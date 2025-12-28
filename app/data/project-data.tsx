import { StaticImageData } from "next/image"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { Phase } from "../components/ProjectSection/ApproachSection"
import type { ReviewProps } from "./review-data"

// Import images
export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  // link to the client's website
  link: string
}

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter?: {
    heroBefore: StaticImageData
    heroBeforeMobile: StaticImageData
    iframe?: string
    heroAfter?: StaticImageData
    beforeAltText: string
    beforeMobileAltText: string
    afterAltText: string
  }
  results: AnalyticCardProps[]
  phases: Phase[]
  review?: ReviewProps | false
  slug: string
}

// import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
// import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
// import { LineChart } from "../components/ProjectSection/LineChart"


export const skAutoCare: ProjectData = {
  hero: {
    title: "SK Auto Care: E-commerce for Auto Parts",
    client: "SK Auto Care",
    year: "2025",
    description: "A comprehensive e-commerce platform engineered for a UAE-based automotive business to digitize their spare parts retail operations. The system was designed to handle a high-volume inventory, successfully managing over 1,000+ unique parts across 15+ different vehicle brands. I led end-to-end implementation including catalog modelling, inventory sync, payment integration via Stripe, and performance optimizations for catalog queries. The project included responsive UI, search and filtering improvements, and admin tooling for bulk uploads and order management.",
    categories: ["MERN Stack", "Stripe", "E-commerce"],
    link: "https://sk-auto-care-website.vercel.app/",
  },
  slug: "sk-auto-care",
  results: [
    {
      title: "Parts Listed",
      description: "Total vehicle parts available",
      percentageIncrease: 1000,
      value: 1000,
      prefix: "",
      suffix: "+",
      dataSource: "Database Inventory",
      chart: "",
    },
    {
      title: "Brands",
      description: "Vehicle brands supported",
      percentageIncrease: 15,
      value: 15,
      prefix: "",
      suffix: "+",
      dataSource: "Catalog",
      chart: "",
    },
  ],
  
  phases: [
    {
      id: 1,
      title: "Full Stack Development",
      subtitle: "MERN Stack Implementation",
      description: "Built using React, Node.js, Express, and MongoDB for a robust and scalable architecture.",
      details: [
        "React frontend for dynamic UI",
        "Node.js & Express backend",
        "MongoDB for flexible data storage",
      ],
      icon: "/assets/design-black.webp", // Placeholder icon
      feature: null,
    },
    {
      id: 2,
      title: "Payments",
      subtitle: "Secure Transactions",
      description: "Integrated Stripe API for secure and seamless payment processing.",
      details: [
        "Stripe Checkout integration",
        "Secure payment webhooks",
      ],
      icon: "/assets/tool-black.webp", // Placeholder icon
      feature: null,
    },
  ],
}

export const travelCeylon: ProjectData = {
  hero: {
    title: "Travel Ceylon: Booking Platform",
    client: "Travel Ceylon",
    year: "2025",
    description: "Built a feature-rich Stays page that supports filtering and searching through 500+ accommodation listings across 50+ destinations. Implemented destination-based and advanced filters with a responsive UI, ensuring smooth navigation, optimized performance, and an intuitive user experience.",
    categories: ["MERN Stack", "Tailwind CSS", "Zustand"],
    link: "https://frontend-user-livid.vercel.app/", 
  },
  slug: "travel-ceylon",
  results: [
    {
      title: "Results pending",
      description: "No measured results yet — data will be added when available.",
      percentageIncrease: 0,
      value: 0,
      prefix: "",
      suffix: "",
      dataSource: "",
      chart: "",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Filtering System",
      subtitle: "Advanced Search",
      description: "Implemented complex filtering logic to help users find their perfect stay.",
      details: [
        "Multi-parameter filtering",
        "Real-time search results",
        "Optimized database queries",
      ],
      icon: "/assets/search-black.webp",
      feature: null,
    },
  ],
}

export const heartAttackDetector: ProjectData = {
  hero: {
    title: "Heart Attack Detector: IoT Health App",
    client: "Personal Project",
    year: "2025",
    description: "Developed a cross-platform mobile application using React Native that communicates with IoT devices via WebSockets for real-time heart rate monitoring. Implemented Expo Push Notifications to deliver immediate alerts in case of abnormal heart activity, improving user safety and response time.",
    categories: ["React Native", "IoT", "WebSockets"],
    link: "",
  },
  slug: "heart-attack-detector",
  results: [
    {
      title: "Results pending",
      description: "No measured results yet — data will be added when available.",
      percentageIncrease: 0,
      value: 0,
      prefix: "",
      suffix: "",
      dataSource: "",
      chart: "",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Real-time Monitoring",
      subtitle: "WebSocket Integration",
      description: "Used WebSockets to stream heart rate data in real-time.",
      details: ["Low latency data streaming", "Instant updates"],
      icon: "/assets/tool-black.webp",
      feature: null,
    },
  ],
}

export const PROJECTS_MAP: Record<string, ProjectData> = {
  "sk-auto-care": skAutoCare,
  "travel-ceylon": travelCeylon,
  "heart-attack-detector": heartAttackDetector,
}
