import { hero } from '../data/content.js';
import shared from '../styles/shared.module.css';
import styles from './Hero.module.css';

export default function Hero() {
  const { eyebrow, heading, body, primaryCta, secondaryCta, image } = hero;

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className={`${shared.container} ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={shared.eyebrow}>{eyebrow}</p>
          <h1 id="hero-heading" className={styles.heading}>
            {heading}
          </h1>
          <p className={styles.body}>{body}</p>
          <div className={styles.actions}>
            <a href={primaryCta.href} className={`${shared.button} ${styles.primary}`}>
              {primaryCta.label}
            </a>
            <a href={secondaryCta.href} className={styles.secondary}>
              {secondaryCta.label}
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
        <img
          className={styles.art}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          fetchpriority="high"
        />
      </div>
    </section>
  );
}
