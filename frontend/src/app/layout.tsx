import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "AM Dienstleistungen GmbH | Hotel-Service Management",
  description: "Professionelle Hoteldienstleistungen: Zimmerreinigung, Glasreinigung, Zimmer-Check und Public Area.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}<CookieBanner /></body>
    </html>
  );
}
