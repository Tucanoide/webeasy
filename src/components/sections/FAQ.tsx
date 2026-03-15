"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Qué es una 'Interacción con el Equipo'?",
    answer: "Una interacción se define como una videollamada de 30 minutos o una ronda de feedback detallada enviada por email. Este modelo nos permite mantener costos bajos y una eficiencia máxima en el proceso de desarrollo.",
  },
  {
    question: "¿Puedo personalizar el diseño?",
    answer: "¡Por supuesto! Podés elegir entre nuestra galería de plantillas de alto rendimiento y nosotros personalizamos colores, tipografía y contenido para que se alineen perfectamente con tu marca.",
  },
  {
    question: "¿Qué pasa si necesito algo que no está en el catálogo?",
    answer: "No hay problema. Para proyectos 100% custom que requieran integraciones complejas o desarrollos desde cero, podemos coordinar una reunión inicial para cotizarte un proyecto a medida.",
  },
  {
    question: "¿Incluyen el dominio y el hosting?",
    answer: "Ofrecemos un paquete opcional de Hosting y Soporte Básico que incluye alojamiento en servidores optimizados. El dominio corre por cuenta del cliente, aunque podemos asesorarte en la compra.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="container px-6 mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Preguntas Frecuentes</h2>
          <p className="mt-4 text-muted">Todo lo que necesitás saber sobre nuestro modelo de trabajo.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className="bento-card p-0 overflow-hidden">
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors hover:bg-white/5"
                >
                  <span className={`font-semibold transition-colors ${isOpen ? 'text-brand-blue' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <Minus className="text-brand-blue" size={20} />
                  ) : (
                    <Plus className="text-muted" size={20} />
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
