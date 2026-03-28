"use client";

import { useConfigurator } from "@/context/ConfiguratorContext";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Plus, X } from "lucide-react";

import { useState } from "react";
import { clsx } from "clsx";
import ContactModal from "./ContactModal";

export default function Configurator() {
  const {
    paquetesBase,
    adicionales,
    selectedBaseId,
    selectedAdicionalIds,
    setSelectedBaseId,
    toggleAdicional,
    totalOneTime,
    totalAnual,
    selectedBase,
  } = useConfigurator();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [detailsContent, setDetailsContent] = useState<string[]>([]);
  const [detailsTitle, setDetailsTitle] = useState("");

  const notIncluded = [
    "Implementación Live del Website",
    "Indexación Google",
    "Producción de imágenes/videos originales",
    "Hosting, costo de infraestructura y mantenimiento de website",
    "Costo de dominio / Certificado SSL",
    "Implementación Google Analytics",
    "Servicios SEO",
    "Costo plataformas, APIs, Plug-ins y servicios externos",
    "Integraciones"
  ];

  const handleOpenDetails = (paquete: any) => {
    setDetailsTitle(`Detalles: ${paquete.titulo}`);
    setDetailsContent(paquete.items);
    setIsDetailsOpen(true);
  };


  return (
    <section id="configurador" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Construí tu Proyecto
          </h2>
          <p className="mt-4 text-lg text-muted">
            Elegí tu base sólida y sumá las piezas que necesites.
          </p>
        </div>

        {/* STEP 1: BASE */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white bg-brand-blue rounded-full shadow-lg shadow-brand-blue/30">1</span>
            <h3 className="text-xl font-semibold">Elegí tu Paquete Base</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {paquetesBase.map((paquete) => (
              <motion.div
                key={paquete.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedBaseId(paquete.id)}
                className={clsx(
                  "bento-card cursor-pointer group relative flex flex-col justify-between",
                  selectedBaseId === paquete.id 
                    ? "border-brand-blue bg-brand-blue/5 shadow-[0_0_20px_rgba(59,130,246,0.15)]" 
                    : ""
                )}
              >
                {selectedBaseId === paquete.id && (
                  <div className="absolute top-4 right-4 bg-brand-blue text-white p-1 rounded-full">
                    <Check size={12} strokeWidth={4} />
                  </div>
                )}
                <div>
                  <h4 className="font-bold mb-2 group-hover:text-brand-blue transition-colors">{paquete.titulo}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">USD {paquete.precio}</span>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-muted">
                    {paquete.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-border rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenDetails(paquete);
                  }}
                  className="w-full btn-secondary text-xs uppercase tracking-wider py-2"
                >
                  Ver Detalles
                </button>

              </motion.div>
            ))}
          </div>
        </div>

        {/* STEP 2: POWER UPS */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white bg-brand-emerald rounded-full shadow-lg shadow-brand-emerald/30">2</span>
            <h3 className="text-xl font-semibold">Potenciá tu sitio (Power-ups)</h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {adicionales.map((adicional) => {
              const isSelected = selectedAdicionalIds.includes(adicional.id);
              return (
                <motion.div
                  key={adicional.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleAdicional(adicional.id)}
                  className={clsx(
                    "relative flex items-center p-4 cursor-pointer rounded-xl border transition-all duration-200 bg-card",
                    isSelected
                      ? "border-brand-emerald bg-brand-emerald/10 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                      : "border-border hover:border-muted"
                  )}
                >
                  <div className={clsx(
                    "flex items-center justify-center w-10 h-10 rounded-lg mr-4",
                    isSelected ? "bg-brand-emerald text-white" : "bg-accent text-muted"
                  )}>
                    {isSelected ? <Check size={20} /> : <Plus size={20} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{adicional.titulo}</h4>
                      {adicional.popular && (
                        <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider bg-brand-emerald/20 text-brand-emerald rounded uppercase">Popular</span>
                      )}
                    </div>
                    <p className="text-xs text-muted line-clamp-1">{adicional.descripcion}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">USD {adicional.precio}</div>
                    {adicional.recurrente && <div className="text-[10px] text-brand-emerald font-bold uppercase">{adicional.periodo}</div>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FLOATING SUMMARY BAR */}
      <AnimatePresence>
        {selectedBaseId && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            data-testid="summary-bar"
            className="fixed bottom-6 left-0 right-0 z-[110] px-6 pointer-events-none"
          >

            <div className="container mx-auto">
              <div className="glass rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto border-brand-blue/20">
                <div className="flex items-center gap-6">
                  <div className="hidden sm:block">
                    <p className="text-muted text-[10px] uppercase font-bold tracking-widest mb-1">Tu Selección</p>
                    <p className="font-medium">{selectedBase?.titulo}</p>
                  </div>
                  <div className="w-px h-10 bg-border hidden sm:block" />
                  <div>
                    <p className="text-muted text-[10px] uppercase font-bold tracking-widest mb-1">Total Desarrollo</p>
                    <p className="text-brand-blue text-2xl font-bold">USD {totalOneTime.toLocaleString()}</p>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div>
                    <p className="text-brand-emerald text-[10px] uppercase font-bold tracking-widest mb-1">Mantenimiento</p>
                    <p className="text-brand-emerald text-2xl font-bold">USD {totalAnual.toLocaleString()}<span className="text-sm font-normal text-muted">/año</span></p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary w-full md:w-auto px-10 py-4 flex items-center justify-center gap-2 group shadow-xl shadow-brand-blue/30"
                >
                  Continuar Solicitud
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <AnimatePresence>
        {isDetailsOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8"
            >
              <button 
                onClick={() => setIsDetailsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-2xl font-bold mb-6">{detailsTitle}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-blue mb-4">Lo que Incluye</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {detailsContent.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <Check size={16} className="text-brand-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-4">No Incluido</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {notIncluded.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted">
                        <X size={16} className="text-red-400/50 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => setIsDetailsOpen(false)}
                className="w-full mt-8 btn-primary py-3"
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

