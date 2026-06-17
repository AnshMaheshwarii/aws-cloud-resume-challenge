import { useEffect, useRef } from 'react'
import styles from '../styles/About.module.css'

const SIDE_ITEMS = [
  {
    label: 'Currently',
    strong: 'MSc Information Technology',
    detail: 'Cybersecurity & Cloud · Pursuing',
  },
  {
    label: 'Primary Cloud',
    strong: 'Amazon Web Services',
    detail: 'SAA-C03 Certified',
  },
  {
    label: 'Focus Areas',
    strong: 'Cloud · DevOps · Security',
    detail: 'Infrastructure as Code · Automation',
  },
  {
    label: 'Location',
    strong: 'India',
    detail: 'Gujarat Ahmedabad',
  },
]

export default function About() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.08 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          {/* Left — prose */}
          <div className={styles.text} ref={addRef}>
            <p className="section-tag">About</p>
            <h2 className="section-title">
              Engineering infrastructure,<br />securing systems.
            </h2>
            <p>
              I'm a final-year IT student specialising in{' '}
              <span className={styles.highlight}>Cloud Computing</span>,{' '}
              <span className={styles.highlight}>DevOps</span>, and{' '}
              <span className={styles.highlight}>Cybersecurity</span>. I design and
              deploy cloud-native architectures on AWS, automate infrastructure with
              Terraform and CI/CD pipelines, and approach every system with a
              security-first mindset.
            </p>
            <p>
              My background spans networking fundamentals (CCNA), Linux system
              administration, containerised deployments with Docker, and
              infrastructure-as-code. I care about building for scale, resilience,
              and security from the ground up.
            </p>
            <p>
              Currently pursuing an MSc in Information Technology, I'm looking for
              roles where cloud engineering and security intersect — environments
              where rigour and automation are the baseline, not the exception.
            </p>
          </div>

          {/* Right — sidebar facts */}
          <div className={styles.side}>
            {SIDE_ITEMS.map(item => (
              <div key={item.label} className={`${styles.sideBlock} reveal`} ref={addRef}>
                <p className={styles.sideLabel}>{item.label}</p>
                <div className={styles.sideValue}>
                  <strong>{item.strong}</strong>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
