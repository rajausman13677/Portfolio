import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Usman Zafar — LinkedIn & Upwork Business Developer",
  description:
    "Usman Zafar helps freelancers and consultants win more clients on LinkedIn and Upwork through profile optimisation, outreach systems, and lead generation strategy.",
  keywords: [
    "Usman Zafar",
    "LinkedIn business development",
    "Upwork profile optimisation",
    "lead generation",
    "B2B outreach",
    "freelance coach",
    "client acquisition",
  ],
  openGraph: {
    title: "Usman Zafar — LinkedIn & Upwork Business Developer",
    description: "Win more clients on LinkedIn and Upwork. Proven systems, real results.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
