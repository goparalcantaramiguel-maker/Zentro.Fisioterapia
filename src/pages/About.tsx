import { motion } from 'motion/react';
import { GraduationCap, Award, Heart, Quote } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Hola, soy el Dr. Miguel Alcántara.</h1>
            <p className="text-xl text-muted leading-relaxed mb-8">
              Mi misión es cambiar la forma en que las personas entienden y gestionan su dolor. Después de años viendo pacientes frustrados por tratamientos que no funcionaban a largo plazo, decidí fundar Zentro.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-8">
              No creo en las soluciones mágicas ni en las camillas que curan solas. Creo en el potencial del cuerpo humano para adaptarse y fortalecerse cuando se le dan los estímulos adecuados.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1"><GraduationCap size={20} /></div>
                <div>
                  <p className="font-bold text-sm">Formación</p>
                  <p className="text-xs text-muted">Grado en Fisioterapia, Máster en Dolor Crónico.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1"><Award size={20} /></div>
                <div>
                  <p className="font-bold text-sm">Especialidad</p>
                  <p className="text-xs text-muted">Neurociencia del dolor y ejercicio terapéutico.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1000" 
                alt="Miguel Alcántara - Fisioterapeuta" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl text-white max-w-xs shadow-xl">
              <Quote className="mb-4 opacity-50" size={32} />
              <p className="text-lg font-serif italic">"El dolor es una opinión del cerebro sobre la seguridad del cuerpo, no siempre un reflejo de daño real."</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-16">Mi Filosofía de Trabajo</h2>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0 font-bold">1</div>
              <div>
                <h3 className="text-2xl font-serif mb-4">Evidencia, no tradición</h3>
                <p className="text-muted leading-relaxed">Me mantengo en constante formación para aplicar lo que la ciencia demuestra que funciona hoy, no lo que se hacía hace 20 años por inercia.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0 font-bold">2</div>
              <div>
                <h3 className="text-2xl font-serif mb-4">Empoderamiento del paciente</h3>
                <p className="text-muted leading-relaxed">Mi éxito es que dejes de necesitarme. Te enseño a ser el experto en tu propio cuerpo y a gestionar tus síntomas de forma autónoma.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0 font-bold">3</div>
              <div>
                <h3 className="text-2xl font-serif mb-4">Escucha activa</h3>
                <p className="text-muted leading-relaxed">Cada persona es un mundo. Tu contexto social, laboral y emocional influye en tu dolor, y por eso mis sesiones duran lo que necesites para sentirte escuchado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
