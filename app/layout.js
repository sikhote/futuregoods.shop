import { Archivo } from "next/font/google";
import "./globals.css";

const sans = Archivo({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "future goods",
  description: "we present the best enduring items",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
