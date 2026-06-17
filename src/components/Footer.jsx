import { useState, useEffect } from 'react'
import styles from '../styles/Footer.module.css'

// Replace this with your deployed Lambda API Gateway URL
const VISITOR_API = 'https://YOUR_API_ENDPOINT/visitors'

export default function Footer() {
  const [visitors, setVisitors] = useState(null)   // null = loading, string = done
  const [error, setError]       = useState(false)

  useEffect(() => {
    async function fetchVisitors() {
      try {
        const res = await fetch(VISITOR_API)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        const count = data.count ?? data.visitors ?? data.total
        setVisitors(Number(count).toLocaleString())
      } catch {
        setError(true)
        setVisitors('—')
      }
    }
    fetchVisitors()
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Ansh Maheshwari · Built with React + AWS
        </span>

        <div className={styles.visitorWrap}>
          <span className={styles.visitorPill} title={error ? 'Could not reach counter API' : undefined}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.label}>Visitors:&nbsp;</span>
            <span className={styles.count}>
              {visitors === null ? 'Loading…' : visitors}
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}
