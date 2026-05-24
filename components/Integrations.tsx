'use client'
import { useEffect, useRef } from 'react'
import styles from './Integrations.module.css'

const types = [
  { icon: '🏢', name: 'Edificios', desc: 'Apartamentos y torres residenciales urbanas' },
  { icon: '🏘️', name: 'Conjuntos', desc: 'Urbanizaciones y conjuntos cerrados' },
  { icon: '🏗️', name: 'Multifamiliar', desc: 'Portafolio de múltiples propiedades' },
  { icon: '🏬', name: 'Mixto', desc: 'Comercio y residencia en un solo sistema' },
]

const tags = ['⚡ AIR-E Energía', '💧 AAA Acueducto', '📱 iOS & Android', '📄 Ley 675', '☁️ Cloud']

export default function Integrations() {
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    refs.forEach(r => { if (r.current) observer.observe(r.current) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="integrations">
      <div className="container">
        <div className={`${styles.header} reveal`} ref={refs[0]}>
          <div className="section-eyebrow">Soluciones</div>
          <h2 className="section-title">Para todo tipo de conjunto</h2>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            SecureGuard se adapta a la estructura de tu propiedad horizontal.
          </p>
        </div>

        <div className={`${styles.grid} reveal`} ref={refs[1]}>
          {types.map((t) => (
            <div key={t.name} className={styles.card}>
              <span className={styles.icon}>{t.icon}</span>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.desc}>{t.desc}</div>
            </div>
          ))}
        </div>

        <div className={`${styles.tagLabel} reveal`} ref={refs[2]}>
          Funciona con los servicios públicos y operadores más usados en Colombia
        </div>

        <div className={`${styles.tags} reveal`} ref={refs[3]}>
          {tags.map((tag) => (
            <div key={tag} className={styles.tag}>{tag}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
