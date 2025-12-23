"use client";

import React from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-800">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-semibold mb-4">Something went wrong</h1>
          <p className="text-sm text-gray-500 mb-6">
            {error?.message || "An unexpected error occurred."}
          </p>

          <button
            onClick={reset}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
