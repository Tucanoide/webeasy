import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Configurator from "@/components/configurator/Configurator";
import BentoGrid from "@/components/sections/BentoGrid";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Process />
      <Configurator />
      <FAQ />
      
      <footer className="py-12 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950">
        <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="88mph Labs" className="h-10 object-contain" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">88mph Labs</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 88mphlabs. Todos los derechos reservados. Future-Ready Web.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
