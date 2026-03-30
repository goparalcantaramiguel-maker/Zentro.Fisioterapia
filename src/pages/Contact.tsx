import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Hablemos de tu recuperación.</h1>
            <p className="text-xl text-muted leading-relaxed mb-12">
              Estamos aquí para resolver tus dudas y ayudarte a dar el primer paso. Elige la forma que te sea más cómoda para contactarnos.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-wider">Llámanos</p>
                  <p className="text-xl font-medium">+34 600 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#25D366]">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-wider">WhatsApp Directo</p>
                  <p className="text-xl font-medium">+34 600 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-wider">Email</p>
                  <p className="text-xl font-medium">hola@zentrofisioterapia.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-wider">Ubicación</p>
                  <p className="text-xl font-medium">Calle Salud 123, Madrid</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-64 bg-gray-200 shadow-inner">
              {/* Placeholder for Map */}
              <div className="w-full h-full flex items-center justify-center text-muted italic">
                Mapa de Google Maps aquí
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send size={40} />
                </div>
                <h2 className="text-3xl font-serif mb-4">¡Mensaje enviado!</h2>
                <p className="text-muted">Te contactaremos en menos de 24 horas para confirmar tu cita.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-primary font-bold underline">Enviar otro mensaje</button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-serif mb-8">Reserva tu cita</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted">Nombre Completo</label>
                      <input required type="text" className="w-full bg-secondary border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted">Teléfono</label>
                      <input required type="tel" className="w-full bg-secondary border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all" placeholder="600 000 000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted">Email</label>
                    <input required type="email" className="w-full bg-secondary border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted">¿Qué te preocupa?</label>
                    <textarea required className="w-full bg-secondary border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all min-h-[120px]" placeholder="Cuéntanos brevemente tu caso..."></textarea>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" required className="rounded text-primary focus:ring-primary" id="privacy" />
                    <label htmlFor="privacy" className="text-xs text-muted">Acepto la política de privacidad y el tratamiento de mis datos de salud.</label>
                  </div>
                  <button type="submit" className="w-full btn-primary py-5 text-lg">
                    Enviar solicitud de reserva
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
