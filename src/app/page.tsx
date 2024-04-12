"use client"
import './globals.css'
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Otherfeatures } from "@/components/Otherfeatures";
import { FAQ } from "@/components/FAQ";
import { Contactus } from "@/components/Contactus";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/components/theme-provider';


export default function Home() {
  return (
     <main>
    <ThemeProvider>

      <Navbar />
      <Hero />
      <About />
      <Features />
      <Otherfeatures />
      <FAQ />
      <Contactus />
      <Footer />

    </ThemeProvider>

    </main>
  );
}
