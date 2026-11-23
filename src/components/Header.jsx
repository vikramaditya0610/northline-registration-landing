import { brand, navLinks } from '../data/content.js';
import shared from '../styles/shared.module.css';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${shared.container} ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label={`${brand.name} home`}>
          <img src="/assets/northline_logo.svg" alt="" width="240" height="60" className={styles.logo} />
        </a>
        <nav aria-label="Primary" className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#register" className={`${shared.button} ${styles.register}`}>
            <span className={styles.longLabel}>Register now</span>
            <span className={styles.shortLabel}>Join</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
