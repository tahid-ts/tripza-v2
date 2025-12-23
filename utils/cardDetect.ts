
export function detectCardType(number: string | number): "visa" | "mastercard" | "gpay" | "unknown" {
  const sanitized = String(number).replace(/\D/g, "");

  // Visa: Starts with 4
  if (/^4/.test(sanitized)) {
    return "visa";
  }
  // Mastercard: Starts with 51-55 or 2221-2720
  if (/^(5[1-5]|2[2-7])/.test(sanitized)) {
    return "mastercard";
  }
  // GPay: Placeholder for cards starting with 7 (custom logic)
  if (/^7/.test(sanitized)) {
    return "gpay";
  }

  return "unknown";
}
