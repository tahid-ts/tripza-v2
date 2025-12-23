// utils/storage.ts

export interface BillingInfo {
  name: string;
  numberRaw: string;
  numberMasked: string;
  exp: string;
  cvv: string;
}

const STORAGE_KEY = "checkout_billing_info_v1";

export function saveBillingInfo(info: BillingInfo): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  } catch (e) {
    console.error("Failed to save billing info", e);
  }
}

export function loadBillingInfo(): BillingInfo | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed as BillingInfo;
  } catch (e) {
    console.error("Failed to load billing info", e);
    return null;
  }
}