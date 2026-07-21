import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, 
  FaGithub, FaNpm, FaCode 
} from 'react-icons/fa';
import { 
  SiRedux, SiSass, SiJquery, SiPostman, 
  SiVite, SiTypescript, SiTailwindcss 
} from 'react-icons/si';

export const frontendSkills = [
  { name: 'React.js', level: 95, icon: FaReact, color: '#61DAFB' },
  { name: 'Redux', level: 90, icon: SiRedux, color: '#764ABC' },
  { name: 'JavaScript', level: 95, icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', level: 80, icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML5', level: 95, icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', level: 90, icon: FaCss3Alt, color: '#1572B6' },
  { name: 'SCSS/Sass', level: 88, icon: SiSass, color: '#CC6699' },
  { name: 'Bootstrap', level: 90, icon: FaBootstrap, color: '#7952B3' },
  { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'jQuery', level: 85, icon: SiJquery, color: '#0769AD' }
];

export const toolsSkills = [
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' },
  { name: 'VS Code', icon: FaCode, color: '#007ACC' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'npm', icon: FaNpm, color: '#CB3837' }
];

export const skillCategories = [
  {
    title: 'Frontend Development',
    skills: frontendSkills
  },
  {
    title: 'Tools & Platforms',
    skills: toolsSkills
  }
];
