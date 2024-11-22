import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@components/providers/theme-provider";

import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";

export const metadata = {
  title: "HEMD",
  description: "Research and Development",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="h-[calc(100vh-94px)] overflow-y-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
