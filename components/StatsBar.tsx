'use client'
import { useCounter, useIntersection } from './useCounter'
import styles from './StatsBar.module.css'

const stats = [
  { target: 500, suffix: '+', label: 'Edificios registrados' },
  { target: 12000, suffix: '+', label: 'Residentes activos' },
  { target: 98, suffix: '%', label: 'Uptime garantizado' },
  { target: 45000, suffix: '+', label: 'Eventos gestionados' },
]

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, visible } = useIntersection(0.5)
  const value = useCounter(target, 1500, visible)
  return (
    <div className={styles.item} ref={ref}>
      <div className={styles.number}>{value.toLocaleString()}{suffix}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {stats.map((s) => <StatItem key={s.label} {...s} />)}
      </div>
    </div>
  )
}
