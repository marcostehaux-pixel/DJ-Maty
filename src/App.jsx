import { useEffect } from 'react'
import './App.css'

import heroImg from './assets/hero.png'
import lightingImg from './assets/lighting.png'
import djImg from './assets/dj.png'
import stageImg from './assets/stage.png'
import matiasImg from './assets/matias.png'
import logoMD from './assets/logo-md.png'
function App() {
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    const elements = document.querySelectorAll('.reveal')

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
  const whatsappUrl =
    'https://wa.me/5493413532184?text=Hola%20Matias%2C%20quisiera%20consultarte%20por%20un%20evento.'

  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#inicio" className="brand" translate="no">
          <img
  src={logoMD}
  className="brand-logo"
  alt="Matias Delay"
/>
          <span className="brand-text">
            <strong translate="no">MATIAS DELAY</strong>
            <small>Audio & Iluminación</small>
          </span>
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="hero-section"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="eyebrow">PRODUCCIÓN DE EVENTOS</span>

          <h1>
            Creamos la atmósfera.
            <br />
            <span>Vos vivís el momento.</span>
          </h1>

          <p>
            Audio, iluminación, musicalización y producción técnica
            para transformar cada evento en una experiencia.
          </p>
<div className="hero-location">
  <span className="location-pin">⌖</span>
  <span>Roldán, Santa Fe · Servicio en toda la región</span>
</div>
          <div className="hero-buttons">
            <a href="#servicios" className="btn btn-primary">
              Nuestros servicios
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>DESCUBRÍ MÁS</span>
          <span className="arrow">↓</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro reveal">
        <span className="section-label">MATIAS DELAY</span>

        <h2>
          Sonido, luz y música.
          <br />
          <span>Todo en un mismo lugar.</span>
        </h2>

        <p>
          Diseñamos y producimos experiencias para eventos sociales,
          empresariales y celebraciones, combinando tecnología,
          creatividad y atención personalizada.
        </p>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="services-section">
        <div className="section-heading reveal">
          <div>
            <span className="section-label">SERVICIOS</span>
            <h2>Todo lo que necesita tu evento.</h2>
          </div>

          <p>
            Soluciones técnicas y creativas adaptadas a cada espacio,
            propuesta y tipo de celebración.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card reveal">
            <span className="service-number">01</span>
            <h3>DJ & Musicalización</h3>
            <p>
              Selección musical y ambientación adaptada a cada momento
              del evento y a tu público.
            </p>
          </article>

          <article className="service-card reveal">
            <span className="service-number">02</span>
            <h3>Audio Profesional</h3>
            <p>
              Sistemas de sonido preparados según las características
              del espacio y la escala del evento.
            </p>
          </article>

          <article className="service-card reveal">
            <span className="service-number">03</span>
            <h3>Iluminación</h3>
            <p>
              Diseño de iluminación para crear ambientes, destacar
              espacios y acompañar cada etapa de la celebración.
            </p>
          </article>

          <article className="service-card reveal">
            <span className="service-number">04</span>
            <h3>Producción de Eventos</h3>
            <p>
              Planificación, montaje y coordinación técnica para que
              cada detalle funcione como fue pensado.
            </p>
          </article>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="experience-section">
        <div className="experience-image reveal reveal-left">
          <img src={matiasImg} alt="Matias Delay trabajando en un evento" />
        </div>

        <div className="experience-content reveal reveal-right">
          <span className="section-label">LA EXPERIENCIA</span>

          <h2>
            Cada evento
            <br />
            <span>es diferente.</span>
          </h2>

          <p>
            Desde la planificación hasta el último tema de la noche,
            trabajamos cada evento de manera personalizada.
          </p>

          <p>
            La música, el sonido y la iluminación se integran para
            construir una experiencia coherente con cada celebración.
          </p>

          <a href="#contacto" className="text-link">
            Hablemos de tu evento →
          </a>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="gallery-section">
        <div className="section-heading gallery-heading">
          <div>
            <span className="section-label">EN ACCIÓN</span>
            <h2>Experiencias que se viven.</h2>
          </div>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item gallery-large reveal">
            <img src={stageImg} alt="Producción y escenario para evento" />
          </div>

          <div className="gallery-item reveal">
            <img src={djImg} alt="DJ y musicalización en vivo" />
          </div>

          <div className="gallery-item">
            <img src={lightingImg} alt="Diseño y control de iluminación" />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contact-section reveal">
        <img
  src={logoMD}
  className="contact-watermark"
  alt=""
  aria-hidden="true"
/>
        <span className="section-label">¿TENÉS UN EVENTO?</span>

        <h2>
          Hagamos que
          <br />
          <span>se destaque.</span>
        </h2>

        <p>
          Contanos qué estás organizando y armamos una propuesta
          adaptada a tu evento.
        </p>
<div className="contact-location">
  <strong>Roldán · Santa Fe</strong>
  <span>Servicio en toda la región</span>
</div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary contact-button"
        >
          Contactar por WhatsApp
        </a>

        <a
          href="https://www.instagram.com/djmatiasdelay/"
          target="_blank"
          rel="noreferrer"
          className="instagram-link"
        >
          Instagram · @djmatiasdelay
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <strong translate="no">MATIAS DELAY</strong>
          <span>Audio & Iluminación</span>
        </div>

        <p>Producción · Audio · Iluminación · DJ</p>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
  href={whatsappUrl}
  target="_blank"
  rel="noreferrer"
  className="whatsapp-float"
  aria-label="Contactar por WhatsApp"
>
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    className="whatsapp-icon"
  >
    <path
      fill="currentColor"
      d="M16.04 3C9.4 3 4 8.37 4 14.98c0 2.34.69 4.62 1.98 6.56L4 28.8l7.46-1.95a12.1 12.1 0 0 0 4.57.9h.01C22.67 27.75 28 22.38 28 15.77 28 9.16 22.67 3 16.04 3Zm0 22.72h-.01a10 10 0 0 1-4.28-.96l-.31-.15-4.43 1.16 1.18-4.3-.2-.33a9.91 9.91 0 0 1-1.52-5.27c0-5.47 4.47-9.92 9.97-9.92 5.49 0 9.96 4.45 9.96 9.92 0 5.47-4.47 9.85-9.96 9.85Zm5.46-7.44c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47a9 9 0 0 1-1.66-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"
    />
  </svg>
</a>

    </div>
  )
}

export default App