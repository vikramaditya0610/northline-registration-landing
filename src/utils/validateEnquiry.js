// Pure validation for the enquiry form. Returns { fieldName: message } for each invalid field.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const FIELD_ORDER = ['name', 'email', 'interest', 'consent'];

export function validateEnquiry(values, interests) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Enter your full name (at least 2 characters).';
  }
  if (!values.email.trim()) {
    errors.email = 'Enter your email address.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter a valid email address, like name@example.com.';
  }
  if (!interests.includes(values.interest)) {
    errors.interest = 'Select a learning interest.';
  }
  if (!values.consent) {
    errors.consent = 'Tick the box to agree to be contacted about your enquiry.';
  }

  return errors;
}
