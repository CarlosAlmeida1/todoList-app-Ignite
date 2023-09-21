import rockerLogo from '../../assets/rocketLogo.png'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rockerLogo} alt='Todo App' />
    </header>
  )
}