'use client'
import { useEffect, useRef, useState } from 'react'
import { useCounter, useIntersection } from './useCounter'
import styles from './Monitoring.module.css'

const initialEvents = [
  { icon: '🛡️', color: 'rgba(99,102,241,0.15)', title: 'Visita registrada — Apto 203', sub: 'Juan Pérez • Autorizado por residente', time: 'Ahora' },
  { icon: '📦', color: 'rgba(245,158,11,0.15)', title: 'Paquete recibido — Apto 101', sub: 'Servientrega • Esperando entrega', time: '2 min' },
  { icon: '⚡', color: 'rgba(239,68,68,0.15)', title: 'Novedad: Falla eléctrica', sub: 'Piso 3 — Área común afectada', time: '8 min' },
  { icon: '🔧', color: 'rgba(16,185,129,0.15)', title: 'Mantenimiento programado', sub: 'Ascensor principal — Revisión anual', time: '15 min' },
  { icon: '🚗', color: 'rgba(139,92,246,0.15)', title: 'Vehículo ingresó', sub: 'ABC-123 — Parqueadero B', time: '22 min' },
]

const liveEvents = [
  { icon: '🔔', color: 'rgba(245,158,11,0.15)', title: 'Nueva novedad reportada', sub: 'Filtración agua — Piso 5', time: 'Ahora', live: true },
  { icon: '🛡️', color: 'rgba(99,102,241,0.15)', title: 'Proveedor autorizado', sub: 'Gas Natural • Revisión técnica', time: 'Ahora', live: true },
]

const monStats = [
  { id: 'acc', label: 'Accesos hoy', icon: '🛡️', val: 14, pct: 70, color: 'linear-gradient(90deg,#6366f1,#22d3ee)', textColor: '#a5b4fc' },
  { id: 'pkg', label: 'Paquetes pendientes', icon: '📦', val: 5, pct: 42, color: 'linear-gradient(90deg,#f59e0b,#fbbf24)', textColor: '#f59e0b' },
  { id: 'nov', label: 'Novedades activas', icon: '🔔', val: 3, pct: 30, color: 'linear-gradient(90deg,#ef4444,#f87171)', textColor: '#ef4444' },
  { id: 'mnt', label: 'Mantenimientos abiertos', icon: '🔧', val: 1, pct: 15, color: 'linear-gradient(90deg,#10b981,#34d399)', textColor: '#10b981' },
]

function MonStat({ stat, trigger }: { stat: typeof monStats[0]; trigger: boolean }) {
  const val = useCounter(stat.val, 800, trigger)
  return (
    <div className={styles.statCard}>
      <div className={styles.statHeader}>
        <span className={styles.statLabel}>{stat.label}</span>
        <span style={{ fontSize: '1.2rem' }}>{stat.icon}</span>
      </div>
      <div className={styles.statValue} style={{ color: stat.textColor }}>{val}</div>
      <div className={styles.progress}>
        <div
          className={styles.progressFill}
          style={{ width: trigger ? stat.pct + '%' : '0%', background: stat.color }}
        />
      </div>
    </div>
  )
}

export default function Monitoring() {
  const [events, setEvents] = useState(initialEvents)
  const [liveIdx, setLiveIdx] = useState(0)
  const { ref: sectionRef, visible } = useIntersection(0.3)
  const textRef = useRef<HTMLDivElement>(null)
  const feedRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    if (textRef.current) observer.observe(textRef.current)
    if (feedRef.current) observer.observe(feedRef.current)
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const ev = liveEvents[liveIdx % liveEvents.length]
      setLiveIdx(i => i + 1)
      setEvents(prev => [ev, ...prev].slice(0, 6))
    }, 5000)
    return () => clearInterval(interval)
  }, [liveIdx])

  return (
    <section className={styles.section} id="monitoring" ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} reveal`} ref={textRef}>
          <div className="section-eyebrow">Monitoreo en vivo</div>
          <h2 className="section-title">Todo bajo control,<br />en tiempo real</h2>
          <p className="section-sub">Cada evento en tu edificio queda registrado al instante. Sin retrasos, sin sorpresas.</p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.feed} reveal`} ref={feedRef}>
            <div className={styles.feedHeader}>
              <div className={styles.liveTag}>
                <div className={styles.liveDot} />
                Feed en vivo
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>Edificio Ejemplo</span>
            </div>
            <div className={styles.feedItems}>
              {events.map((ev, i) => (
                <div key={i} className="feed-item" style={{ animationDelay: i * 0.05 + 's' }}>
                  <div className={styles.feedIcon} style={{ background: ev.color }}>{ev.icon}</div>
                  <div className={styles.feedBody}>
                    <div className={styles.feedTitle}>{ev.title}</div>
                    <div className={styles.feedSub}>{ev.sub}</div>
                  </div>
                  <div className={styles.feedTime} style={{ color: (ev as any).live ? '#10b981' : undefined }}>{ev.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.stats} reveal`} ref={statsRef}>
            {monStats.map((s, i) => (
              <MonStat key={s.id} stat={s} trigger={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
