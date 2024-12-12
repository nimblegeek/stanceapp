import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </div>
  );
}
