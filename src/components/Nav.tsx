"use client";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const links = ["about", "projects", "skills", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <span className={styles.logo}>
        <span className={styles.bracket}>[</span>
        harsha
        <span className={styles.bracket}>]</span>
      </span>

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link}>
            <button onClick={() => scrollTo(link)} className={styles.link}>
              <span className={styles.slash}>/</span>{link}
            </button>
          </li>
        ))}
      </ul>

      <a
        href="/resume.pdf"
        className={styles.resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        résumé ↗
      </a>
    </nav>
  );
}
