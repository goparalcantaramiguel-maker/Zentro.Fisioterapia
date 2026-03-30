import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Activity, Brain, Heart, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
            alt="Fisioterapia avanzada" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Fisioterapia centrada en la persona
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-ink">
              Recupera la <span className="italic text-primary">confianza</span> en tu cuerpo.
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-10 max-w-lg">
              No solo tratamos tejidos. Te ayudamos a comprender tu dolor y a moverte sin miedo para que vuelvas a hacer lo que amas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto" className="btn-primary flex items-center justify-center gap-2">
                Reserva tu primera consulta <ArrowRight size={18} />
              </Link>
              <Link to="/metodo" className="btn-outline text-center">
                Nuestro método
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Paciente"
                  />
                ))}
              </div>
              <p className="text-sm text-muted">
                <span className="font-bold text-ink">+500 pacientes</span> han recuperado su calidad de vida con nosotros.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=1000" 
                alt="Ejercicio terapéutico" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-10 -left-10 z-20 glass-card p-8 rounded-2xl max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink">94%</p>
                  <p className="text-xs text-muted uppercase font-bold tracking-wider">Éxito en dolor crónico</p>
                </div>
              </div>
              <p className="text-sm text-muted italic">"Volví a correr después de 2 años de dolor lumbar persistente."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
            ¿Sientes que tu dolor te ha quitado el control de tu vida?
          </h2>
          <p className="text-lg text-muted mb-16">
            Muchos pacientes llegan a nosotros después de haber probado masajes, pastillas y reposo sin éxito. El dolor persistente no es solo un problema de "tejidos dañados", es un sistema de alarma que necesita ser recalibrado.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Miedo al movimiento", desc: "Evitas actividades por miedo a que el dolor empeore." },
              { title: "Diagnósticos confusos", desc: "Te han dicho que tienes 'desgaste' o 'hernias' y que no hay solución." },
              { title: "Tratamientos pasivos", desc: "Dependes de que alguien te 'arregle' cada semana." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-secondary/50 border border-secondary">
                <div className="text-primary mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR / PILARES */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Nuestro Enfoque</span>
              <h2 className="text-4xl md:text-6xl mb-6">Fisioterapia basada en la ciencia, no en el masaje.</h2>
            </div>
            <Link to="/metodo" className="btn-outline">Ver nuestro método completo</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "Educación en Dolor", desc: "Entender por qué duele es el primer paso para dejar de sufrir." },
              { icon: Activity, title: "Ejercicio Terapéutico", desc: "El movimiento es la medicina más potente para tu sistema nervioso." },
              { icon: Heart, title: "Recuperación Funcional", desc: "Objetivos reales: volver a cargar a tus hijos o subir escaleras." },
              { icon: Users, title: "Enfoque Humano", desc: "Escuchamos tu historia. Tú eres el protagonista de tu recuperación." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center mb-20">Historias de recuperación real</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Carlos R.",
                role: "Paciente con dolor lumbar",
                text: "Después de 3 años de médicos diciéndome que no cargara peso, en Zentro me enseñaron que mi espalda es fuerte. Hoy vuelvo a hacer CrossFit sin dolor.",
                img: "https://i.pravatar.cc/150?u=carlos"
              },
              {
                name: "Elena M.",
                role: "Fibromialgia y dolor persistente",
                text: "El cambio de mentalidad fue clave. Entender cómo funciona mi sistema de alarma me devolvió la libertad. Ya no vivo con miedo al brote.",
                img: "https://i.pravatar.cc/150?u=elena"
              },
              {
                name: "Javier S.",
                role: "Lesión deportiva recurrente",
                text: "No me 'crujieron' ni me pusieron máquinas. Me dieron herramientas para gestionar mi propia recuperación. Altamente profesional.",
                img: "https://i.pravatar.cc/150?u=javier"
              }
            ].map((t, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-accent text-6xl font-serif mb-4">“</div>
                <p className="text-lg text-ink italic mb-8 flex-grow leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-primary text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
            ¿Listo para volver a confiar en tu cuerpo?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            La primera consulta es el inicio de tu nueva etapa. Evaluaremos tu caso a fondo y diseñaremos un plan específico para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contacto" className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary transition-all">
              Reservar mi primera consulta
            </Link>
            <a href="https://wa.me/34600000000" className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} /> Hablar por WhatsApp
            </a>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </section>
    </div>
  );
}
