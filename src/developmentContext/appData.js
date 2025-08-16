import { Home, Mail, Folder } from "lucide-react"; // icons
import { FaCode, FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa";

export const navItems = [
    { name: "Home", icon: <Home size={16} />, link: "/" },
    { name: "Projects", icon: <Folder size={16} />, link: "/projects" },
    { name: "Contact", icon: <Mail size={16} />, link: "/contact" },
];

export const titles = [
  { title: "Frontend Developer" },
  { title: "Next.js Developer" },
  { title: "React.js Developer" }
];

// About Me Section Data
export const aboutData = {
  title: "About Me",
  description: [
    "I'm a passionate Frontend Developer with expertise in React.js and Next.js. I love creating modern, scalable web applications that provide exceptional user experiences. With a keen eye for design and a strong foundation in development, I bridge the gap between creativity and functionality.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends."
  ],
  profileImage: {
    src: "/app-images/about-me.jpg",
    alt: "About Tanzeela Jabbar",
    width: 400,
    height: 500
  },
  floatingCard: {
    icon: <FaCode />,
    text: "Clean Code"
  }
};

export const statsData = [
  {
    number: "50+",
    label: "Projects Completed"
  },
  {
    number: "3+",
    label: "Years Experience"
  },
  {
    number: "100%",
    label: "Client Satisfaction"
  }
];

export const skillsData = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks"
  },
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    description: "Creating end-to-end web applications with seamless user experiences"
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing digital experiences"
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, scalability, and best practices"
  }
];
