import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Menu, X, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Cómo trabajamos', path: '/metodo' },
    { name: 'Sobre mí', path: '/sobre-mi' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">ZENTRO</span>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted mt-1">Fisioterapia</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-ink'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
              Reservar Cita
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-lg font-medium border-b border-gray-100 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto" className="btn-primary text-center">
              Reservar Cita
            </Link>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-serif text-3xl font-bold tracking-tight">ZENTRO</span>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/60">Fisioterapia</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Especialistas en dolor persistente y recuperación funcional. Ayudamos a las personas a recuperar la confianza en su cuerpo a través del movimiento y la educación.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Navegación</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/metodo" className="hover:text-white transition-colors">Cómo trabajamos</Link></li>
              <li><Link to="/sobre-mi" className="hover:text-white transition-colors">Sobre mí</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Contacto</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <span>+34 600 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-accent" />
                <span>WhatsApp: +34 600 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">📍</span>
                <span>Calle Salud 123, Madrid</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Horario</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>Cerrado</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2026 Zentro Fisioterapia. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/34600000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
