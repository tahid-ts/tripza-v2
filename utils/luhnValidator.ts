/* eslint-disable @typescript-eslint/no-unused-vars */

export function luhnCheck(cardNumber: string | number): boolean {
  // Convert to string and remove all non-digit characters
  const sanitized = String(cardNumber).replace(/\D/g, "");

  // Validate input
  if (!sanitized || sanitized.length < 2) {
    throw new Error("Invalid card number: must be at least 2 digits long.");
  }

  // Convert to array of digits and reverse
  const digits = sanitized.split("").reverse().map(Number);

  // Apply Luhn algorithm
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }

  return sum % 10 === 0;
}


export function isValidCardNumber(cardNumber: string | number): boolean {
  try {
    return luhnCheck(cardNumber);
  } catch (error) {
    return false;
  }
}
