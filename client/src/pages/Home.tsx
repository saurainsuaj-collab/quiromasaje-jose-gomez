import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Quote,
  Sparkles,
  Star,
  X,
  HeartPulse,
  Dumbbell,
  Moon,
  Waves,
  Layers3,
  Activity,
} from "lucide-react";

const phone = "615 199 425";
const phoneHref = "tel:+34615199425";
const whatsappHref = "https://wa.me/34615199425?text=Hola%20Jos%C3%A9%2C%20me%20gustar%C3%ADa%20pedir%20cita";

const services = [
  {
    icon: HeartPulse,
    number: "01",
    title: "Masaje terapéutico",
    text: "Trabajo manual adaptado a las necesidades de cada persona para recuperar movilidad y bienestar.",
    tone: "sage",
  },
  {
    icon: Dumbbell,
    number: "02",
    title: "Masaje deportivo",
    text: "Cuidado específico para personas activas que quieren mantener su musculatura preparada.",
    tone: "sand",
  },
  {
    icon: Moon,
    number: "03",
    title: "Masaje relajante",
    text: "Un momento para desconectar, soltar la tensión acumulada y volver a respirar con calma.",
    tone: "clay",
  },
  {
    icon: Waves,
    number: "04",
    title: "Tejidos blandos",
    text: "Técnicas manuales dirigidas al trabajo de diferentes zonas corporales.",
    tone: "sage",
  },
  {
    icon: Layers3,
    number: "05",
    title: "Tejido profundo",
    text: "Trabajo manual más intenso sobre determinadas zonas, siempre de forma personalizada.",
    tone: "sand",
  },
  {
    icon: Activity,
    number: "06",
    title: "Kinesiología & kinesiotaping",
    text: "Técnicas complementarias disponibles según las necesidades de cada sesión.",
    tone: "clay",
  },
];

const reviews = [
  { text: "Aquí irá una reseña real de un cliente.", name: "Nombre del cliente" },
  { text: "Aquí irá una reseña real de un cliente.", name: "Nombre del cliente" },
  { text: "Aquí irá una reseña real de un cliente.", name: "Nombre del cliente" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const goTo = (id: string) => {
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <span className="announcement-dot" />
          <span>Quiromasaje personalizado en Valencia</span>
          <a href={phoneHref}>Cita previa · {phone}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#inicio" onClick={() => setMobileOpen(false)} aria-label="Quiromasaje José Gómez, inicio">
            <span className="brand-mark"><span>J</span><span>G</span></span>
            <span className="brand-copy"><strong>Quiromasaje</strong><em>José Gómez</em></span>
          </a>

          <nav className={`desktop-nav ${mobileOpen ? "mobile-visible" : ""}`} aria-label="Navegación principal">
            <a href="#servicios" onClick={() => setMobileOpen(false)}>Servicios</a>
            <a href="#sobre-jose" onClick={() => setMobileOpen(false)}>Sobre José</a>
            <a href="#opiniones" onClick={() => setMobileOpen(false)}>Opiniones</a>
            <a href="#contacto" onClick={() => setMobileOpen(false)}>Contacto</a>
            <a className="nav-cta" href="#reserva" onClick={() => setMobileOpen(false)}>Pedir cita <ArrowUpRight size={16} /></a>
          </nav>

          <button className="menu-toggle" type="button" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow light"><span /> Bienestar corporal · Valencia</p>
              <h1>Tu cuerpo<br /><em>también</em> necesita<br />que lo escuches.</h1>
              <p className="hero-lede">Quiromasaje con un trato cercano y profesional. Cada sesión se adapta a ti para que vuelvas a sentirte bien en tu cuerpo.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#reserva">Pedir cita <ArrowUpRight size={17} /></a>
                <a className="text-link light-link" href="#servicios">Descubrir servicios <ChevronDown size={16} /></a>
              </div>
              <div className="hero-meta">
                <span><strong>20</strong> años de experiencia</span>
                <i />
                <span>Atención personalizada</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <img src="/manus-storage/jose-gomez-hero_2e1fe773.jpg" alt="Sala de quiromasaje luminosa con detalles naturales" />
                <div className="image-caption"><Sparkles size={15} /><span>Un espacio para volver a ti</span></div>
              </div>
              <div className="hero-stamp"><span>QJ</span><small>desde<br />2004</small></div>
            </div>
          </div>
          <div className="hero-scroll"><span>Explora</span><span className="scroll-line" /></div>
        </section>

        <section className="intro-section">
          <div className="container intro-grid">
            <div className="section-kicker"><span>01</span><i /></div>
            <div className="intro-copy">
              <p className="eyebrow">La experiencia de sentirse bien</p>
              <h2>Un cuidado que empieza<br />por <em>escucharte.</em></h2>
            </div>
            <div className="intro-body">
              <p>Cada persona llega con una historia diferente. Por eso, antes de comenzar, José se toma el tiempo de conocer qué necesitas y cómo te sientes.</p>
              <a className="text-link dark-link" href="#sobre-jose">Conoce mi forma de trabajar <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="servicios" className="services-section section-dark">
          <div className="container">
            <div className="section-heading light-heading">
              <div>
                <p className="eyebrow light"><span /> Tratamientos</p>
                <h2>Encuentra el cuidado<br /><em>que necesitas.</em></h2>
              </div>
              <p className="heading-aside">Distintas técnicas, un mismo objetivo: que vuelvas a habitar tu cuerpo con más ligereza.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, number, title, text, tone }) => (
                <article key={title} className={`service-card service-${tone}`}>
                  <div className="service-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="card-arrow"><ArrowUpRight size={17} /></span>
                </article>
              ))}
            </div>
            <div className="service-footnote"><span className="footnote-mark">*</span> Los tratamientos y técnicas se confirman directamente con el profesional según la valoración de cada sesión.</div>
          </div>
        </section>

        <section id="sobre-jose" className="about-section">
          <div className="container about-grid">
            <div className="about-portrait">
              <div className="portrait-block"><span>La experiencia<br />es importante.<br /><em>Escuchar, aún más.</em></span></div>
              <div className="portrait-caption"><span>José Gómez</span><small>Quiromasajista</small></div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">Sobre José</p>
              <h2>20 años dedicados<br />al <em>bienestar corporal.</em></h2>
              <p className="about-lead">“La experiencia es importante, pero también lo es saber escuchar.”</p>
              <p>En Quiromasaje José Gómez apuesto por un trato cercano y personalizado. Antes de comenzar, tengo en cuenta tus necesidades para adaptar la sesión y ofrecerte una experiencia profesional, cómoda y honesta.</p>
              <div className="about-facts">
                <div><strong>20</strong><span>Años de<br />trayectoria</span></div>
                <div><strong>1:1</strong><span>Atención<br />personalizada</span></div>
                <div><strong>∞</strong><span>Escucha y<br />cercanía</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="opiniones" className="reviews-section section-sand">
          <div className="container">
            <div className="section-heading review-heading">
              <div>
                <p className="eyebrow">La voz de quienes ya han venido</p>
                <h2>Experiencias que<br /><em>hablan por sí solas.</em></h2>
              </div>
              <a className="text-link dark-link" href="https://www.google.com/maps/search/?api=1&query=Quiromasaje+Jos%C3%A9+G%C3%B3mez+Valencia" target="_blank" rel="noreferrer">Ver todas las reseñas <ArrowUpRight size={16} /></a>
            </div>
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <article className="review-card" key={review.name + index}>
                  <div className="stars" aria-label="Cinco estrellas">{Array.from({ length: 5 }).map((_, star) => <Star key={star} size={15} fill="currentColor" />)}</div>
                  <Quote className="quote-icon" size={26} />
                  <p>“{review.text}”</p>
                  <span>— {review.name}</span>
                </article>
              ))}
            </div>
            <p className="review-note">Las reseñas mostradas aquí se sustituirán por las opiniones reales de tus clientes.</p>
          </div>
        </section>

        <section id="contacto" className="location-section">
          <div className="container location-grid">
            <div className="location-copy">
              <p className="eyebrow">Dónde encontrarme</p>
              <h2>Estamos en<br /><em>Valencia.</em></h2>
              <div className="address-block">
                <div className="address-icon"><MapPin size={20} /></div>
                <div><strong>Quiromasaje José Gómez</strong><p>C/ d'Isaac Peral, 1, 2.º Bajo izquierda<br />46024 Valencia</p></div>
              </div>
              <div className="contact-row"><a href={phoneHref}><Phone size={17} /> {phone}</a><span><Clock3 size={17} /> L–V · 10:30–20:00</span></div>
              <p className="hours-note">Horario publicado orientativo. Conviene confirmar disponibilidad al pedir cita.</p>
              <a className="text-link dark-link" href="https://www.google.com/maps/dir/?api=1&destination=C%2F%20d%27Isaac%20Peral%2C%201%2C%2046024%20Valencia" target="_blank" rel="noreferrer">Cómo llegar <ArrowUpRight size={16} /></a>
            </div>
            <a className="map-card" href="https://www.google.com/maps/dir/?api=1&destination=C%2F%20d%27Isaac%20Peral%2C%201%2C%2046024%20Valencia" target="_blank" rel="noreferrer" aria-label="Abrir indicaciones en Google Maps">
              <div className="map-grid-lines" />
              <div className="map-street street-one" /><div className="map-street street-two" /><div className="map-street street-three" />
              <div className="map-pin"><MapPin size={20} fill="currentColor" /><span>Isaac Peral, 1</span></div>
              <div className="map-label label-top">MARINA<br /><small>VALENCIA</small></div>
              <div className="map-label label-bottom">46024</div>
              <span className="map-cta">Abrir en Maps <ArrowUpRight size={15} /></span>
            </a>
          </div>
        </section>

        <section id="reserva" className="booking-section section-dark">
          <div className="booking-orb orb-one" /><div className="booking-orb orb-two" />
          <div className="container booking-inner">
            <p className="eyebrow light"><span /> Da el primer paso</p>
            <h2>¿Hablamos?</h2>
            <p>Si quieres conocer los servicios disponibles o reservar una sesión, ponte en contacto directamente.</p>
            <div className="booking-actions">
              <a className="button button-primary" href={phoneHref}><Phone size={17} /> Llamar ahora</a>
              <a className="button button-outline-light" href={whatsappHref} target="_blank" rel="noreferrer"><span className="whatsapp-symbol">◔</span> Escribir por WhatsApp</a>
            </div>
            <span className="booking-phone">{phone}</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><span>J</span><span>G</span></span><span className="brand-copy"><strong>Quiromasaje</strong><em>José Gómez</em></span></a>
          <p>Bienestar para tu cuerpo, atención personalizada para ti.</p>
          <a className="footer-social" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
          <span className="footer-legal">© {new Date().getFullYear()} · Valencia</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><span className="whatsapp-symbol">◔</span><span>WhatsApp</span></a>
      <div className="mobile-booking-bar"><a href={phoneHref}><Phone size={17} /> Llamar</a><a href="#reserva"><CalendarDays size={17} /> Pedir cita</a></div>
    </div>
  );
}
