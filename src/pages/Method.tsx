import { motion } from 'motion/react';
import { ClipboardList, Lightbulb, Move, Activity, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Method() {
  const phases = [
    {
      icon: ClipboardList,
      title: "1. Evaluación Inicial",
      subtitle: "Escuchamos tu historia",
      desc: "No solo miramos una resonancia. Analizamos tu contexto, tus miedos, tus objetivos y cómo el dolor está afectando a tu vida diaria. Dedicamos tiempo a entender el origen real del problema."
    },
    {
      icon: Lightbulb,
      title: "2. Comprensión del Problema",
      subtitle: "Educación en neurociencia",
      desc: "Te explicamos de forma sencilla por qué te duele. Desmontamos mitos sobre el 'desgaste' o las 'hernias' para que entiendas que tu cuerpo es resiliente y capaz de adaptarse."
    },
    {
      icon: Move,
      title: "3. Trabajo con Movimiento",
      subtitle: "Reorganización motora",
      desc: "Empezamos a movernos en rangos seguros. Te ayudamos a perder el miedo a ciertas posturas y a redescubrir que el movimiento no tiene por qué ser una amenaza para tu cerebro."
    },
    {
      icon: Activity,
      title: "4. Ejercicio Terapéutico",
      subtitle: "Fortalecimiento progresivo",
      desc: "Diseñamos una dosis de ejercicio específica para ti. No son tablas genéricas, es un entrenamiento adaptado para mejorar tu capacidad de carga y tu resistencia al dolor."
    },
    {
      icon: TrendingUp,
      title: "5. Recuperación de Actividad",
      subtitle: "Vuelta a la vida real",
      desc: "El objetivo final es que dejes de necesitarnos. Te damos las herramientas para que seas autónomo y vuelvas a practicar tu deporte o hobby favorito con total seguridad."
    }
  ];

  return (
    <div className="pt-32">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Un proceso guiado, no una sesión aislada.</h1>
          <p className="text-xl text-muted leading-relaxed">
            En Zentro no creemos en el "ven, te tumbo y te trato". Creemos en un proceso activo donde tú eres el protagonista y nosotros tus guías hacia la recuperación.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <phase.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-serif mb-2">{phase.title}</h2>
                  <p className="text-primary font-bold uppercase tracking-widest text-xs mb-6">{phase.subtitle}</p>
                  <p className="text-lg text-muted leading-relaxed max-w-lg">
                    {phase.desc}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video rounded-3xl bg-secondary overflow-hidden shadow-inner flex items-center justify-center">
                    <span className="text-primary/20 font-serif text-9xl font-bold">{i + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-8">¿Por qué este método funciona?</h2>
          <p className="text-lg text-muted mb-12">
            Porque la ciencia nos dice que el dolor es una experiencia compleja. Tratar solo el músculo es como intentar arreglar un ordenador solo limpiando la pantalla. Nosotros trabajamos con el "software" (tu sistema nervioso) y el "hardware" (tus tejidos).
          </p>
          <Link to="/contacto" className="btn-primary inline-flex items-center gap-2">
            Empezar mi proceso <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
