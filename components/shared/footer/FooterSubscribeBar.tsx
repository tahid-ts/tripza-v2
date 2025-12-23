// components/FooterSubscribeBar/FooterSubscribeBar.tsx
"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export interface FooterSubscribeBarProps {
  onSubscribe: (email: string) => void;
  debounceDelay?: number;
  placeholder?: string;
  className?: string;
}

const FooterSubscribeBar: React.FC<FooterSubscribeBarProps> = ({
  onSubscribe,
  debounceDelay = 500,
  placeholder = "Enter your Mail",
  className = "",
}) => {
  const [email, setEmail] = useState<string>("");
  const debouncedEmail = useDebounce(email, debounceDelay);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isValidEmail(email)) {
      onSubscribe(email);
    } else {
      console.error("Invalid email address");
    }
  };

  useEffect(() => {
    if (debouncedEmail && isValidEmail(debouncedEmail)) {
      onSubscribe(debouncedEmail);
    }
  }, [debouncedEmail, onSubscribe]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-auto w-full inline-flex space-x-2 p-1.5 xl:h-[76px] h-12 border border-gray-300 bg-white rounded-full shadow-md ${className}`}
    >
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={handleChange}
        className="grow md:px-6 px-2 rounded-full focus:outline-none  focus:ring-0"
      />

      <button
        type="submit"
        className="bg-primary text-white font-semibold p-2 xl:px-10 rounded-full transition-all hover:bg-primary/90 cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  );
};

export default FooterSubscribeBar;
