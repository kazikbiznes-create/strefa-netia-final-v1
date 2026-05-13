import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BENEK — Wykopy i transport piachu",
  description:
    "Transport piachu, wykopy, niwelacja terenu i wyburzenia. Warszawa i okolice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}