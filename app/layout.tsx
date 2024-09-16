import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Next.js - Dashboard",
  description: "A simplified version of the dashboard with placeholder data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-EN" className="h-full">
      <body
        className={`${openSans.variable} antialiased h-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
