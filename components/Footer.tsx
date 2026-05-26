import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <a href="#" className={styles.logo}>
          <Image
            src="/Logo-web.jpeg"
            alt="SecureGuard Logo"
            width={38}
            height={38}
            className={styles.logoImage}
          />

          <span>SecureGuard</span>
        </a>

        <ul className={styles.links}>
          <li><a href="#">Términos</a></li>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Soporte</a></li>
        </ul>

        <span className={styles.copy}>
          © 2026 SecureGuard. Sistema de Vigilancia Residencial.
        </span>

      </div>
    </footer>
  )
}
