"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useConfigurator } from "@/context/ConfiguratorContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { selectedBase, selectedAdicionales, totalOneTime, totalAnual } = useConfigurator();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      type: "project",
      configuration: {
        base: selectedBase?.titulo,
        adicionales: selectedAdicionales.map(a => a.titulo),
        totalOneTime,
        totalAnual
      }
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        alert("Ocurrió un error. Por favor envíanos un mail directo a info@bedisruptive.io");

      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión. Intentá escribiéndonos directamente.");
    } finally {
      setIsSubmitting(false);
    }
  };


  if (!isOpen && !isSuccess) return null;

  return (
    <AnimatePresence>
      {(isOpen || isSuccess) && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-muted hover:text-white hover:bg-white/5 rounded-full transition-all z-10"
            >
              <X size={20} />
            </button>

            {isSuccess ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-brand-emerald/10 text-brand-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">¡Solicitud Enviada!</h3>
                <p className="text-muted text-lg mb-8">
                  Recibimos tu configuración. Un experto de 88mph Labs revisará los detalles y te contactará en menos de 24 horas.
                </p>
                <button 
                  onClick={onClose}
                  className="btn-primary w-full py-4 text-lg"
                >
                  Volver al sitio
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row h-full">
                {/* Summary Sidebar */}
                <div className="w-full md:w-5/12 bg-accent/30 p-8 border-b md:border-b-0 md:border-r border-border">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-muted mb-6">Tu Configuración</h4>
                  
                  <div className="mb-8">
                    <p className="text-[10px] text-brand-blue font-bold uppercase mb-1">Base</p>
                    <p className="font-bold text-white">{selectedBase?.titulo}</p>
                  </div>

                  <div className="mb-8">
                    <p className="text-[10px] text-brand-blue font-bold uppercase mb-1">Adicionales</p>
                    <ul className="space-y-1">
                      {selectedAdicionales.map(a => (
                        <li key={a.id} className="text-sm text-muted flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-border rounded-full shrink-0" />
                          {a.titulo}
                        </li>
                      ))}
                      {selectedAdicionales.length === 0 && <li className="text-sm text-muted italic">Ninguno seleccionado</li>}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted">Desarrollo:</span>
                      <span className="font-bold text-white">USD {totalOneTime.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted">Anual:</span>
                      <span className="font-bold text-brand-emerald">USD {totalAnual.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Form Section */}
                <div className="w-full md:w-7/12 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Finalizá tu pedido</h3>
                  <p className="text-sm text-muted mb-8">Completá tus datos y nos pondremos en marcha.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-muted mb-1">Nombre Completo</label>
                      <input 
                        required 
                        name="name"
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                        placeholder="Juan Pérez" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted mb-1">Email de Trabajo</label>
                      <input 
                        required 
                        name="email"
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                        placeholder="juan@empresa.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted mb-1">Mensaje (Opcional)</label>
                      <textarea 
                        name="message"
                        className="w-full px-4 py-3 rounded-xl bg-accent/20 border border-border text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all resize-none h-24" 
                        placeholder="Contanos brevemente sobre tu negocio..."
                      ></textarea>
                    </div>

                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 mt-4 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? "Enviando..." : (
                        <>
                          Solicitar Presupuesto
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
