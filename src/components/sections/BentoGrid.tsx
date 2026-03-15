"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Target, Cpu } from "lucide-react";

const features = [
  {
    title: "Rendimiento Extremo",
    description: "Sitios optimizados con Next.js logrando un puntaje de 98+ en Core Web Vitals. Velocidad que enamora a Google y a tus usuarios.",
    icon: Zap,
    className: "md:col-span-2",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10"
  },
  {
    title: "Transparencia Radical",
    description: "Sin presupuestos ocultos. Precios fijos y claros desde el primer segundo.",
    icon: Shield,
    className: "md:col-span-1",
    color: "text-brand-emerald",
    bg: "bg-brand-emerald/10"
  },
  {
    title: "Lanzamiento Express",
    description: "Procesos estandarizados que nos permiten entregar tu sitio web funcional en tiempo récord.",
    icon: Target,
    className: "md:col-span-1",
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    title: "Arquitectura Scalable",
    description: "Código limpio, modular y preparado para crecer junto con tu negocio, usando las últimas tecnologías del mercado.",
    icon: Cpu,
    className: "md:col-span-2",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Nuestra Propuesta de Valor
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Combinamos tecnología de punta con un modelo de negocio transparente para entregarte el mejor resultado posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bento-card flex flex-col justify-between group h-full ${feature.className}`}
            >
              <div className={`flex items-center justify-center w-12 h-12 mb-6 ${feature.bg} ${feature.color} rounded-xl border border-white/5 shadow-lg`}>
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-blue transition-colors">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
