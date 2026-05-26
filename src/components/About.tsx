import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.label}>
        <span className={styles.num}>01</span>
        <span className={styles.title}>about</span>
      </div>

      <div className={styles.body}>
        <div className={styles.left}>
          <p className={styles.bio}>
            Software engineer based in Pune, India. I build reliable backend systems
            and full-stack applications — the kind that stay up, scale cleanly, and
            are a pleasure to debug at 2 AM.
          </p>
          <p className={styles.bio}>
            Current stack centres around{" "}
            <span className={styles.hi}>Spring Boot</span> and{" "}
            <span className={styles.hi}>Angular</span>, with{" "}
            <span className={styles.hi}>Redis </span> for caching, JWT for auth, and
            PostgreSQL for persistence. I&apos;ve shipped projects end-to-end on{" "}
            <span className={styles.hi}>Vercel</span> and{" "}
            <span className={styles.hi}>Render</span>.
          </p>
          <p className={styles.bio}>
            Interested in distributed systems, API design, and anything involving a
            rate limiter or a connection pool doing something interesting under load.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.cardRow}>
              <span className={styles.key}>location</span>
              <span className={styles.val}>Pune, MH, IN</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.key}>education</span>
              <span className={styles.val}>B.Tech. Computer Engineering(Vellore Institute of Technology )</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.key}>focus</span>
              <span className={styles.val}>backend · full-stack · APIs</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.key}>status</span>
              <span className={styles.val}>
                <span className={styles.dot} />
                open to work
              </span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>currently learning</div>
            {["Kubernetes", "gRPC", "Kafka", "System Design @ scale"].map((item) => (
              <div key={item} className={styles.learnItem}>
                <span className={styles.arrow}>→</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
