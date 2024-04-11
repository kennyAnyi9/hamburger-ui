import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { DesktopNavigation, Footer } from "@/lib/exports";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";

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
      <body className={cn(" font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DesktopNavigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
