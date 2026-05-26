'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
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
        <Image
          src="/Logo-web.jpeg"
          alt="SecureGuard Logo"
          width={45}
          height={45}
          className={styles.logoImage}
        />

        <span>SecureGuard</span>
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
