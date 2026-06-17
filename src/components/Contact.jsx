import { useEffect, useRef } from 'react'
import styles from '../styles/Contact.module.css'

const CONTACTS = [
  {
    platform: 'Email',
    detail:   'Gmail',
    href:     'mailto:maheshwariansh1215@gmail.com',
    icon:     'fa-regular fa-envelope',
  },
  {
    platform: 'GitHub',
    detail:   'Github Profile',
    href:     'https://github.com/AnshMaheshwarii',
    icon:     'fa-brands fa-github',
    external: true,
  },
  {
    platform: 'LinkedIn',
    detail:   'LinkedIn Profile',
    href:     'https://www.linkedin.com/in/ansh-maheshwarii/',
    icon:     'fa-brands fa-linkedin-in',
    external: true,
  },
  {
    platform: 'Instagram',
    detail:   '@ansh_1215',
    href:     'https://www.instagram.com/ansh_1215/',
    icon:     'fa-brands fa-instagram',
    external: true,
  },
  {
    platform: 'Phone',
    detail:   'Personal Mobile Number',
    href:     'tel:+917069152351',
    icon:     'fa-solid fa-phone',
  },
]

export default function Contact() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.06 }
    )
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Get in Touch</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-sub">
            Whether it's a project, a role, or just a conversation about cloud
            infrastructure — I'm always happy to talk.
          </p>
        </div>

        <div className={styles.grid}>
          {CONTACTS.map(c => (
            <a
              key={c.platform}
              href={c.href}
              className={`${styles.card} reveal`}
              ref={addRef}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              aria-label={`${c.platform}: ${c.detail}`}
            >
              <div className={styles.iconWrap}>
                <i className={c.icon} aria-hidden="true" />
              </div>
              <div>
                <p className={styles.platform}>{c.platform}</p>
                <p className={styles.detail}>{c.detail}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
