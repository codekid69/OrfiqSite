import { AudienceItem, CapabilityItem, NavItem } from "../types";
import { Brain, Users, BookOpen, BarChart3, Beaker } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Key Capabilities",
    submenu: [
      {
        title: "Orfiq Muse",
        href: "/#capabilities",
      },
      {
        title: "Orfiq Hive",
        href: "/#capabilities",
      },
      {
        title: "Orfiq Creator",
        href: "/#capabilities",
      },
      {
        title: "Orfiq Vantage",
        href: "/#capabilities",
      },
    ],
  },
  {
    title: "Who Is It For",
    submenu: [
      {
        title: "Learners",
        href: "/#audience",
      },
      {
        title: "Educators",
        href: "/#audience",
      },
      {
        title: "Institutions",
        href: "/#audience",
      },
    ],
  },
  {
    title: "Orfiq Experience",
    href: "/#experience",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Orfiq Muse",
    description: "AI tutor that provides personalized coaching, feedback loops, and content summarization.",
    icon: Brain.name,
  },
  {
    title: "Orfiq Hive",
    description: "Secure learning repository with note-taking, resource tagging, and knowledge graphs.",
    icon: BookOpen.name,
  },
  {
    title: "Orfiq Creator",
    description: "Drag-and-drop interface for educators to design adaptive AI-enhanced courses with simulations and branching paths.",
    icon: Users.name,
  },
  {
    title: "Orfiq Vantage",
    description: "Intelligent assessment engine offering real-time analytics, micro-credentials, and skill mapping.",
    icon: BarChart3.name,
  },
  {
    title: "Future Labs",
    description: "Immersive VR simulations and speech-enabled learning assistants planned for rollout.",
    icon: Beaker.name,
  },
];

export const AUDIENCE_ITEMS: AudienceItem[] = [
  {
    title: "Learners",
    description: "Self-paced, adaptive, engaging experiences that lead to better outcomes and flexible learning.",
    icon: Users.name,
  },
  {
    title: "Educators",
    description: "AI tools for content creation, analytics, feedback, and reduced admin overhead.",
    icon: BookOpen.name,
  },
  {
    title: "Institutions",
    description: "Scalable infrastructure, compliance-ready, and outcome-driven insights.",
    icon: BarChart3.name,
  },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Orfiq Muse", href: "/#capabilities" },
      { name: "Orfiq Hive", href: "/#capabilities" },
      { name: "Orfiq Creator", href: "/#capabilities" },
      { name: "Orfiq Vantage", href: "/#capabilities" },
    ],
  },
];