import styles from "./Skills.module.css";

const groups = [
  {
    name: "backend",
    items: [
      { name: "Spring Boot", level: 90 },
      { name: "Java 21", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "JPA / Hibernate", level: 80 },
      { name: "Spring Security", level: 75 },
    ],
  },
  {
    name: "frontend",
    items: [
      { name: "Angular 16+", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "RxJS", level: 75 },
      { name: "HTML / CSS", level: 88 },
      { name: "Bootstrap 5", level: 78 },
    ],
  },
  {
    name: "infra & data",
    items: [
      { name: "Redis", level: 72 },
      { name: "PostgreSQL", level: 78 },
      { name: "Docker", level: 65 },
      { name: "Render / Vercel", level: 85 },
      { name: "Git / GitHub", level: 90 },
    ],
  },
  {
    name: "concepts",
    items: [
      { name: "JWT / RBAC", level: 82 },
      { name: "Rate Limiting", level: 78 },
      { name: "Microservices", level: 68 },
      { name: "CORS / HTTP", level: 85 },
      { name: "CI/CD basics", level: 62 },
    ],
  },
];

function Bar({ level }: { level: number }) {
  const filled = Math.round(level / 10);
  return (
    <span className={styles.bar}>
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className={i < filled ? styles.barFilled : styles.barEmpty}
        >
          ▮
        </span>
      ))}
      <span className={styles.barPct}>{level}%</span>
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.header}>
        <div className={styles.label}>
          <span className={styles.num}>03</span>
          <span className={styles.title}>skills</span>
        </div>
      </div>

      <div className={styles.grid}>
        {groups.map((g) => (
          <div key={g.name} className={styles.group}>
            <div className={styles.groupName}>
              <span className={styles.hash}>#</span> {g.name}
            </div>
            <div className={styles.items}>
              {g.items.map((item) => (
                <div key={item.name} className={styles.item}>
                  <span className={styles.itemName}>{item.name}</span>
                  <Bar level={item.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
