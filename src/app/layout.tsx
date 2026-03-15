import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfiguratorProvider } from "@/context/ConfiguratorContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "88mphlabs | Future-Ready Web Development",
  description: "Your professional website in record time with 100% transparent pricing. Choose your base, add your power-ups, and launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans antialiased selection:bg-blue-100 selection:text-blue-900`}>
        <ConfiguratorProvider>
          {children}
        </ConfiguratorProvider>
      </body>
    </html>
  );
}
