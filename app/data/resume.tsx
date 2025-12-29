import { Icon } from "../components/Icon"

import reactZeroUIPreview from "../images/react-zero-ui-preview.png"
import travelCeylonPreview from "../images/Travel Ceylon.png"
import heartAttackDetectorPreview from "../images/HeartAttack detector.png"
const Icons = {
  github: (props: React.SVGProps<SVGSVGElement>) => <Icon name="github" {...props} />,
  linkedin: (props: React.SVGProps<SVGSVGElement>) => <Icon name="linkedin" {...props} />,
  globe: (props: React.SVGProps<SVGSVGElement>) => <Icon name="globe" {...props} />, // Assuming globe icon exists or fallback
}

export const DATA = {

  name: "Yasiru Rahul",
  initials: "YR",
  url: "https://github.com/rahuldivyanja",
  location: "Sri Lanka",
  description:
    "Full Stack Developer & BICT (Hons) Undergraduate at University of Sri Jayewardenepura. Specialized in MERN Stack and React Native.",
  summary: "I’m a third-year Software Technology undergraduate building scalable full-stack applications using the MERN stack. I focus on clean architecture, responsive UI, and real-time features, and I’m currently seeking an internship to apply and expand my full-stack development skills.",
  avatarUrl: "/profile v4.png",
  skills: [
    "React",
    "JavaScript",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "tailwind",
    "React Native",
    "MySQL",
    "Git",
    "WebSocket",
  ],
  contact: {
    email: "rahuldivyanja@gmail.com",
    tel: "+94770127459",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rahuldivyanja",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rahuldivyanja",
        icon: Icons.linkedin,
      },
    },
  },
  work: [],
  education: [
    {
      school: "University of Sri Jayewardenepura",
      degree: "Bachelor of Information and Communication Technology (BICT) Hons",
      start: "2023",
      end: "2027",
      description: "Specializing in Software Technology. Coursework in OOP, DSA, Web Development, and Database Systems.",
    },
  ],
  projects: [
    {
      title: "SK Auto Care",
      slug: "sk-auto-care",
      href: "",
      dates: "Sep 2025 - Oct 2025",
      active: true,
      description:
        "A full-stack e-commerce website for a UAE client. Supports 1,000+ parts from 15+ vehicle brands with Stripe payment integration.",
      technologies: [
        "MERN Stack",
        "React",
        "Node.js",
        "Stripe API",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/RahulDivyanja/SK-Auto-Care-Website",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://sk-auto-care-website.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: reactZeroUIPreview,
      color: "#3B06D1", // Added color for card compatibility
    },
    {
      title: "Travel Ceylon",
      slug: "travel-ceylon",
      href: "",
      dates: "May 2025 - Aug 2025",
      active: true,
      description:
        "Travel booking platform. Developed the 'Stays' page allowing users to filter 500+ listings across 50+ destinations.",
      technologies: [
        "MERN Stack",
        "Tailwind CSS",
        "Zustand"

      ],
      links: [
          {
        type: "GitHub",
        href: "https://github.com/ThilinaJayamal/travel-ceylon",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Live demo",
        href: "https://frontend-user-livid.vercel.app/",
        icon: <Icons.linkedin className="size-3" />,
      },
      ],
      image: travelCeylonPreview,
      color: "#024EFC", 
    },
    {
      title: "Heart Attack Detector",
      slug: "heart-attack-detector",
      href: "",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "IoT health app using React Native and WebSockets for real-time heart monitoring and Expo Push Notifications for alerts.",
      technologies: [
        "React Native",
        "WebSocket",
        "IoT",
        "Node.js",
      ],
      links: [
      {
        type: "GitHub",
        href: "https://github.com/DevTechNest/HA_Detector-1.0v",
        icon: <Icons.github className="size-3" />,
      },
      ],
      image: heartAttackDetectorPreview,
      color: "#DA961A", // Added color for card compatibility
    },
  ],
}
