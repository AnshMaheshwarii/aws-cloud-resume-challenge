import styles from '../styles/Hero.module.css'

// Place your resume PDF at /public/resume.pdf — this path resolves correctly
// both in dev (npm run dev) and after build (npm run build).
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        

        <h1 className={`${styles.name} ${styles.fadeUp} ${styles.d2}`}>
          Ansh Maheshwari
        </h1>

        <p className={`${styles.role} ${styles.fadeUp} ${styles.d3}`}>
          Cloud&nbsp; ·&nbsp; DevOps&nbsp; ·&nbsp; Cybersecurity
        </p>

        <p className={`${styles.desc} ${styles.fadeUp} ${styles.d4}`}>
          Building cloud-native solutions with AWS,<br />
          automation and scalable infrastructure.
        </p>

        <div className={`${styles.buttons} ${styles.fadeUp} ${styles.d5}`}>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <i className="fa-regular fa-file-lines" aria-hidden="true" />
            View Resume
          </a>

          <a
            href="https://github.com/AnshMaheshwarii"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
            GitHub
          </a>

          <a href="#contact" className="btn btn-outline">
            <i className="fa-regular fa-envelope" aria-hidden="true" />
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
