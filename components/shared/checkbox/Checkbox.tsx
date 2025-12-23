import React from "react";

const Checkbox: React.FC<{
  checked: boolean;
  onChange: (v: boolean) => void;
}> = ({ checked, onChange }) => (
  <button
    onClick={() => onChange(!checked)}
    className={`w-6 h-6 rounded border-2 flex items-center justify-center transition cursor-pointer ${
      checked ? "bg-black border-black" : "border-gray-300"
    }`}
  >
    {checked && (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M5 13l4 4L19 7"
        />
      </svg>
    )}
  </button>
);

export default Checkbox;
