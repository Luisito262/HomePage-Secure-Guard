'use client'
import { useEffect, useState } from 'react'
import { useCounter } from './useCounter'
import styles from './Hero.module.css'

export default function Hero() {
  const floatCount = useCounter(3, 1200)
  const [m1, setM1] = useState(0)
  const [m2, setM2] = useState(0)
  const [m3, setM3] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => animateMini(setM1, 2), 1000)
    const t2 = setTimeout(() => animateMini(setM2, 1), 1200)
    const t3 = setTimeout(() => animateMini(setM3, 2), 1400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  function animateMini(setter: (v: number) => void, target: number) {
    let curr = 0
    const step = () => {
      curr = Math.min(curr + 1, target)
      setter(curr)
      if (curr < target) setTimeout(step, 60)
    }
    step()
  }

  return (
    <section className={styles.hero} id="home">
      <div className="grid-bg" />

      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        Sistema activo en conjuntos residenciales de Colombia
      </div>

      <h1 className={styles.title}>
        Gestión inteligente<br />
        de tu <span>conjunto residencial</span>
      </h1>

      <p className={styles.sub}>
        Controla accesos, correspondencia, novedades y mantenimiento de todos tus edificios desde una sola plataforma. En tiempo real.
      </p>

      <div className={styles.actions}>
        <a href="#" className="btn btn-primary btn-lg">🏢 Registrar edificio gratis</a>
        <a href="#dashboard" className="btn btn-ghost btn-lg">Ver demo</a>
      </div>

      {/* MOCKUP */}
      <div className={styles.mockup}>
        <div className={styles.mockupGlow} />

        {/* Float left */}
        <div className={`${styles.floatCard} ${styles.floatLeft}`}>
          <div className={styles.floatTitle}>Actividad en vivo</div>
          <div className={styles.floatMiniItems}>
            {[
              { color: '#10b981', label: 'Control Acceso', val: '1 en sitio' },
              { color: '#f59e0b', label: 'Novedades', val: '2 activas' },
              { color: '#6366f1', label: 'Correspondencia', val: '5 paquetes' },
            ].map((item) => (
              <div key={item.label} className={styles.floatMiniItem}>
                <div className={styles.miniDot} style={{ background: item.color }} />
                <span className={styles.miniLabel}>{item.label}</span>
                <span className={styles.miniVal} style={{ color: item.color }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Float right */}
        <div className={`${styles.floatCard} ${styles.floatRight}`}>
          <div className={styles.floatTitle}>Total edificios</div>
          <div className={styles.floatMetric}>
            <span className={styles.floatNum} style={{ color: '#a5b4fc' }}>{floatCount}</span>
            <span className={styles.floatUnit}>activos</span>
          </div>
        </div>

        {/* Dashboard frame */}
        <div className={styles.frame}>
          <div className={styles.topbar}>
            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.red}`} />
              <div className={`${styles.dot} ${styles.yellow}`} />
              <div className={`${styles.dot} ${styles.green}`} />
            </div>
            <div className={styles.topbarTitle}>SecureGuard — Dashboard</div>
            <div className={styles.topbarStatus}>
              <div className={styles.statusLive} />
              En línea
            </div>
          </div>

          <div className={styles.inner}>
            {/* Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.sidebarHeader}>
                <div className={styles.sidebarAvatar}>🏢</div>
                <div>
                  <div className={styles.buildingName}>Edificio Ejemplo</div>
                  <div className={styles.nic}>NIC: 654321</div>
                </div>
              </div>
              {[
                { icon: '🏠', label: 'Dashboard', active: true },
                { icon: '🛡️', label: 'Control Acceso' },
                { icon: '📦', label: 'Correspondencia' },
                { icon: '🔧', label: 'Mantenimiento' },
                { icon: '🔔', label: 'Novedades' },
                { icon: '👥', label: 'Personal' },
                { icon: '🏗️', label: 'Apartamentos' },
                { icon: '🚗', label: 'Vehículos' },
                { icon: '📄', label: 'Exportar PDF' },
              ].map((item) => (
                <div key={item.label} className={`${styles.navItem} ${item.active ? styles.navActive : ''}`}>
                  <span>{item.icon}</span> {item.label}
                </div>
              ))}
            </div>

            {/* Main */}
            <div className={styles.main}>
              <div className={styles.sectionLabel}>Portafolio de edificios</div>
              <div className={styles.tabs}>
                {['🏢 Carlos Edificios', '🏢 Edificio Ejemplo', '🏢 Edificio 4'].map((t, i) => (
                  <button key={t} className={`${styles.tab} ${i === 1 ? styles.tabActive : ''}`}>{t}</button>
                ))}
              </div>

              <div className={styles.sectionLabel}>Dashboard</div>
              <div className={styles.metrics}>
                {[
                  { icon: '🔔', val: m1, color: '#ef4444', label: 'Novedades' },
                  { icon: '👷', val: m2, color: '#6366f1', label: 'Personal' },
                  { icon: '🏠', val: m3, color: '#10b981', label: 'Aptos' },
                ].map((m) => (
                  <div key={m.label} className={styles.metricCard}>
                    <span className={styles.metricIcon}>{m.icon}</span>
                    <span className={styles.metricVal} style={{ color: m.color }}>{m.val}</span>
                    <span className={styles.metricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.sectionLabel}>Operaciones y Servicios</div>
              <div className={styles.serviceGrid}>
                <div className={`${styles.serviceCard} ${styles.purple}`}>
                  <div className={`${styles.serviceIcon} ${styles.iconPurple}`}>🛡️</div>
                  <div>
                    <div className={styles.serviceTitle}>Control Acceso</div>
                    <div className={styles.serviceDesc}>Visitas y Proveedores</div>
                  </div>
                  <div className={styles.badge2}>1 en sitio</div>
                </div>
                <div className={`${styles.serviceCard} ${styles.orange}`}>
                  <div className={`${styles.serviceIcon} ${styles.iconOrange}`}>📦</div>
                  <div>
                    <div className={styles.serviceTitle}>Correspondencia</div>
                    <div className={styles.serviceDesc}>Paquetes recibidos</div>
                  </div>
                </div>
              </div>
              <div className={`${styles.serviceCard} ${styles.teal} ${styles.full}`} style={{ marginBottom: 14 }}>
                <div className={`${styles.serviceIcon} ${styles.iconTeal}`}>🔧</div>
                <div>
                  <div className={styles.serviceTitle}>Mantenimiento</div>
                  <div className={styles.serviceDesc}>Gestión de daños y reparaciones (Ley 675)</div>
                </div>
                <span style={{ color: 'var(--muted)', fontSize: '0.8rem', marginLeft: 'auto' }}>›</span>
              </div>

              <div className={styles.sectionLabel}>Novedades Recientes</div>
              <div className={styles.novedades}>
                <div className={styles.novedad} style={{ borderLeftColor: 'var(--accent3)' }}>
                  <span>⚡</span>
                  <span className={styles.novedadTitle}>Falla eléctrica — Piso 3</span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>›</span>
                </div>
                <div className={styles.novedad} style={{ borderLeftColor: 'var(--danger)' }}>
                  <span>🚨</span>
                  <span className={styles.novedadTitle}>Alerta: acceso no autorizado</span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>›</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
