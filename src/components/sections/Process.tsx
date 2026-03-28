"use client";

import { motion } from "framer-motion";
import { Search, Users, Layout, MessageSquare, Rocket } from "lucide-react";

const steps = [
  {
    title: "Elección de Web + Power Apps",
    description: "Configurá tu solución ideal en minutos eligiendo las funcionalidades que mejor se adapten a tu negocio.",
    icon: Search,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    title: "Reunión Inicial Virtual",
    description: "Alineamos visión, objetivos y requerimientos para definir una estrategia clara desde el inicio.",
    icon: Users,
    color: "text-brand-emerald",
    bg: "bg-brand-emerald/10",
  },
  {
    title: "Desarrollo del Website",
    description: "Diseñamos la estructura visual y desarrollamos tu sitio integrando las funcionalidades (Power Apps) que necesitás.",
    icon: Layout,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    title: "Reuniones de Ajuste",
    description: "Refinamos cada detalle junto a vos para asegurar un resultado alineado a tus expectativas.",
    icon: MessageSquare,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    title: "Live",
    description: "Publicamos tu sitio optimizado, con altos estándares de calidad y listo para crecer con tu negocio.",
    icon: Rocket,
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Proceso End-to-End
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Desde la idea hasta el lanzamiento en tiempo récord. Transparencia total en cada paso.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Connecting Line (Horizontal on Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 hidden lg:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div 
                  className={`w-16 h-16 rounded-full ${step.bg} ${step.color} flex items-center justify-center border border-white/5 shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                >
                  <step.icon size={32} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-background border border-border rounded-full text-[10px] font-bold flex items-center justify-center text-muted">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-blue transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
