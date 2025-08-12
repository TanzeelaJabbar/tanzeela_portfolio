"use client";
import React from "react";
import classes from "./BannerSection.module.css";
import { titles } from "@/developmentContext/appData";
import Image from "next/image";
import Button from "@/components/atom/Button";
import { MdCloudDownload } from "react-icons/md";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.content}>
        <h1 className={classes.heading}>
          Hi, I’m <span className={classes.highlight}>Tanzeela Jabbar</span>
        </h1>
        <div className={classes.textWrapper}>
          <ul className={classes.staticText}>
            {titles.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
        <p className={classes.description}>
          I build modern, interactive, and scalable web experiences.
        </p>
        <a href="/app-images/resume.pdf" download>
          <Button label="Download Resume" leftIcon={<MdCloudDownload />} />
        </a>
      </div>
    </div>
  );
}
