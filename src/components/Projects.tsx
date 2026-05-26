import styles from "./Projects.module.css";

const projects = [
  {
    id: "01",
    name: "API Rate Limiter",
    tagline: "Distributed rate limiting with Redis token bucket",
    desc: "Full-stack dashboard for configuring and monitoring API rate limits in real time. Implements token bucket algorithm backed by Redis, with per-client and global rules. Angular frontend polling /actuator/health for live status.",
    stack: ["Spring Boot 3", "Redis", "Angular 16", "Actuator"],
    links: { live: "https://api-rate-limiter-avdw.vercel.app", github: "https://github.com/HRSH455/ApiRateLimiter" },
    status: "live",
    metrics: [
      { key: "req/s max", val: "1000" },
      { key: "backend", val: "Render" },
      { key: "cache", val: "Redis" },
    ],
  },
  {
    id: "02",
    name: "TrainerHub",
    tagline: "Role-based fitness management platform",
    desc: "End-to-end platform connecting trainers and clients with JWT-secured role-based access control, session scheduling, and workout plan management. Deployed across Vercel (frontend) and Render (backend).",
    stack: ["Spring Boot 3.5", "Angular 16", "PostgreSQL", "JWT", "Bootstrap 5"],
    links: { live: "https://trainerhub-sigma.vercel.app", github: "https://github.com/HRSH455/Trainer_Hub" },
    status: "live",
    metrics: [
      { key: "auth", val: "JWT / RBAC" },
      { key: "frontend", val: "Vercel" },
      { key: "backend", val: "Render" },
    ],
  },
  {
    id: "03",
    name: "CineBook",
    tagline: "Concurrent ticket booking with optimistic locking",
    desc: "Movie ticket reservation system designed for concurrent write safety using JPA optimistic locking. Handles race conditions at the persistence layer without sacrificing throughput.",
    stack: ["Spring Boot", "JPA", "Hibernate", "PostgreSQL"],
    links: { live: "https://movie-platform-five.vercel.app/", github: "https://github.com/HRSH455/movie_platform" },
    status: "live",
    metrics: [
      { key: "concurrency", val: "OCC" },
      { key: "ORM", val: "Hibernate" },
      { key: "pattern", val: "Version locking" },
    ],
  },
  {
    id: "04",
    name: "Microservices Shop",
    tagline: "5-service cloud-native architecture on Kubernetes",
    desc: "Production-grade microservices system with API gateway, event-driven Kafka notifications, and per-service databases (MongoDB + MySQL). Full observability stack: Prometheus, Grafana, Loki, and Tempo. Deployed on kind with Kustomize overlays and secured via Keycloak OAuth2/OIDC.",
    stack: ["Spring Boot 3.4", "Kubernetes", "Kafka", "Keycloak", "Angular", "Grafana"],
    links: { live: "#", github: "https://github.com/HRSH455/SpringBoot_microservices" },
    status: "archived",
    metrics: [
      { key: "services", val: "5" },
      { key: "auth", val: "Keycloak" },
      { key: "tracing", val: "Tempo" },
    ],
  },
  {
    id: "05",
    name: "Spring AI RAG",
    tagline: "Retrieval-augmented generation with local LLMs",
    desc: "Spring Boot RAG pipeline that ingests PDFs on startup, embeds them via nomic-embed-text, and stores vectors in PGVector. Chat API answers questions by retrieving semantically similar chunks and prompting Mistral via Ollama — fully local, no cloud API calls.",
    stack: ["Spring Boot 3.4", "Spring AI 1.1", "Ollama", "PGVector", "Docker Compose"],
    links: { live: "#", github: "#" },
    status: "archived",
    metrics: [
      { key: "model", val: "Mistral" },
      { key: "vector DB", val: "PGVector" },
      { key: "embed", val: "768-dim" },
    ],
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <div className={styles.label}>
          <span className={styles.num}>02</span>
          <span className={styles.title}>projects</span>
        </div>
        <p className={styles.sub}>selected work — systems &amp; full-stack</p>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.id} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardMeta}>
                <span className={styles.cardId}>{p.id}</span>
                <span
                  className={`${styles.status} ${
                    p.status === "live" ? styles.live : styles.archived
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardTagline}>{p.tagline}</p>
            </div>

            <p className={styles.cardDesc}>{p.desc}</p>

            <div className={styles.metrics}>
              {p.metrics.map((m) => (
                <div key={m.key} className={styles.metric}>
                  <span className={styles.metricKey}>{m.key}</span>
                  <span className={styles.metricVal}>{m.val}</span>
                </div>
              ))}
            </div>

            <div className={styles.stack}>
              {p.stack.map((s) => (
                <span key={s} className={styles.tag}>
                  {s}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              {p.links.live !== "#" && (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkPrimary}
                >
                  live ↗
                </a>
              )}
              <a href={p.links.github} className={styles.linkGhost}>
                github →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
