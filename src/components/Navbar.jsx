import { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Certs',          href: '#certifications' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>Ansh.Maheshwari</a>

          {/* Desktop links */}
          <ul className={styles.links}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className={styles.mobileBtn}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} className={styles.mobileLink} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
