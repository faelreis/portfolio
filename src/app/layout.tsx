import "./globals.css";
import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";

export const wixMadefor = Wix_Madefor_Display({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Reis | Front-End",
  description: "Front-End developer and UI/UX Design",
  icons:{
    icon: './favicon.png',
    apple: './favicon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={wixMadefor.className}>{children}</body>
    </html>
  );
}
