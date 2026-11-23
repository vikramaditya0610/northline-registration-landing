import { capabilities } from '../data/content.js';
import shared from '../styles/shared.module.css';
import styles from './Capabilities.module.css';

function CapabilityCard({ number, title, text }) {
  return (
    <li className={styles.card}>
      <span className={styles.badge} aria-hidden="true">
        {number}
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </li>
  );
}

export default function Capabilities() {
  const { eyebrow, heading, items } = capabilities;

  return (
    <section id="benefits" className={styles.section} aria-labelledby="benefits-heading">
      <div className={shared.container}>
        <p className={shared.eyebrow}>{eyebrow}</p>
        <h2 id="benefits-heading" className={`${shared.sectionHeading} ${styles.heading}`}>
          {heading}
        </h2>
        <ol className={styles.grid}>
          {items.map((item, index) => (
            <CapabilityCard key={item.title} number={index + 1} {...item} />
          ))}
        </ol>
      </div>
    </section>
  );
}
