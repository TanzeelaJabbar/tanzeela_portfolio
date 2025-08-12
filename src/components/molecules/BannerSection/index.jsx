'use client';
import React from 'react';
import classes from './BannerSection.module.css';

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.content}>
        <h1 className={classes.heading}>
          Hi, I’m <span className={classes.highlight}>Tanzeela Jabbar</span>
        </h1>
        <p className={classes.subheading}>
          Frontend Developer | React.js | Next.js
        </p>
        <p className={classes.description}>
          I build modern, interactive, and scalable web experiences.
        </p>
        <a href="#projects" className={classes.cta}>
          View My Work
        </a>
      </div>
    </div>
  );
}
