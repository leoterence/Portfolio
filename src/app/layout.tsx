import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PorteFolio_Leo",
  description: "Portefolio a but informatif sur le Developpeur front end Konan Loukou Leo ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
