import { useRef, useState } from 'react';
import { enquiry } from '../data/content.js';
import { FIELD_ORDER, validateEnquiry } from '../utils/validateEnquiry.js';
import FormField from './FormField.jsx';
import shared from '../styles/shared.module.css';
import styles from './EnquiryForm.module.css';

const EMPTY_VALUES = { name: '', email: '', interest: '', consent: false };
const STORAGE_KEY = 'northline-enquiry-confirmation';

// Local-only: keeps a confirmation flag in this browser. No personal details stored, nothing sent.
function recordLocally(interest) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ interest, recordedAt: new Date().toISOString() })
    );
  } catch {
    // Storage can be unavailable (private mode); the on-page confirmation still shows.
  }
}

export default function EnquiryForm() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState('');
  const fieldRefs = useRef({});

  const register = (name) => (node) => {
    fieldRefs.current[name] = node;
  };

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    const next = { ...values, [name]: type === 'checkbox' ? checked : value };
    setValues(next);
    if (status) setStatus('');
    if (attempted) setErrors(validateEnquiry(next, enquiry.interests));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const found = validateEnquiry(values, enquiry.interests);
    setAttempted(true);
    setErrors(found);

    const firstInvalid = FIELD_ORDER.find((name) => found[name]);
    if (firstInvalid) {
      const count = Object.keys(found).length;
      setStatus(`Please fix ${count} ${count === 1 ? 'field' : 'fields'} before submitting.`);
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    recordLocally(values.interest);
    setValues(EMPTY_VALUES);
    setAttempted(false);
    setStatus(enquiry.success);
  }

  const isSuccess = status === enquiry.success;

  return (
    <section id="register" className={styles.section} aria-labelledby="register-heading">
      <div className={`${shared.container} ${styles.inner}`}>
        <div className={styles.intro}>
          <p className={shared.eyebrow}>{enquiry.eyebrow}</p>
          <h2 id="register-heading" className={`${shared.sectionHeading} ${styles.heading}`}>
            {enquiry.heading}
          </h2>
          <p className={styles.note}>{enquiry.note}</p>
        </div>

        <form className={styles.form} noValidate onSubmit={handleSubmit} aria-labelledby="register-heading">
          <p className={styles.required}>All fields are required.</p>

          <FormField id="enquiry-name" label="Full name" error={errors.name}>
            {(props) => (
              <input
                {...props}
                ref={register('name')}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                required
                value={values.name}
                onChange={handleChange}
              />
            )}
          </FormField>

          <FormField id="enquiry-email" label="Email address" error={errors.email}>
            {(props) => (
              <input
                {...props}
                ref={register('email')}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="you@example.com"
                required
                value={values.email}
                onChange={handleChange}
              />
            )}
          </FormField>

          <FormField id="enquiry-interest" label="Learning interest" error={errors.interest}>
            {(props) => (
              <select
                {...props}
                ref={register('interest')}
                name="interest"
                required
                value={values.interest}
                onChange={handleChange}
              >
                <option value="">Select a program</option>
                {enquiry.interests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            )}
          </FormField>

          <div className={styles.consent}>
            <input
              ref={register('consent')}
              id="enquiry-consent"
              name="consent"
              type="checkbox"
              className={styles.checkbox}
              required
              checked={values.consent}
              onChange={handleChange}
              aria-invalid={errors.consent ? 'true' : 'false'}
              aria-describedby={errors.consent ? 'enquiry-consent-error' : undefined}
            />
            <label htmlFor="enquiry-consent" className={styles.consentLabel}>
              {enquiry.consentLabel}
            </label>
            {errors.consent && (
              <p id="enquiry-consent-error" className={`${styles.error} ${styles.consentError}`}>
                {errors.consent}
              </p>
            )}
          </div>

          <button type="submit" className={`${shared.button} ${styles.submit}`}>
            {enquiry.submitLabel}
          </button>

          <p role="status" className={`${styles.status} ${isSuccess ? styles.success : ''} ${status && !isSuccess ? styles.problem : ''}`}>
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
