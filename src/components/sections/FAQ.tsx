"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo lleva desarrollar un sitio web?",
    answer: "Depende del alcance del proyecto. Un sitio estándar (Home + 1 Seccion) puede demorar entre 2 y 4 semanas, mientras que desarrollos más complejos pueden requerir más tiempo.",
  },
  {
    question: "¿Cómo es nuestro proceso de trabajo?",
    answer: "Primero, coordinamos una reunión inicial para entender tu necesidad, analizar tu pedido y alinearnos con los objetivos del proyecto. Una vez iniciado el proyecto, te solicitamos información clave como contenidos, referencias visuales y lineamientos de marca. Con eso, iniciamos la etapa de diseño, donde definimos la estética, ajustamos el contenido y estructura del sitio. Luego pasamos a desarrollo, transformando el diseño en un sitio funcional. Durante el proceso, incluimos instancias de revisión para que puedas darnos feedback y asegurar que todo esté alineado con lo que necesitás. Finalmente, realizamos los ajustes necesarios, preparamos el sitio para su lanzamiento y te entregamos el proyecto listo para salir online.",
  },
  {
    question: "¿Qué son los Theme Templates de diseño y cómo se pueden modificar?",
    answer: "Son diseños base que utilizamos como punto de partida. Los adaptamos a la identidad visual de tu marca (colores, tipografías, contenido), manteniendo ciertas estructuras del diseño original para optimizar tiempos y costos.",
  },
  {
    question: "¿El sitio será responsive (mobile-friendly)?",
    answer: "Sí. Todos los sitios que desarrollamos están optimizados para verse correctamente en dispositivos móviles y desktop.",
  },
  {
    question: "¿Cuántas rondas de feedback están incluidas?",
    answer: "Incluimos 1 ó 2 ronda de feedback según el tipo de proyecto. Si necesitás más iteraciones, siempre podés sumar rondas extra con un costo adicional.",
  },
  {
    question: "¿Qué pasa si necesito un website diferente a las opciones ofrecidas?",
    answer: "Podemos desarrollar un sitio completamente a medida, adaptado a tus necesidades específicas. Contactanos y armamos una propuesta personalizada en base a tu requerimiento.",
  },
  {
    question: "¿Pueden incluir funcionalidades de eCommerce o pagos?",
    answer: "Sí. Podemos incorporar funcionalidades como carrito de compras, pagos online y gestión de productos. El alcance se define según el proyecto y se cotiza en base al esfuerzo requerido.",
  },
  {
    question: "¿Puedo editar el contenido del sitio después de su puesta online?",
    answer: "Sí, pero necesitas incluir un CMS para poder editar textos e imágenes fácilmente sin necesidad de conocimientos técnicos.",
  },
  {
    question: "¿Incluyen SEO?",
    answer: "Incluimos buenas prácticas básicas de SEO técnico (estructura, performance, metadata). Servicios de SEO avanzado pueden contratarse como adicional.",
  },
  {
    question: "¿Está incluida la puesta online, hosting o mantenimiento mensual del website?",
    answer: "No. Estos servicios no están incluidos por defecto y deben contratarse como adicionales.",
  },
  {
    question: "¿Ofrecen soporte después de la entrega del website?",
    answer: "Sí, ofrecemos planes de soporte y mantenimiento mensual a la medida de tus necesidades.",
  },
  {
    question: "¿Cuentan con garantía?",
    answer: "Sí, ofrecemos 30 días corridos de soporte sin cargo luego del lanzamiento del sitio, en caso de que algún ajuste sea necesario.",
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
