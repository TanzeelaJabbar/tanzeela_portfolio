"use client";
import React from "react";
import { Col } from "react-bootstrap";
import classes from "./WorksSection.module.css";
import Image from "next/image";
import { aboutData, statsData, skillsData } from "@/developmentContext/appData";

export default function WorksSection() {
  return (
    <div className={classes.worksSection}>
        <h3 className={classes.skillsTitle}>What I Do</h3>
        <div className={classes.skillsGrid}>
          {skillsData.map((skill, index) => (
            <div key={index} className={classes.skillCard}>
              <div className={classes.skillIcon}>
                {skill.icon}
              </div>
              <h4 className={classes.skillTitle}>{skill.title}</h4>
              <p className={classes.skillDescription}>{skill.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
}