"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...formData, type: 'general'})
      });
      
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };


  return (
    <section id="contacto" className="py-32 relative overflow-hidden bg-gradient-to-b from-transparent to-black/50">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* CONTENT COL */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Impulsemos tu <br/>
                <span className="text-brand-blue">Transformación Digital</span>
              </h2>
              <p className="text-lg text-muted mb-12 max-w-lg">
                ¿Tenés dudas sobre cómo empezar? Consultanos sin compromiso y diseñamos el roadmap perfecto para tu negocio.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase font-bold tracking-widest mb-0.5">Escribinos</p>
                    <p className="text-white font-medium">info@bedisruptive.io</p>

                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase font-bold tracking-widest mb-0.5">Ubicación</p>
                    <p className="text-white font-medium">Buenos Aires, Argentina (Global Sync)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-12">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <button key={i} className="p-3 bg-white/5 border border-white/10 rounded-full text-muted hover:text-white hover:border-white/20 transition-all">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* FORM COL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass relative p-8 md:p-10 rounded-3xl border-brand-blue/20 shadow-2xl overflow-hidden focus-within:border-brand-blue/40 transition-all"
          >
            {/* Background elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-emerald/5 rounded-full blur-3xl -z-10" />

            <h3 className="text-2xl font-bold text-white mb-2">Mensaje Directo</h3>
            <p className="text-sm text-muted mb-8">Completá este formulario y te responderemos en el día.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Nombre</label>
                <input 
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl bg-accent/20 border border-white/10 text-white focus:ring-2 focus:ring-brand-blue/50 outline-none transition-all focus:border-brand-blue/50"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Email</label>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl bg-accent/20 border border-white/10 text-white focus:ring-2 focus:ring-brand-blue/50 outline-none transition-all focus:border-brand-blue/50"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Mensaje</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl bg-accent/20 border border-white/10 text-white focus:ring-2 focus:ring-brand-blue/50 outline-none transition-all focus:border-brand-blue/50 resize-none h-32"
                  placeholder="¿Contanos sobre tu idea?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-5 rounded-xl flex items-center justify-center gap-3 font-bold shadow-xl shadow-brand-blue/30 disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : (
                  <>
                    Enviar Mensaje
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>

            {/* Success Overlay */}
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center p-8 text-center z-20 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-brand-emerald/20 text-brand-emerald rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">¡Mensaje Transmitido!</h4>
                <p className="text-muted mb-8">Nuestro equipo técnico ha recibido tu consulta. Nos pondremos en contacto a la brevedad.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-brand-blue font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
