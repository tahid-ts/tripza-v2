import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Select: React.FC<{
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
  label?: string;
}> = ({ value, onChange, children, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm  font-semibold text-gray-900 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg bg-white text-sm  font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none cursor-pointer hover:border-gray-400 transition"
        >
          {children}
        </select>

        {/* Chevron Up/Down Toggle */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Select;
