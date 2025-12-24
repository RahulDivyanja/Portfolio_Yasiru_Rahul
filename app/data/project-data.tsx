import { StaticImageData } from "next/image"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { Phase } from "../components/ProjectSection/ApproachSection"
import { ReviewProps } from "./review-data"

// Import images
import reactZeroUIPreview from "../images/react-zero-ui-preview.png"
import travelCeylonPreview from "../images/Travel Ceylon.png"
import heartAttackDetectorPreview from "../images/HeartAttack detector.png"

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
  review?: ReviewProps
  slug: string
}

import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { LineChart } from "../components/ProjectSection/LineChart"

// ... imports ...

// ... interfaces ...

export const skAutoCare: ProjectData = {
  hero: {
    title: "SK Auto Care: E-commerce for Auto Parts",
    client: "SK Auto Care",
    year: "2025",
    description: "A comprehensive e-commerce platform engineered for a UAE-based automotive business to digitize their spare parts retail operations. The system was designed to handle a high-volume inventory, successfully managing over 1,000+ unique parts across 15+ different vehicle brands.",
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
    description: "Travel booking platform. Developed the 'Stays' page allowing users to filter 500+ listings across 50+ destinations.",
    categories: ["MERN Stack", "Tailwind CSS", "Zustand"],
    link: "", // No link provided in resume
  },
  slug: "travel-ceylon",
  results: [
    {
      title: "Listings",
      description: "Unique stay listings",
      percentageIncrease: 500,
      value: 500,
      prefix: "",
      suffix: "+",
      dataSource: "Platform Data",
      chart: <TrafficBarChart startValue={50} endValue={500} />,
    },
    {
      title: "Destinations",
      description: "Covered locations",
      percentageIncrease: 50,
      value: 50,
      prefix: "",
      suffix: "+",
      dataSource: "Platform Data",
      chart: <RadialProgressRing percentage={100} />,
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
    description: "IoT health app using React Native and WebSockets for real-time heart monitoring and Expo Push Notifications for alerts.",
    categories: ["React Native", "IoT", "WebSockets"],
    link: "",
  },
  slug: "heart-attack-detector",
  results: [],
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
