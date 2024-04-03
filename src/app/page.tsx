
import './globals.css'
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Otherfeatures } from "@/components/Otherfeatures";
import { FAQ } from "@/components/FAQ";
import { Contactus } from "@/components/Contactus";
import { ThemeProvider } from "@/components/theme-provider";


export default function Home() {
  return (
     <main>
      <Hero />
      <About />
      <Features />
      <Otherfeatures />
      <FAQ />
      <Contactus />

    </main>
   
  );
}
