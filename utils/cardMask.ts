
export function maskCardNumber(value: string | number): string {
  // Convert to string and remove all non-digit characters
  const sanitized = String(value).replace(/\D/g, "");

  // Take the first 16 digits (standard card length)
  const digits = sanitized.slice(0, 16);

  // Add hyphens every 4 digits
  const masked = digits.replace(/(\d{4})(?=\d)/g, "$1-");

  return masked;
}
