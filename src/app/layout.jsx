import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

// Font update
import { Sen } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const SenFont = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Photography",
  description:
    "----------------------------------------------------------------",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SenFont.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
