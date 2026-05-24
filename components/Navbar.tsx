'use client'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        <div className={styles.logoIcon}>🛡️</div>
        SecureGuard
      </a>
      <ul className={styles.links}>
        <li><a href="#features">Características</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#monitoring">Monitoreo</a></li>
        <li><a href="#integrations">Soluciones</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className={styles.cta}>
        <a href="#" className="btn btn-ghost">Iniciar sesión</a>
        <a href="#" className="btn btn-primary">Registrar edificio</a>
      </div>
    </nav>
  )
}
