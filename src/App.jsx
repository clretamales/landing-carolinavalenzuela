import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Leaf,
  Heart,
  MessageCircle,
  Calendar,
  Mail,
  Coffee,
  CheckCircle2,
  Flower2,
  Users,
  Globe,
  Star,
  ChevronRight,
  Sun,
  Moon,
} from 'lucide-react'

const WireframeSphere = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 260 260"
    role="presentation"
    aria-hidden="true"
  >
    <circle
      cx="130"
      cy="130"
      r="124"
      className="stroke-current text-teal-200/60"
      fill="none"
      strokeWidth="2"
      strokeDasharray="4 6"
    />
    <circle
      cx="130"
      cy="130"
      r="90"
      className="stroke-current text-teal-200/40"
      fill="none"
      strokeWidth="1"
    />
    <path
      className="stroke-current text-teal-300/40"
      d="M10 130h240M130 10v240M40 40l180 180M40 220l180-180"
      strokeWidth="1"
      strokeDasharray="6 8"
      fill="none"
    />
  </svg>
)

const navLinks = [
  /* CAMBIAR LINKS DEL NAVBAR AQUÍ */
  { label: 'Inicio', href: '#inicio' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

const therapeuticCards = [
  /* DUPLICAR ESTE OBJETO PARA AGREGAR OTRA CARD */
  {
    icon: Coffee, /* CAMBIAR ICONOS AQUÍ */
    title: 'Cercanía',
    description: 'Un ambiente seguro donde puedes ser tú mismo sin juicios.', /* EDITAR TEXTO DE CARD AQUÍ */
  },
  {
    icon: Leaf, /* CAMBIAR ICONOS AQUÍ */
    title: 'Cuidado',
    description: 'Herramientas personalizadas para tu crecimiento emocional.', /* EDITAR TEXTO DE CARD AQUÍ */
  },
  {
    icon: CheckCircle2, /* CAMBIAR ICONOS AQUÍ */
    title: 'Rigor',
    description: 'Basado en metodologías clínicas validadas.', /* EDITAR TEXTO DE CARD AQUÍ */
  },
]

const serviceCards = [
  /* DUPLICAR ESTE OBJETO PARA AGREGAR OTRA CARD */
  {
    icon: Flower2, /* CAMBIAR ÍCONO AQUÍ */
    title: 'Terapia Individual', /* EDITAR TÍTULO DE CARD AQUÍ */
    description: 'Procesos de autoconocimiento y manejo de ansiedad.', /* EDITAR DESCRIPCIÓN DE CARD AQUÍ */
  },
  {
    icon: Users, /* CAMBIAR ÍCONO AQUÍ */
    title: 'Terapia de Pareja', /* EDITAR TÍTULO DE CARD AQUÍ */
    description: 'Comunicación y resolución de conflictos vinculares.', /* EDITAR DESCRIPCIÓN DE CARD AQUÍ */
  },
  {
    icon: Globe, /* CAMBIAR ÍCONO AQUÍ */
    title: 'Adolescentes', /* EDITAR TÍTULO DE CARD AQUÍ */
    description: 'Acompañamiento en etapas críticas de desarrollo.', /* EDITAR DESCRIPCIÓN DE CARD AQUÍ */
  },
  {
    icon: Star, /* CAMBIAR ÍCONO AQUÍ */
    title: 'Sesiones Online', /* EDITAR TÍTULO DE CARD AQUÍ */
    description: 'Flexibilidad total desde la comodidad de tu hogar.', /* EDITAR DESCRIPCIÓN DE CARD AQUÍ */
  },
]

const servicesLinkText = 'SABER MÁS' /* CAMBIAR TEXTO DEL LINK AQUÍ */

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const heroEntrance = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}
/* AJUSTAR TRANSICIONES DEL HERO AQUÍ */

const heroButtonFloat = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}
/* AJUSTAR VELOCIDAD / DISTANCIA / LOOP AQUÍ */

const SectionHeader = ({ subtitle, title }) => (
  <div className="w-full text-center">
    <p className="text-xs uppercase tracking-[0.4em] text-teal-500 font-semibold">
      {subtitle}
      {/* CAMBIAR SUBTÍTULO DE SECCIÓN AQUÍ */}
    </p>
    <h2 className="mt-3 text-3xl font-serif text-teal-900 dark:text-teal-100">
      {title}
      {/* CAMBIAR TÍTULO PRINCIPAL AQUÍ */}
    </h2>
    <div className="mx-auto mt-4 h-px w-20 bg-teal-200 dark:bg-teal-400" />
  </div>
)

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  /* NAVBAR STICKY AQUÍ */

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? 'dark bg-slate-950 text-teal-100'
          : 'bg-gradient-to-b from-emerald-50 via-white to-teal-50 text-teal-950'
      }`}
    >
      {/* AJUSTAR COLORES DEL DARK MODE AQUÍ */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-teal-200/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-200/40 blur-[120px]" />
        </div>

        {/* NAVBAR FIJO AQUÍ */}
        {/* AJUSTAR BLUR AQUÍ */}
        {/* AJUSTAR TRANSPARENCIA NAVBAR AQUÍ */}
        {/* CAMBIAR COLOR BASE NAVBAR AQUÍ */}
        <header className="fixed inset-x-0 top-0 z-50 px-4">
          <nav
            className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-3xl border px-6 py-4 shadow-lg backdrop-blur-[30px] transition-all duration-500 ${
              isDark
                ? 'bg-slate-900/40 border-slate-800/40 text-teal-100'
                : 'bg-teal-50/50 border-white/40 text-teal-900'
            } ${isScrolled ? 'shadow-[0_30px_50px_rgba(4,78,67,0.45)] dark:shadow-[0_30px_50px_rgba(2,63,67,0.65)] bg-white/30 dark:bg-slate-900/60' : ''}`}
          >
            {/* AJUSTAR ALTURA DEL NAVBAR AQUÍ */}
            {/* AJUSTAR SOMBRA O FONDO DEL NAVBAR EN SCROLL AQUÍ */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/90 border border-teal-200 flex items-center justify-center shadow">
                <span className="font-serif text-xl tracking-tight text-teal-700">CV</span>
              </div>
              <p className="font-serif text-xl tracking-wide">
                {/* CAMBIAR NOMBRE DEL MENÚ AQUÍ */}
                Carolina Valenzuela
              </p>
            </div>
            <div className="hidden items-center gap-6 text-sm uppercase tracking-[0.3em] md:flex">
              {/* CAMBIAR LINKS DEL NAVBAR AQUÍ */}
              {/* AJUSTAR CONTRASTE TEXTO AQUÍ */}
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors text-teal-900 hover:text-teal-900 dark:text-teal-100 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* AJUSTES RESPONSIVE DEL NAVBAR AQUÍ */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDark((prev) => !prev)}
                className="rounded-full border border-teal-200/60 bg-white/60 p-2 shadow-sm transition hover:scale-105 dark:border-slate-700 dark:bg-slate-900/60"
                aria-label="Cambiar modo de color"
              >
                {/* TOGGLE DE MODO OSCURO AQUÍ */}
                {isDark ? <Sun size={18} className="text-teal-500" /> : <Moon size={18} className="text-teal-500" />}
              </button>
              <a
                href="#contacto"
                className="rounded-full bg-teal-600 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.4em] text-white shadow-lg shadow-teal-600/30 transition hover:-translate-y-0.5"
              >
                {/* CAMBIAR TEXTO DEL BOTÓN PRINCIPAL AQUÍ */}
                Reservar Hora
              </a>
            </div>
          </nav>
          {/* DESACTIVAR EFECTO GLASS AQUÍ */}
        </header>

        <main className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-[140px] space-y-20">
          {/* AJUSTAR OFFSET SUPERIOR DEL CONTENIDO AQUÍ */}
          <section
            id="inicio"
            className="pt-10 relative overflow-hidden flex items-center min-h-[650px]"
          >
            <WireframeSphere className="absolute -z-10 right-[-5%] top-12 h-[320px] w-[320px] text-teal-200/50" />
            <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
              {/* AJUSTAR LAYOUT DEL HERO AQUÍ */}
              <motion.div
                initial={heroEntrance.initial}
                animate={heroEntrance.animate}
                className="space-y-6"
              >
                {/* DESACTIVAR ANIMACIONES AQUÍ */}
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/60 px-4 py-1 text-[11px] uppercase tracking-[0.5em] text-teal-700 shadow-sm dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-100">
                  {/* CAMBIAR ÍCONO DEL BADGE AQUÍ */}
                  <Sparkles size={14} />
                  {/* CAMBIAR TEXTO DEL BADGE AQUÍ */}
                  PSICÓLOGA CLÍNICA
                  {/* AJUSTAR ESTILOS DEL BADGE AQUÍ */}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-teal-900 dark:text-teal-100">
                  Un espacio cálido y experto para cuidar tu salud emocional.{' '}
                  <span className="italic text-teal-600 dark:text-teal-200">para que vuelvas a sentirte pleno.</span>
                </h1>
                <p className="text-lg text-teal-900/80 max-w-2xl dark:text-teal-100/80">
                  Trabajo con adultos y familias desde una mirada integradora: respeto por tus tiempos,
                  acompañamiento con evidencia científica y énfasis en que cada sesión sea reparadora.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="#contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-700 text-white font-semibold shadow-lg shadow-teal-700/30 transition-transform hover:-translate-y-0.5"
                    initial={{ y: 0 }}
                    animate={heroButtonFloat.animate}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* ANIMACIÓN DEL BOTÓN PRINCIPAL AQUÍ */}
                    Agenda una sesión
                    <span aria-hidden="true">↗</span>
                  </motion.a>
                  <a
                    className="px-6 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:border-teal-400 transition"
                    href="#enfoque"
                  >
                    Conoce el enfoque
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className="relative flex justify-end"
              >
                <div className="relative overflow-visible">
                  <div className="w-[320px] lg:w-[360px] h-[520px] rounded-[56px] border-8 border-white bg-white shadow-[0_25px_60px_rgba(4,78,67,0.35)] overflow-hidden dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-[0_25px_60px_rgba(2,63,67,0.55)]">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                      alt="Terapia con acompañamiento humano"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* CENTRADO DE LA TARJETA FLOTANTE AQUÍ */}
                  {/* AJUSTAR POSICIÓN VERTICAL DE LA TARJETA AQUÍ */}
                  {/* AJUSTES RESPONSIVE TABLET / MOBILE AQUÍ */}
                  <motion.div
                    className="absolute left-4 bottom-[6px] w-[220px] border border-teal-100 bg-white rounded-3xl shadow-lg shadow-teal-900/10 p-5 flex items-center gap-3 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_15px_35px_rgba(2,63,67,0.45)] md:left-6 md:bottom-[4px] lg:left-8 lg:bottom-[-8px]"
                    animate={{
                      y: [0, 18, 6, 0],
                      /* AJUSTAR ANIMACIÓN EXISTENTE AQUÍ */
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    /* AJUSTAR DISTANCIA Y VELOCIDAD DE LA ANIMACIÓN AQUÍ */
                  >
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                      <Heart size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-teal-500 font-semibold">
                        Atención Integral
                      </p>
                      <p className="text-sm text-teal-900/80 dark:text-teal-100/80">Presencial y online</p>
                    </div>
                    {/* DESACTIVAR ANIMACIÓN AQUÍ */}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          <section
            id="enfoque"
            className="py-24 bg-white/80 rounded-[40px] shadow-[0_20px_60px_rgba(15,118,110,0.07)] relative overflow-hidden dark:bg-slate-900/80 dark:shadow-[0_25px_70px_rgba(2,63,67,0.6)]"
          >
            {/* AJUSTAR PADDING, COLORES O SOMBRAS DE ESTA SECCIÓN AQUÍ */}
            <SectionHeader subtitle="Metodología" title="Bienestar desde la ciencia y la empatía" />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {therapeuticCards.map((card) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl border border-teal-100 bg-emerald-50/50 p-6 shadow-[0_15px_30px_rgba(15,118,110,0.08)] flex flex-col gap-4 dark:border-white/10 dark:bg-slate-900/50 dark:shadow-[0_15px_35px_rgba(2,63,67,0.45)]"
                >
                  <div className="h-12 w-12 rounded-2xl bg-white/90 border border-teal-100 grid place-items-center text-teal-600">
                    <card.icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100">{card.title}</h3>
                  <p className="text-sm text-teal-900/80 leading-relaxed dark:text-teal-100/80">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <section
            id="servicios"
            className="py-24" /* AJUSTAR COLORES, PADDING O SOMBRA DE ESTA SECCIÓN AQUÍ */
          >
            {/* CAMBIAR SUBTÍTULO DE SERVICIOS AQUÍ */}
            {/* CAMBIAR TÍTULO PRINCIPAL DE SERVICIOS AQUÍ */}
            <SectionHeader subtitle="Especialidades" title="Acompañamiento a tu medida" />
            <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((card) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-[40px] border border-teal-100 bg-white/90 p-6 shadow-[0_20px_50px_rgba(15,118,110,0.08)] flex flex-col gap-6 min-h-[260px] dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_25px_60px_rgba(2,63,67,0.45)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-teal-50 grid place-items-center text-teal-600 shadow-inner">
                      {/* CAMBIAR ÍCONO AQUÍ */}
                      <card.icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100">{card.title}</h3>
                  </div>
                  <p className="text-sm text-teal-900/70 leading-relaxed dark:text-teal-100/70">{card.description}</p>
                  <div className="mt-auto flex items-center gap-1 text-xs uppercase tracking-[0.4em] text-teal-600 font-bold">
                    <span>{servicesLinkText}</span>
                    {/* CAMBIAR TEXTO DEL LINK AQUÍ */}
                    <ChevronRight size={16} />
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="space-y-8 bg-teal-900 text-white rounded-[36px] p-10 md:p-14 shadow-[0_25px_70px_rgba(4,78,67,0.45)]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-teal-200">¿Listo para iniciar?</p>
              <h2 className="text-3xl md:text-4xl font-serif">
                Reserva un espacio seguro para redescubrir tu bienestar.
              </h2>
            </motion.div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-white text-teal-900 font-bold px-8 py-3 shadow-lg shadow-teal-900/30 transition hover:-translate-y-0.5"
              >
                Agenda ahora
              </a>
              <p className="text-sm text-teal-100/70 max-w-2xl">
                Contáctame por WhatsApp o correo electrónico y coordinemos la primera sesión en la modalidad
                que te resulte más cómoda.
              </p>
            </div>
          </section>

          <footer
            id="contacto"
            className="border-t border-teal-100 pt-12 pb-8 flex flex-col gap-8 md:flex-row md:justify-between"
          >
            <div className="max-w-xl space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-teal-500 font-semibold">Contacto</p>
              <p className="text-3xl font-serif text-teal-900 dark:text-teal-100">Carolina Valenzuela</p>
              <p className="text-teal-900/70 dark:text-teal-100/70">
                Psicóloga clínica enfocada en generar terapias cálidas, privadas y basadas en evidencia.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-teal-900/80 dark:text-teal-100/80">
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-teal-600" />
                <span>WhatsApp: +56 9 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-teal-600" />
                <span>contacto@carolinavalenzuela.cl</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-teal-600" />
                <span>Lun - Vie · 09:00 - 19:00</span>
              </div>
            </div>
          </footer>

          <div className="text-[11px] uppercase tracking-[0.6em] text-teal-500 text-center pb-6">
            © {new Date().getFullYear()} Carolina Valenzuela · Clínica privada premium
          </div>
        </main>
      </div>
    </div>
  )
}
