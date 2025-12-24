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
    "Aspiring Full Stack Developer & BICT (Hons) Undergraduate at University of Sri Jayewardenepura. Specialized in MERN Stack and React Native.",
  summary:
    "I am a third-year undergraduate specializing in Software Technology. I have experience building scalable client and university projects using the MERN stack, including backend integration, responsive UI design, and real-time features. I am currently seeking an internship to apply and expand my full-stack development expertise.",
  avatarUrl: "/profile v4.png",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "React Native",
    "Java",
    "Python",
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
      links: [],
      image: travelCeylonPreview,
      color: "#024EFC", // Added color for card compatibility
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
      links: [],
      image: heartAttackDetectorPreview,
      color: "#DA961A", // Added color for card compatibility
    },
  ],
}
