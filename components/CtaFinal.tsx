'use client'
import { useEffect, useRef } from 'react'
import styles from './CtaFinal.module.css'

export default function CtaFinal() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={`${styles.card} reveal`} ref={cardRef}>
          <h2 className={styles.title}>
            ¿Listo para transformar<br />
            <span>tu conjunto residencial?</span>
          </h2>
          <p className={styles.sub}>
            Registra tu edificio hoy. Sin costos de instalación, sin contratos largos. Empieza a gestionar en minutos.
          </p>
          <div className={styles.actions}>
            <a href="#" className="btn btn-primary btn-lg">🏢 Registrar edificio gratis</a>
            <a href="#" className="btn btn-ghost btn-lg">📱 Descargar app</a>
          </div>
        </div>
      </div>
    </section>
  )
}
