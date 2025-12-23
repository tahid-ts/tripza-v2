/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import React, { createContext, useContext, ReactNode } from "react";

// --- Types ---
interface ContextData {
  // Add your shared state or functions here
}

interface ContextProviderProps {
  children: ReactNode;
}

// --- Context Creation ---
const CustomContext = createContext<ContextData | null>(null);

// --- Provider ---
export const ContextProvider = ({ children }: ContextProviderProps) => {
  const value: ContextData = {
    // Example: user: null, setUser: () => {}
  };

  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  );
};

// --- Hook ---
export const useCustomContext = (): ContextData => {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error("useCustomContext must be used within a ContextProvider");
  }
  return context;
};
