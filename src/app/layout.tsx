
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";



export const metadata: Metadata = {
  title: "INVO",
  description: "Simplified Inventory Management",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className="w-full">

          <body className="">
            <ThemeProvider>
            <main className="">
              <Navbar/>
              {children}
              <hr />

              <Footer />
            </main>
            </ThemeProvider>


        </body>
        

    </html>

  );
}
