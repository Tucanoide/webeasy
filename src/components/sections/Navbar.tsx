"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex justify-center"
    >
      <div className="glass rounded-full px-6 py-3 flex items-center gap-8 max-w-4xl shadow-2xl">
        <div 
          className="cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-xl font-bold tracking-tight">88mph Labs</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
          <button onClick={() => scrollTo("como-funciona")} className="hover:text-foreground transition-colors">
            Cómo Funciona
          </button>
          <button onClick={() => scrollTo("faq")} className="hover:text-foreground transition-colors">
            FAQ
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => scrollTo("contacto")}
            className="hidden sm:block text-sm font-semibold hover:text-brand-blue transition-colors px-4 py-2 border border-border/50 rounded-full hover:bg-white/5"
          >
            Contacto
          </button>
          
          <button 
            onClick={() => scrollTo("configurador")}
            className="btn-primary text-sm py-2 px-5 whitespace-nowrap shadow-lg shadow-brand-blue/20"
          >
            Empezar Proyecto
          </button>
        </div>

      </div>
    </motion.nav>
  );
}
