import styles from './EnquiryForm.module.css';

// Reusable labelled field wrapper: wires up the label, error message and aria attributes.
export default function FormField({ id, label, error, children }) {
  const errorId = `${id}-error`;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {children({
        id,
        'aria-invalid': error ? 'true' : 'false',
        'aria-describedby': error ? errorId : undefined,
        className: `${styles.control} ${error ? styles.controlInvalid : ''}`,
      })}
      {error && (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
