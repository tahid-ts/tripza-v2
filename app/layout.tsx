import type { Metadata } from "next";
import "./globals.css";
import { ContextProvider } from "@/context/Context";
import { cormorant, inter } from "./fonts";

export const metadata: Metadata = {
  title: "Tripza",
  description: "Start your World Trip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}
