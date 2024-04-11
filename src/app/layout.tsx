import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";



export const metadata: Metadata = {
  title: "INVO",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>

    <html lang="en">
          <body >
          <Navbar />

          <main>{children}</main>
          <Footer />

        </body>
        

    </html>
    </ThemeProvider>

  );
}
