import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Leaf,
  Heart,
  MessageCircle,
  Calendar,
  Mail,
  Flower2,
  Users,
  Globe,
  Star,
  Brain,
  Zap,
  Compass,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Instagram,
  Linkedin,
} from 'lucide-react'
import fotoHero from './assets/images/fotoc.webp'

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
    icon: Brain, /* CAMBIAR ICONOS AQUÍ */
    title: 'Ansiedad',
    description: 'Trabajo con inquietud constante, preocupación excesiva y dificultad para relajarte.',
  },
  {
    icon: Zap, /* CAMBIAR ICONOS AQUÍ */
    title: 'Estrés',
    description: 'Encuentra respiraciones conscientes y límites claros para aliviar la carga diaria.',
  },
  {
    icon: Heart, /* CAMBIAR ICONOS AQUÍ */
    title: 'Desborde emocional',
    description: 'Recupera calma cuando las emociones se sienten abrumadoras y difíciles de contener.',
  },
  {
    icon: Sparkles,
    title: 'Autoestima',
    description: 'Fomenta la autocompasión, reconoce tus logros y valida tu valor personal.',
  },
  {
    icon: MessageCircle,
    title: 'Relaciones',
    description: 'Explora vínculos significativos para dialogar con claridad y empatía.',
  },
  {
    icon: Compass,
    title: 'Crisis personales',
    description: 'Acompañamiento profesional cuando necesitas orientarte en decisiones y cambios.',
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

const whatsappNumber = '+56995371195' /* EDITAR NÚMERO DE WHATSAPP AQUÍ */
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
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        return savedTheme === 'dark'
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  const [isScrolled, setIsScrolled] = useState(false)
  const [flippedCards, setFlippedCards] = useState({})
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const enfoqueScrollRef = useRef(null)
  const manualThemeChangeRef = useRef(false)

  const toggleServiceCard = (index, value) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: typeof value === 'boolean' ? value : !prev[index],
    }))
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
    setContactForm({
      name: '',
      phone: '',
      email: '',
      message: '',
    })
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent('Consulta desde sitio web')
    const body = encodeURIComponent(
      `Nombre: ${contactForm.name}\nTeléfono: ${contactForm.phone}\nEmail: ${contactForm.email}\nMensaje: ${contactForm.message}`,
    )

    window.location.href = `mailto:contacto@carolinavalenzuela.cl?subject=${subject}&body=${body}`
    closeContactModal()
  }

  const scrollEnfoque = (direction) => {
    const container = enfoqueScrollRef.current
    if (!container) return

    const cardWidth = 340
    const maxScroll = container.scrollWidth - container.clientWidth

    let newScroll = container.scrollLeft + direction * cardWidth

    if (newScroll >= maxScroll - 5) {
      // llegó al final → volver al inicio
      container.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    if (newScroll <= 0) {
      // llegó al inicio → ir al final
      container.scrollTo({ left: maxScroll, behavior: 'smooth' })
      return
    }

    container.scrollTo({ left: newScroll, behavior: 'smooth' })
  }

  const toggleTheme = () => {
    manualThemeChangeRef.current = true
    setIsDark((prev) => !prev)
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!manualThemeChangeRef.current) return

    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    manualThemeChangeRef.current = false
  }, [isDark])

  useEffect(() => {
    if (!isContactModalOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsContactModalOpen(false)
        setContactForm({
          name: '',
          phone: '',
          email: '',
          message: '',
        })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isContactModalOpen])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (event) => {
      const savedTheme = localStorage.getItem('theme')
      if (!savedTheme) {
        setIsDark(event.matches)
      }
    }

    media.addEventListener('change', handleChange)

    return () => media.removeEventListener('change', handleChange)
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
                  className="rounded-full px-3 py-2 font-medium tracking-normal text-teal-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-teal-50 hover:text-teal-700 hover:shadow-sm dark:text-teal-100 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* AJUSTES RESPONSIVE DEL NAVBAR AQUÍ */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
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
                  Un espacio seguro para comprender lo que te está pasando y {' '}
                  <span className="italic text-teal-600 dark:text-teal-200">avanzar a tu ritmo, con apoyo profesional.</span>
                </h1>
                <p className="text-lg text-teal-900/80 max-w-2xl dark:text-teal-100/80">
                  Acompaño procesos de ansiedad, estrés y dificultades emocionales desde un enfoque cercano, respetuoso y profesional.
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* CONTROLAR MAYÚSCULAS / MINÚSCULAS AQUÍ */}
                  <motion.a
                    href="#contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-700 text-white font-semibold tracking-normal shadow-lg shadow-teal-700/30 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-teal-700/40" /* CAMBIAR TRACKING AQUÍ */
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    {/* ANIMACIÓN DEL BOTÓN PRINCIPAL AQUÍ */}
                    Quiero agendar mi sesión
                    <span aria-hidden="true">↗</span>
                  </motion.a>
                  <motion.a
                    className="px-6 py-3 rounded-full border border-teal-200 bg-white/70 text-teal-700 font-semibold shadow-md shadow-teal-900/10 transition-all duration-300 ease-out hover:border-teal-400 hover:shadow-xl hover:shadow-teal-900/15 dark:border-teal-400/40 dark:bg-slate-900/40 dark:text-teal-100"
                    href="#enfoque"
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    Conoce el enfoque
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className="relative flex justify-center"
              >
                <div className="relative mx-auto w-full max-w-[460px] lg:w-[500px] lg:max-w-none">
                  <div className="h-[520px] w-full overflow-hidden rounded-[56px] border-8 border-white bg-white shadow-[0_25px_60px_rgba(4,78,67,0.35)] dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-[0_25px_60px_rgba(2,63,67,0.55)]">
                    <img
                      src={fotoHero}
                      alt="Psicoterapia presencial en Santiago - Carolina Valenzuela"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* CENTRADO DE LA TARJETA FLOTANTE AQUÍ */}
                  {/* AJUSTAR POSICIÓN VERTICAL DE LA TARJETA AQUÍ */}
                  {/* AJUSTES RESPONSIVE TABLET / MOBILE AQUÍ */}
                  <motion.div
                    className="group absolute bottom-0 left-4 sm:left-6 lg:left-8 z-10 flex w-[min(240px,calc(100%-2rem))] items-center gap-4 rounded-3xl border border-teal-100 bg-white/95 px-4 py-3 shadow-lg shadow-teal-900/10 transition-all duration-300 ease-out hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_15px_35px_rgba(2,63,67,0.45)] dark:hover:bg-slate-900"
                    animate={{
                      y: [-6, 8, -6],
                      /* AJUSTAR ANIMACIÓN EXISTENTE AQUÍ */
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'easeInOut',
                    }}
                    /* AJUSTAR DISTANCIA Y VELOCIDAD DE LA ANIMACIÓN AQUÍ */
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                        <Heart size={18} />
                      </div>
                      <div className="space-y-0.3">
                        <p className="text-[13px] font-extrabold uppercase tracking-[0.04em] text-teal-500 transition-all duration-300 group-hover:text-teal-600">
                          Atención Integral
                        </p>
                        <p className="text-sm leading-tight text-teal-900/80 dark:text-teal-100/80">Presencial y online</p>
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
            <SectionHeader subtitle="Enfoque" title="Te puedo acompañar si estás pasando por…" />
            <div className="relative mt-12 overflow-hidden px-10 sm:px-12 lg:px-14">
              <button
                type="button"
                onClick={() => scrollEnfoque(-1)}
                className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-teal-100 bg-white/90 p-3 text-teal-700 shadow-lg shadow-teal-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-teal-800 hover:shadow-xl dark:border-white/10 dark:bg-slate-950/90 dark:text-teal-200 dark:hover:bg-slate-900"
                aria-label="Desplazar enfoque hacia la izquierda"
              >
                <ChevronLeft size={20} />
              </button>

              <div
                ref={enfoqueScrollRef}
                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {therapeuticCards.map((card) => (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group flex min-h-[180px] w-[315px] min-w-[315px] snap-start flex-none flex-col items-center gap-4 rounded-3xl border border-teal-100 bg-emerald-50/50 p-6 text-center shadow-[0_15px_30px_rgba(15,118,110,0.08)] transition-all duration-300 ease-out hover:shadow-xl hover:border-teal-200/90 hover:bg-gradient-to-br hover:from-teal-50 hover:to-white dark:border-white/10 dark:bg-slate-900/50 dark:shadow-[0_15px_35px_rgba(2,63,67,0.45)] dark:hover:border-teal-400/30 dark:hover:from-slate-800 dark:hover:to-slate-900"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-teal-100 bg-teal-50 text-teal-600 transition-all duration-500 group-hover:bg-teal-100 dark:border-slate-700 dark:bg-slate-800 dark:text-teal-300 dark:group-hover:bg-slate-700">
                      <card.icon size={20} className="transition-colors duration-500 group-hover:text-teal-700 dark:group-hover:text-teal-200" />
                    </div>
                    <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100">{card.title}</h3>
                    <p className="mx-auto max-w-[240px] text-sm text-teal-900/80 leading-relaxed dark:text-teal-100/80">
                      {card.description}
                    </p>
                  </motion.article>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollEnfoque(1)}
                className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-teal-100 bg-white/90 p-3 text-teal-700 shadow-lg shadow-teal-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-teal-800 hover:shadow-xl dark:border-white/10 dark:bg-slate-950/90 dark:text-teal-200 dark:hover:bg-slate-900"
                aria-label="Desplazar enfoque hacia la derecha"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </section>

          <section
            id="servicios"
            className="py-24" /* AJUSTAR COLORES, PADDING O SOMBRA DE ESTA SECCIÓN AQUÍ */
          >
            {/* CAMBIAR SUBTÍTULO DE SERVICIOS AQUÍ */}
            {/* CAMBIAR TÍTULO PRINCIPAL DE SERVICIOS AQUÍ */}
            <SectionHeader subtitle="Servicios" title="Acompañamiento a tu medida" />
            <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative min-h-[360px]"
                  style={{ perspective: '1200px' }}
                >
                  <div
                    className="relative h-full min-h-[360px] w-full transition-all duration-500"
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

          <section
            id="contacto"
            className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-teal-700/95 to-teal-900/95 px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-20 shadow-[0_25px_80px_rgba(15,118,110,0.45)]"
          >
            {/* AJUSTAR FORMAS DECORATIVAS AQUÍ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-3xl space-y-8 text-center"
            >
              <h2 className="mx-auto max-w-4xl font-serif text-3xl italic leading-[1.35] text-white md:text-5xl lg:text-6xl">
                {/* CAMBIAR TEXTO PRINCIPAL DE CTA AQUÍ */}
                “El proceso terapéutico es un viaje hacia tu interior, donde cada paso cuenta para reconstruir tu bienestar.”
              </h2>
              <div className="flex flex-col items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-[320px] items-center justify-center rounded-full bg-white px-10 py-5 text-base font-bold tracking-normal text-teal-900 shadow-lg shadow-teal-900/30 transition hover:-translate-y-0.5 md:min-w-[420px] md:text-lg"
                >
                  {/* CAMBIAR TEXTO DEL BOTÓN AQUÍ */}
                  Agenda tu primera sesión
                </a>
                <p className="mt-3 text-xs text-white/80 tracking-normal">
                  Conversa por WhatsApp para reservar y ver disponibilidad.
                </p>
              </div>
            </motion.div>
            {/* AJUSTAR COLORES DE LA CTA AQUÍ */}
            {/* AJUSTAR PADDING / BORDES / SOMBRAS AQUÍ */}
          </section>

          <footer className="border-t border-teal-100 pt-12 pb-8">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
                <div className="space-y-4">
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
                      href="https://www.instagram.com/ps.carolinavalenzuela_/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white hover:-translate-y-0.5 shadow-sm dark:bg-slate-800 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white"
                    >
                      <Instagram size={20} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/carolina-valenzuela-jara-b050a437b/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white hover:-translate-y-0.5 shadow-sm dark:bg-slate-800 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white"
                    >
                      <Linkedin size={20} />
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white hover:-translate-y-0.5 shadow-sm dark:bg-slate-800 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white"
                      aria-label="Abrir formulario de contacto"
                    >
                      <Mail size={20} />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.25em] text-teal-500 font-semibold">
                    Contacto
                  </h4>

                  {/* EDITAR DATOS DE CONTACTO AQUÍ */}
                  <div className="space-y-3 text-sm text-teal-900/80 dark:text-teal-100/80">
                    <p>WhatsApp: +56 9 9537 1195</p>
                    <p>contacto@carolinavalenzuela.cl</p>
                    <p>Lun - Vie · 09:00 - 19:00</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.25em] text-teal-500 font-semibold">
                    Ubicación
                  </h4>

                  <div className="space-y-3 text-sm text-teal-900/80 dark:text-teal-100/80">
                    <p>Domeyko 1835, Santiago, Región Metropolitana, Chile</p>
                    <p>Atención psicológica en Santiago, en un espacio accesible y bien conectado.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-xs uppercase tracking-[0.25em] text-teal-500 font-semibold">
                    Mapa
                  </h4>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Domeyko+1835+Santiago+Chile"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center justify-center rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md dark:border-white/15 dark:bg-slate-900 dark:text-teal-200"
                  >
                    Cómo llegar
                  </a>
                </div>

                <div className="overflow-hidden rounded-3xl border border-black/5 shadow-lg dark:border-white/10">
                  <iframe
                    title="Ubicación consulta"
                    src="https://www.google.com/maps?q=Domeyko+1835,+Santiago,+Chile&output=embed"
                    className="h-[280px] w-full md:h-[320px] lg:h-[380px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-10 border-t border-teal-100 pt-6 flex flex-col gap-4 text-xs text-teal-500 md:flex-row md:items-center md:justify-between">
                <p>
                  {/* CAMBIAR TEXTO LEGAL AQUÍ */}
                  © {new Date().getFullYear()} Carolina Valenzuela — Psicología & Bienestar
                </p>

                <p className="text-xs text-teal-500">
                  Construido por Arquetipo Digital
                </p>
              </div>
            </div>
          </footer>
        </main>

        {isContactModalOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="relative w-full max-w-2xl rounded-[32px] border border-teal-100 bg-white p-6 shadow-2xl shadow-slate-950/30 dark:border-white/10 dark:bg-slate-950 sm:p-8"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeContactModal}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-teal-100 text-xl text-teal-600 transition hover:bg-teal-50 hover:text-teal-700 dark:border-white/10 dark:text-teal-200 dark:hover:bg-white/5"
                aria-label="Cerrar formulario"
              >
                ×
              </button>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-teal-500">Contacto</p>
                <h2 id="contact-modal-title" className="text-3xl font-serif text-teal-900 dark:text-teal-100">
                  Contáctanos
                </h2>
                <p className="text-sm leading-relaxed text-teal-900/70 dark:text-teal-100/70">
                  Completa el siguiente formulario y te responderemos a la brevedad.
                </p>
              </div>

              <form className="mt-8 space-y-5" onSubmit={handleContactSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200">
                      Nombre
                    </span>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, name: event.target.value }))
                      }
                      className="w-full rounded-2xl border border-teal-100 bg-teal-50/60 px-4 py-3 text-sm text-teal-900 outline-none transition placeholder:text-teal-400 focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-100 dark:border-white/10 dark:bg-slate-900 dark:text-teal-100 dark:placeholder:text-teal-400/60 dark:focus:bg-slate-900 dark:focus:ring-teal-500/10"
                      placeholder="Tu nombre"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200">
                      Teléfono
                    </span>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, phone: event.target.value }))
                      }
                      className="w-full rounded-2xl border border-teal-100 bg-teal-50/60 px-4 py-3 text-sm text-teal-900 outline-none transition placeholder:text-teal-400 focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-100 dark:border-white/10 dark:bg-slate-900 dark:text-teal-100 dark:placeholder:text-teal-400/60 dark:focus:bg-slate-900 dark:focus:ring-teal-500/10"
                      placeholder="+56 9..."
                    />
                  </label>
                </div>

                <label className="block space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200">
                    Email
                  </span>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(event) =>
                      setContactForm((prev) => ({ ...prev, email: event.target.value }))
                    }
                    className="w-full rounded-2xl border border-teal-100 bg-teal-50/60 px-4 py-3 text-sm text-teal-900 outline-none transition placeholder:text-teal-400 focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-100 dark:border-white/10 dark:bg-slate-900 dark:text-teal-100 dark:placeholder:text-teal-400/60 dark:focus:bg-slate-900 dark:focus:ring-teal-500/10"
                    placeholder="tu@email.com"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-200">
                    Mensaje
                  </span>
                  <textarea
                    rows="5"
                    value={contactForm.message}
                    onChange={(event) =>
                      setContactForm((prev) => ({ ...prev, message: event.target.value }))
                    }
                    className="w-full rounded-2xl border border-teal-100 bg-teal-50/60 px-4 py-3 text-sm text-teal-900 outline-none transition placeholder:text-teal-400 focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-100 dark:border-white/10 dark:bg-slate-900 dark:text-teal-100 dark:placeholder:text-teal-400/60 dark:focus:bg-slate-900 dark:focus:ring-teal-500/10"
                    placeholder="Cuéntanos cómo podemos ayudarte"
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
                  <button
                    type="button"
                    onClick={closeContactModal}
                    className="inline-flex items-center justify-center rounded-full border border-teal-100 px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50 dark:border-white/10 dark:text-teal-200 dark:hover:bg-white/5"
                  >
                    Cerrar
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:-translate-y-0.5 hover:bg-teal-700"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </div>
    </div>
  )
}
