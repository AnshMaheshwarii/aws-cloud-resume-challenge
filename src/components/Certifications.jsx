import { useEffect, useRef } from 'react'
import styles from '../styles/Certifications.module.css'

const CERTS = [
  { domain: 'Cloud',      title: 'AWS Certified Solutions Architect – Associate' },
  { domain: 'Networking', title: 'CCNA 200-301' },
  { domain: 'Security',   title: 'Cyber Security Expert' },
  { domain: 'DevOps',     title: 'DevOps Cloud Engineer – Internship Certificate' },
]

const EDUCATION = [
  {
    period: '2026 – Continuing',
    degree: 'Master of Science — Information Technology',
    school: 'Gujarat University',
    status: 'Pursuing',
    active: true,
  },
  {
    period: '2023 – 2026',
    degree: 'Bachelor of Science — Information Technology',
    school: 'Gujarat University',
    status: 'Completed',
    active: false,
  },
  {
    period: 'Until 2022',
    degree: 'Secondary and Higher Secondary Education',
    school: 'Seventh Day Adventist Higher Secondary School',
    status: 'Completed',
    active: false,
  },
]

export default function Certifications() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.06 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <section id="certifications" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Credentials</p>
          <h2 className="section-title">Certifications &amp; Education</h2>
        </div>

        <div className={styles.columns}>

          {/* Certifications */}
          <div>
            <p className={styles.blockLabel}>Certifications</p>
            <div className={styles.certList}>
              {CERTS.map(cert => (
                <div key={cert.title} className={`${styles.certCard} reveal`} ref={addRef}>
                  <p className={styles.certDomain}>{cert.domain}</p>
                  <p className={styles.certTitle}>{cert.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className={styles.blockLabel}>Education</p>
            <div className={styles.timeline}>
              {EDUCATION.map((edu, i) => (
                <div key={i} className={`${styles.timelineItem} reveal`} ref={addRef}>
                  <div className={`${styles.dot} ${edu.active ? styles.dotActive : ''}`} />
                  <p className={styles.period}>{edu.period}</p>
                  <p className={styles.degree}>{edu.degree}</p>
                  <p className={styles.school}>{edu.school}</p>
                  <span className={`${styles.badge} ${edu.active ? styles.badgeActive : styles.badgeDone}`}>
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
