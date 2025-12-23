"use client";
import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): Readonly<T> {
  const [debouncedValue, setDebouncedValue] = useState<Readonly<T>>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay, value]);

  return debouncedValue;
}
