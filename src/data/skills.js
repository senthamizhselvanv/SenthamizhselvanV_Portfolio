import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaCode,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRedux,
  SiSass,
  SiJquery,
  SiPostman,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiSharp,
  SiDotnet,
  SiReactrouter,
  SiReacthookform,
} from "react-icons/si";

export const frontendSkills = [
  { name: "JavaScript", level: 85, icon: FaJs, color: "#F7DF1E" },
  { name: "jQuery", level: 85, icon: SiJquery, color: "#0769AD" },
  { name: "React.js", level: 75, icon: FaReact, color: "#61DAFB" },
  { name: "Redux Toolkit", level: 70, icon: SiRedux, color: "#764ABC" },

  { name: "React Hooks", level: 70, icon: SiReacthookform, color: "#61DAFB" },
  { name: "React Router", level: 75, icon: SiReactrouter, color: "#61DAFB" }, 
  { name: "Lazy Loading", level: 75, icon: FaReact, color: "#61DAFB" },
  { name: "Axios", level: 75, icon: FaReact, color: "#61DAFB" },

  { name: "HTML5", level: 70, icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", level: 70, icon: FaCss3Alt, color: "#1572B6" },  
  { name: "Bootstrap", level: 70, icon: FaBootstrap, color: "#7952B3" },
];

export const backendSkills = [
  { name: "C#", level: 50, icon: SiSharp, color: "#6A1B9A" },
  { name: "ASP.NET Web API", level: 50, icon: SiDotnet, color: "#2E8B57" },
  { name: "Entity Framework", level: 50, icon: SiDotnet, color: "#3F51B5" },
];

export const toolsSkills = [ 
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },  
];

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: frontendSkills,
  },
  {
    title: "Tools & Platforms",
    skills: toolsSkills,
  },
  {
    title: "Backend Development",
    skills: backendSkills,
  },
];
