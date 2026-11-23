import { brand, footerLinks } from '../data/content.js';
import shared from '../styles/shared.module.css';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${shared.container} ${styles.inner}`}>
        <p>
          {brand.name} <span aria-hidden="true">•</span> {brand.tagline}
        </p>
        <nav aria-label="Footer">
          <ul className={styles.links}>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
