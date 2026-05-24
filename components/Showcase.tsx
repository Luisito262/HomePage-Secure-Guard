'use client'
import { useEffect, useRef } from 'react'
import styles from './Showcase.module.css'

const featureList = [
  { icon: '🏢', title: 'Información del Edificio', desc: 'Accede a la ficha técnica: aptos, vehículos, servicios públicos y contacto administrativo directo.' },
  { icon: '👷', title: 'Personal del Edificio', desc: 'Directorio de porteros, mantenimiento y administración con contacto inmediato.' },
  { icon: '🚗', title: 'Registro de Vehículos', desc: 'Controla el parque automotor del conjunto con historial de movimientos.' },
  { icon: '⚡', title: 'Servicios Públicos', desc: 'Líneas directas de energía (AIR-E) y acueducto (AAA) siempre visibles para emergencias.' },
]

export default function Showcase() {
  const textRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    if (textRef.current) observer.observe(textRef.current)
    if (phoneRef.current) observer.observe(phoneRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.showcase} id="dashboard">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.text} reveal`} ref={textRef}>
            <div className="section-eyebrow">Aplicación móvil</div>
            <h2 className="section-title">Tu conjunto en el bolsillo</h2>
            <p className="section-sub">Diseñada para porteros, administradores y residentes. Interfaz oscura, rápida y precisa para operar en cualquier momento.</p>
            <div className={styles.featureList}>
              {featureList.map((f) => (
                <div key={f.title} className={styles.featureItem}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.phoneWrap} reveal`} ref={phoneRef}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}>
                  <div className={styles.phoneAvatar}>🏢</div>
                  <div>
                    <div className={styles.phoneName}>Edificio Ejemplo</div>
                    <div className={styles.phoneNic}>NIC: 654321</div>
                  </div>
                </div>

                <div className={styles.phoneLabel}>Dashboard</div>
                <div className={styles.phoneMetrics}>
                  {[
                    { icon: '🔔', val: 2, color: '#ef4444', lbl: 'Novedades' },
                    { icon: '👷', val: 1, color: '#6366f1', lbl: 'Personal' },
                    { icon: '🏠', val: 2, color: '#10b981', lbl: 'Aptos' },
                  ].map((m) => (
                    <div key={m.lbl} className={styles.phoneMet}>
                      <div className={styles.phoneMetIcon}>{m.icon}</div>
                      <div className={styles.phoneMetVal} style={{ color: m.color }}>{m.val}</div>
                      <div className={styles.phoneMetLbl}>{m.lbl}</div>
                    </div>
                  ))}
                </div>

                <div className={styles.phoneLabel} style={{ marginTop: 12 }}>Operaciones y Servicios</div>
                <div className={styles.phoneSvcRow}>
                  <div className={`${styles.phoneSvc} ${styles.phonePurple}`}>
                    <div className={styles.phoneSvcIcon}>🛡️</div>
                    <div className={styles.phoneSvcTitle}>Control Acceso</div>
                    <div className={styles.phoneSvcSub}>Visitas y Proveedores</div>
                  </div>
                  <div className={`${styles.phoneSvc} ${styles.phoneOrange}`}>
                    <div className={styles.phoneSvcIcon}>📦</div>
                    <div className={styles.phoneSvcTitle}>Correspondencia</div>
                    <div className={styles.phoneSvcSub}>Paquetes recibidos</div>
                  </div>
                </div>

                <div className={styles.phoneLabel} style={{ marginTop: 12 }}>Novedades Recientes</div>
                <div className={styles.phoneAlert}>
                  <strong>Falla eléctrica</strong>
                  Piso 3 — Sin luz en área común
                </div>
                <div className={`${styles.phoneAlert} ${styles.alertDanger}`}>
                  <strong>Acceso no autorizado</strong>
                  Revisión requerida — Hace 5 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
