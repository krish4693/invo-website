import {Navbar}  from "../components/Navbar";
import './globals.css'
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import {Otherfeatures } from "@/components/Otherfeatures";
export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Features/>
      <Otherfeatures/>
    </main>
  );
}
