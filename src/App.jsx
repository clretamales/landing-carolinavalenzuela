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
  Instagram,
  Linkedin,
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
    backText: 'Profundizamos en tus recursos internos para sostener cambios reales y duraderos.',
  },
  {
    icon: Users, /* CAMBIAR ÍCONO AQUÍ */
    title: 'Terapia de Pareja', /* EDITAR TÍTULO DE CARD AQUÍ */
    description: 'Comunicación y resolución de conflictos vinculares.', /* EDITAR DESCRIPCIÓN DE CARD AQUÍ */
    backText: 'Creamos un espacio seguro para reconstruir acuerdos y fortalecer el vínculo afectivo.',
  },
  {
    icon: Globe, /* CAMBIAR ÍCONO AQUÍ */
    title: 'Adolescentes', /* EDITAR TÍTULO DE CARD AQUÍ */
    description: 'Acompañamiento en etapas críticas de desarrollo.', /* EDITAR DESCRIPCIÓN DE CARD AQUÍ */
    backText: 'Acompañamiento respetuoso para potenciar identidad, regulación emocional y confianza.',
  },
  {
    icon: Star, /* CAMBIAR ÍCONO AQUÍ */
    title: 'Sesiones Online', /* EDITAR TÍTULO DE CARD AQUÍ */
    description: 'Flexibilidad total desde la comodidad de tu hogar.', /* EDITAR DESCRIPCIÓN DE CARD AQUÍ */
    backText: 'Un proceso terapéutico cercano y profesional, adaptado a tu ritmo y disponibilidad.',
  },
]

const servicesLinkText = 'SABER MÁS' /* CAMBIAR TEXTO DEL LINK AQUÍ */

const whatsappNumber = '+56912345678' /* EDITAR NÚMERO DE WHATSAPP AQUÍ */
const whatsappMessage = 'Hola%20Carolina,%20quiero%20coordinar%20mi%20primera%20sesión.' /* EDITAR MENSAJE INICIAL DE WHATSAPP AQUÍ */
const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}` /* CAMBIAR LINK DE CTA AQUÍ */

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
  const [flippedCards, setFlippedCards] = useState({})

  const toggleServiceCard = (index, value) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: typeof value === 'boolean' ? value : !prev[index],
    }))
  }

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
        {/* AJUSTAR BLUR DEL NAVBAR AQUÍ */}
        {/* AJUSTAR COLOR DE FONDO AQUÍ */}
        <header className="fixed inset-x-0 top-0 z-50 px-4">
          <nav
            className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-3xl border px-6 py-4 shadow-md backdrop-blur-md transition-all duration-500 ${
              isDark
                ? 'bg-slate-900/80 border-white/20 text-teal-100'
                : 'bg-white/80 border-teal-100/60 text-teal-900'
            } ${isScrolled ? 'shadow-lg bg-white/90 dark:bg-slate-900/90' : ''}`}
          >
            {/* AJUSTAR SOMBRA AQUÍ */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/90 border border-teal-200 flex items-center justify-center shadow">
                <span className="font-serif text-xl tracking-tight text-teal-700">CV</span>
              </div>
              <p className="font-serif text-xl tracking-wide">
                {/* CAMBIAR NOMBRE DEL MENÚ AQUÍ */}
                Carolina Valenzuela
              </p>
            </div>
            <div className="hidden items-center gap-5 text-sm md:flex">
              {/* CAMBIAR LINKS DEL NAVBAR AQUÍ */}
              {/* AJUSTAR TIPOGRAFÍA DEL NAVBAR AQUÍ */}
              {/* CAMBIAR TRACKING AQUÍ */}
              {/* AJUSTAR CONTRASTE TEXTO AQUÍ */}
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors text-teal-900 hover:text-teal-900 dark:text-teal-100 dark:hover:text-white font-medium tracking-normal"
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
              {/* AJUSTAR TIPOGRAFÍA DE BOTONES AQUÍ */}
              <a
                href="#contacto"
                className="rounded-full bg-teal-600 px-5 py-2.5 text-xs font-bold tracking-normal text-white shadow-lg shadow-teal-600/30 transition hover:-translate-y-0.5"
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
                {/* AJUSTAR TIPOGRAFÍA DEL BADGE AQUÍ */}
                {/* CAMBIAR TRACKING DEL BADGE AQUÍ */}
                {/* AJUSTAR MAYÚSCULAS / MINÚSCULAS AQUÍ */}
                {/* AJUSTAR ALINEACIÓN ÍCONO / TEXTO AQUÍ */}
                {/* AJUSTAR ESTILO VISUAL DEL BADGE AQUÍ */}
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/60 px-4 py-1 text-[11px] uppercase tracking-normal text-teal-700 shadow-sm dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-100">
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
                  {/* CONTROLAR MAYÚSCULAS / MINÚSCULAS AQUÍ */}
                  <motion.a
                    href="#contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-700 text-white font-semibold tracking-normal shadow-lg shadow-teal-700/30 transition-transform hover:-translate-y-0.5" /* CAMBIAR TRACKING AQUÍ */
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
                  className="group flex transform flex-col items-center gap-4 rounded-3xl border border-teal-100 bg-emerald-50/50 p-6 text-center shadow-[0_15px_30px_rgba(15,118,110,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-teal-200/90 hover:bg-gradient-to-br hover:from-teal-50 hover:to-white dark:border-white/10 dark:bg-slate-900/50 dark:shadow-[0_15px_35px_rgba(2,63,67,0.45)] dark:hover:border-teal-400/30 dark:hover:from-slate-800 dark:hover:to-slate-900"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-teal-100 bg-teal-50 text-teal-600 transition-all duration-500 group-hover:bg-teal-100 dark:border-slate-700 dark:bg-slate-800 dark:text-teal-300 dark:group-hover:bg-slate-700">
                    <card.icon size={20} className="transition-colors duration-500 group-hover:text-teal-700 dark:group-hover:text-teal-200" />
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
              {serviceCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative min-h-[360px]"
                  style={{ perspective: '1200px' }}
                >
                  <div
                    className="relative h-full min-h-[360px] w-full transform-gpu transition-all duration-500 hover:-translate-y-2"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    <div
                      className="absolute inset-0 flex min-h-[360px] flex-col rounded-[40px] border border-teal-100 bg-white/90 p-6 text-center shadow-[0_20px_50px_rgba(15,118,110,0.08)] transition-all duration-500 hover:shadow-2xl hover:bg-gradient-to-br hover:from-teal-50 hover:to-white dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_25px_60px_rgba(2,63,67,0.45)] dark:hover:from-slate-800 dark:hover:to-slate-900"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600 shadow-inner transition-all duration-500 group-hover:bg-teal-100 group-hover:text-teal-700 dark:bg-slate-800 dark:text-teal-300 dark:group-hover:bg-slate-700 dark:group-hover:text-teal-200">
                        <card.icon size={24} />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-teal-900 dark:text-teal-100">{card.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-teal-900/70 dark:text-teal-100/70">{card.description}</p>
                      <button
                        type="button"
                        onClick={() => toggleServiceCard(index, true)}
                        className="mt-auto inline-flex items-center justify-center gap-1 pt-6 text-xs font-bold uppercase tracking-[0.35em] text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-200"
                        aria-label={`Ver mas sobre ${card.title}`}
                      >
                        <span>{servicesLinkText}</span>
                        {/* CAMBIAR TEXTO DEL LINK AQUÍ */}
                        <ChevronRight size={16} />
                      </button>
                    </div>

                    <div
                      className="absolute inset-0 flex min-h-[360px] flex-col rounded-[40px] border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 text-center shadow-[0_20px_50px_rgba(15,118,110,0.1)] transition-all duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 dark:shadow-[0_25px_60px_rgba(2,63,67,0.45)]"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <h3 className="mt-2 text-xl font-semibold text-teal-900 dark:text-teal-100">{card.title}</h3>
                      <p className="mt-6 text-sm leading-relaxed text-teal-900/80 dark:text-teal-100/80">{card.backText}</p>
                      <button
                        type="button"
                        onClick={() => toggleServiceCard(index, false)}
                        className="mt-auto inline-flex items-center justify-center rounded-full border border-teal-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 transition-all duration-300 hover:bg-teal-100 dark:border-slate-600 dark:text-teal-200 dark:hover:bg-slate-700"
                        aria-label={`Volver a la vista frontal de ${card.title}`}
                      >
                        Volver
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-teal-700/95 to-teal-900/95 px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-20 shadow-[0_25px_80px_rgba(15,118,110,0.45)]">
            <div className="absolute -right-10 top-[-20px] h-32 w-32 rounded-full bg-white/10 blur-[80px]" />
            <div className="absolute left-[-10%] bottom-[-30px] h-56 w-56 rounded-[52%] bg-white/5 blur-[110px]" />
            {/* AJUSTAR FORMAS DECORATIVAS AQUÍ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-4xl text-center space-y-6"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-teal-200">¿Listo para iniciar?</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white">
                {/* CAMBIAR TEXTO PRINCIPAL DE CTA AQUÍ */}
                El proceso terapéutico es un viaje hacia tu interior, donde cada paso cuenta para reconstruir tu bienestar.
              </h2>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                {/* AJUSTAR TIPOGRAFÍA DE BOTONES AQUÍ */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold tracking-normal text-teal-900 shadow-lg shadow-teal-900/40 transition hover:-translate-y-0.5" /* CAMBIAR TRACKING AQUÍ */
                >
                  {/* CAMBIAR TEXTO DEL BOTÓN AQUÍ */}
                  Agenda tu primera sesión
                </a>
                <p className="max-w-xl text-sm text-white/80">
                  {/* CAMBIAR LINK DE CTA AQUÍ */}
                  Conecta directamente por WhatsApp y coordinemos un espacio que se adapte a tu tiempo y ritmo.
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-teal-200/70">
                {/* EDITAR NÚMERO DE WHATSAPP AQUÍ */}
                {whatsappNumber}
              </p>
            </motion.div>
            {/* AJUSTAR COLORES DE LA CTA AQUÍ */}
            {/* AJUSTAR PADDING / BORDES / SOMBRAS AQUÍ */}
          </section>

          <footer id="contacto" className="border-t border-teal-100 pt-12 pb-8">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4 mb-10">
                <div className="xl:col-span-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                      CV
                    </div>
                    <h3 className="text-xl font-serif text-teal-900 dark:text-teal-100">
                      {/* CAMBIAR NOMBRE PRINCIPAL DEL FOOTER AQUÍ */}
                      Carolina Valenzuela
                    </h3>
                  </div>

                  {/* EDITAR TEXTO DESCRIPTIVO AQUÍ */}
                  <p className="text-sm text-teal-900/70 dark:text-teal-100/70 max-w-md">
                    Brindando apoyo psicológico profesional para ayudarte a navegar los desafíos de la vida con resiliencia y claridad mental.
                  </p>

                  {/* EDITAR REDES SOCIALES AQUÍ */}
                  <div className="flex gap-3">
  <a
    href="#"
    className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white hover:-translate-y-0.5 shadow-sm"
  >
    <Instagram size={20} />
  </a>

  <a
    href="#"
    className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white hover:-translate-y-0.5 shadow-sm"
  >
    <Linkedin size={20} />
  </a>

  <a
    href="#"
    className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white hover:-translate-y-0.5 shadow-sm"
  >
    <Mail size={20} />
  </a>
</div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.25em] text-teal-500 font-semibold">
                    Contacto
                  </h4>

                  {/* EDITAR DATOS DE CONTACTO AQUÍ */}
                  <div className="space-y-3 text-sm text-teal-900/80 dark:text-teal-100/80">
                    <p>WhatsApp: +56 9 1234 5678</p>
                    <p>contacto@carolinavalenzuela.cl</p>
                    <p>Lun - Vie · 09:00 - 19:00</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.25em] text-teal-500 font-semibold">
                    Ubicación
                  </h4>

                  {/* EDITAR DIRECCIÓN AQUÍ */}
                  <div className="space-y-2 text-sm text-teal-900/80 dark:text-teal-100/80">
                    <p>
                      Edificio Centro Médico, Of. 402
                      <br />
                      Las Condes, Santiago de Chile.
                    </p>
                  </div>

                  {/* CAMBIAR LINK DE MAPA AQUÍ */}
                  <a href="#" className="text-sm font-semibold text-teal-600 underline">
                    Ver en Mapa
                  </a>
                </div>
              </div>

              <div className="border-t border-teal-100 pt-6 flex flex-col gap-4 text-xs text-teal-500 md:flex-row md:items-center md:justify-between">
                <p>
                  {/* CAMBIAR TEXTO LEGAL AQUÍ */}
                  © {new Date().getFullYear()} Carolina Valenzuela — Psicología & Bienestar
                </p>

                {/* EDITAR LINKS LEGALES AQUÍ */}
                <div className="flex gap-6">
                  <a href="#">Privacidad</a>
                  <a href="#">Términos</a>
                </div>
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
