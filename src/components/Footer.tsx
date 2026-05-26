import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        <span className={styles.bracket}>[</span>
        harsha
        <span className={styles.bracket}>]</span>
        {" "}—{" "}built with Next.js
      </span>
      <span className={styles.year}>© {new Date().getFullYear()}</span>
    </footer>
  );
}
