'use client'
import { useEffect, useRef } from 'react'
import styles from './Features.module.css'

const features = [
  { icon: '🛡️', bg: 'rgba(99,102,241,0.1)', title: 'Control de Acceso', desc: 'Registra y controla el ingreso de visitas y proveedores en tiempo real. Historial completo de accesos con estado "en sitio".' },
  { icon: '🔔', bg: 'rgba(245,158,11,0.1)', title: 'Novedades y Alertas', desc: 'Sistema de alertas para fallos eléctricos, daños estructurales e incidentes. Seguimiento completo hasta su resolución.' },
  { icon: '📦', bg: 'rgba(34,211,238,0.1)', title: 'Correspondencia', desc: 'Gestiona paquetes y correspondencia recibida. Notifica a los residentes y lleva registro de entregas pendientes.' },
  { icon: '🔧', bg: 'rgba(16,185,129,0.1)', title: 'Mantenimiento (Ley 675)', desc: 'Gestión de daños y reparaciones conforme a la normativa colombiana de propiedad horizontal. Trazabilidad total.' },
  { icon: '🏗️', bg: 'rgba(139,92,246,0.1)', title: 'Portafolio Multi-edificio', desc: 'Administra múltiples conjuntos y edificios desde un único perfil. Cambia de edificio en un toque.' },
  { icon: '📄', bg: 'rgba(239,68,68,0.1)', title: 'Ficha Técnica & PDF', desc: 'Genera fichas técnicas completas con métricas de gestión: apartamentos, vehículos, personal, mantenimientos y más.' },
]

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} reveal`} ref={headerRef}>
          <div className="section-eyebrow">Funcionalidades</div>
          <h2 className="section-title">Todo lo que tu conjunto necesita</h2>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Construido específicamente para administradores, porteros y residentes de conjuntos colombianos.
          </p>
        </div>

        <div className={`${styles.grid} reveal`} ref={gridRef}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.iconWrap} style={{ background: f.bg }}>{f.icon}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
