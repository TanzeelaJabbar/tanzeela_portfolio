"use client";
import React from "react";
import { Col } from "react-bootstrap";
import classes from "./AboutUsSection.module.css";
import Image from "next/image";
import { aboutData, statsData, skillsData } from "@/developmentContext/appData";

export default function AboutUsSection() {
  return (
    <div className={classes.aboutSection}>
      {/* <Col lg={6} className={classes.contentCol}> */}
        <div className={classes.aboutContent}>
          <h2 className={classes.sectionTitle}>
            {aboutData.title.split(' ')[0]} <span className={classes.highlight}>{aboutData.title.split(' ')[1]}</span>
          </h2>
          {aboutData.description.map((paragraph, index) => (
            <p key={index} className={classes.description}>
              {paragraph}
            </p>
          ))}

          <div className={classes.statsContainer}>
            {statsData.map((stat, index) => (
              <div key={index} className={classes.stat}>
                <span className={classes.statNumber}>{stat.number}</span>
                <span className={classes.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      {/* </Col> */}

      {/* <Col lg={6} className={classes.imageCol}> */}
        {/* <div className={classes.aboutImage}>
          <div className={classes.imageWrapper}>
            <Image
              src={aboutData.profileImage.src}
              alt={aboutData.profileImage.alt}
              width={aboutData.profileImage.width}
              height={aboutData.profileImage.height}
              className={classes.profileImage}
            />
            <div className={classes.floatingCard}>
              <span className={classes.cardIcon}>{aboutData.floatingCard.icon}</span>
              <span>{aboutData.floatingCard.text}</span>
            </div>
          </div>
        </div> */}
      {/* </Col> */}

      {/* <Col xs={12} className={classes.skillsSection}>
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
      </Col> */}
    </div>
  );
}