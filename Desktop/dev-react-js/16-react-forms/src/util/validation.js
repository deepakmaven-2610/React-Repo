export function isEmail(value) {
  return value.includes('@') && value.endsWith('.in');
}


export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength ;
}

export function hasMaxLength(value, maxLength) {
  return value.length <= maxLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}


export function hasValidPasswordFormat(value) {
  
  // one uppercase letter, one lowercase letter, and one digit.
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  return regex.test(value);
}

