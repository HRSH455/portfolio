import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.header}>
        <div className={styles.label}>
          <span className={styles.num}>04</span>
          <span className={styles.title}>contact</span>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Let&apos;s build<br />
            <span className={styles.dim}>something.</span>
          </h2>
          <p className={styles.desc}>
            Open to full-time roles, freelance projects, and interesting problems.
            If you have a backend that needs fixing or a system that needs building —
            reach out.
          </p>
        </div>

        <div className={styles.right}>
          <a
            href="mailto:i.m.hrsh45@gmail.com"
            className={styles.emailLink}
          >
            <span className={styles.emailLabel}>email</span>
            <span className={styles.emailAddr}>i.m.hrsh45@gmail.com ↗</span>
          </a>

          <div className={styles.socials}>
            {[
              { name: "github", url: "https://github.com/HRSH455" },
              { name: "linkedin", url: "https://linkedin.com/in/harshavardhan-bommi" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                <span className={styles.slash}>/</span>{s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
