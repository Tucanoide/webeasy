import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Configurator from "@/components/configurator/Configurator";
import BentoGrid from "@/components/sections/BentoGrid";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Process />
      <Configurator />
      <FAQ />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 bg-black">

        <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">88mph Labs</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 88mphlabs. Todos los derechos reservados. Future-Ready Web.</p>
        </div>
      </footer>
    </main>
  );
}
