import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { DesktopNavigation } from "@/lib/exports";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamburger UI",
  description: "A collection of pre-built, responsive mobile dropdown menus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DesktopNavigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
