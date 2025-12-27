import { Project, SocialLink } from './types';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Momen Ahmed Ali",
  nickname: "Momen",
  role: "Creative UI Developer & Designer",
  location: "Cairo, Egypt",
  email: "contact@momenali.dev",
  about: {
    title: "About Me",
    description: "I am Momen Ahmed Ali, a passionate UI Developer and Designer. I specialize in building digital experiences that are not only visually stunning but also highly functional. With a background in Computer Science, I blend technical expertise with artistic vision to create interfaces that users love.",
    highlights: [
      "Specialized in React & Modern UI",
      "Experience with Roblox UI Design",
      "Focus on User Experience (UX)",
      "Clean Code Enthusiast"
    ]
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/momenali', icon: 'github' },
  { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
  { platform: 'Twitter', url: '#', icon: 'twitter' },
  { platform: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: 'mail' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Modern E-Commerce",
    category: "Web Development",
    image: "https://picsum.photos/id/1/800/600",
    description: "A fully responsive e-commerce dashboard with dark mode and real-time analytics."
  },
  {
    id: 2,
    title: "Game Interface Kit",
    category: "UI Design",
    image: "https://picsum.photos/id/2/800/600",
    description: "High-fidelity user interface assets designed for RPG games, featuring inventory and skill tree systems."
  },
  {
    id: 3,
    title: "Finance Tracker App",
    category: "Mobile Design",
    image: "https://picsum.photos/id/3/800/600",
    description: "Clean mobile application design for tracking personal expenses and visualization of savings goals."
  }
];

export const AI_SYSTEM_INSTRUCTION = `You are a professional and friendly AI assistant for Momen Ahmed Ali, a Creative UI Developer & Designer.
Your goal is to answer questions about his portfolio, skills, and experience.

Here is Momen's profile:
Name: ${PERSONAL_INFO.name} (${PERSONAL_INFO.nickname})
Role: ${PERSONAL_INFO.role}
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
About: ${PERSONAL_INFO.about.description}
Highlights: ${PERSONAL_INFO.about.highlights.join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

Social Links:
${SOCIAL_LINKS.map(s => `- ${s.platform}: ${s.url}`).join('\n')}

If asked about something unrelated to his professional work, politely steer the conversation back to his portfolio or decline to answer.`;