"use client";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const roles = [
  "full stack developer",
  "backend engineer",
  "spring boot developer",
  "angular developer",
  "systems builder",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timer = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayed, deleting, roleIdx]);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.tag}>// available for opportunities</div>

        <h1 className={styles.name}>
          Harsha<br />
          <span className={styles.last}>Vardhan</span>
        </h1>

        <div className={styles.roleRow}>
          <span className={styles.prompt}>$ role —</span>
          <span className={styles.role}>{displayed}</span>
          <span className={`${styles.cursor} ${blink ? styles.cursorOn : ""}`}>▋</span>
        </div>

        <p className={styles.tagline}>
          Building distributed systems and APIs that scale.<br />
          Spring Boot · Angular · Redis · PostgreSQL
        </p>

        <div className={styles.cta}>
          <button
            className={styles.primaryBtn}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            view work ↓
          </button>
          <button
            className={styles.ghostBtn}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            get in touch
          </button>
        </div>
      </div>

      <div className={styles.stat}>
        <div className={styles.statItem}>
          <span className={styles.statNum}>1+</span>
          <span className={styles.statLabel}>years exp</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.statItem}>
          <span className={styles.statNum}>4+</span>
          <span className={styles.statLabel}>projects shipped</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.statItem}>
          <span className={styles.statNum}>∞</span>
          <span className={styles.statLabel}>bugs fixed</span>
        </div>
      </div>

      <div className={styles.scrollHint}>scroll</div>
    </section>
  );
}
