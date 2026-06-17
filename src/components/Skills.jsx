import { useEffect, useRef } from 'react'
import styles from '../styles/Skills.module.css'

const SKILL_GROUPS = [
  {
    name: 'Cloud — AWS',
    tags: ['AWS', 'S3', 'CloudFront', 'Route 53', 'IAM', 'Lambda', 'EC2', 'DynamoDB'],
  },
  {
    name: 'DevOps',
    tags: ['Docker', 'Jenkins', 'Terraform', 'Git', 'GitHub Actions', 'Linux', 'CI/CD'],
  },
  {
    name: 'Networking',
    tags: ['CCNA', 'TCP/IP', 'Routing', 'Switching', 'VPN', 'Firewalls'],
  },
  {
    name: 'Programming',
    tags: ['Python', 'JavaScript', 'React', 'Bash'],
  },
]

export default function Skills() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.08 }
    )
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el)
  }

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Technical Expertise</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-sub">
            Tools and platforms I use to build, deploy, and secure cloud infrastructure.
          </p>
        </div>

        <div className={styles.grid}>
          {SKILL_GROUPS.map(group => (
            <div
              key={group.name}
              className={`${styles.card} reveal`}
              ref={addRef}
            >
              <p className={styles.groupName}>{group.name}</p>
              <div className={styles.tags}>
                {group.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
