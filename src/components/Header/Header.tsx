import rockerLogo from '../../assets/rocketLogo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rockerLogo} alt='Todo App' className={styles.img} />

      <span className={styles.to}>to</span>
      <span className={styles.do}>do</span>
    </header>
  )
}
