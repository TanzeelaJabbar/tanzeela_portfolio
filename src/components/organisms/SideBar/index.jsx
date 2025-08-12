'use client';
import { useState, useEffect } from "react";
import { navItems } from "@/developmentContext/appData";
import classes from "./SideBar.module.css";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${classes.sidebar} ${isHovered || isMobile ? classes.expanded : ""}`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className={classes.navItems}>
        {navItems.map((item, idx) => (
          <a key={idx} href={item.link} className={classes.navLink}>
            <span className={classes.icons}>{item.icon}</span>
            <span className={classes.navText}>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
