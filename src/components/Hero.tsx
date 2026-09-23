export default function Hero() {
  return (
    <section id="hero">
      <video
        className="heroVideo"
        id="heroVideo"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/d8wuma28/video/upload/q_auto,f_webm/v1790162587/WhatsApp_Video_2026-09-22_at_8.20.49_PM.mp4"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/d8wuma28/video/upload/q_auto,f_mp4/v1790162587/WhatsApp_Video_2026-09-22_at_8.20.49_PM.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for legibility */}
      <div className="heroOverlay" />
      <div className="heroVideoFallback" id="videoFallback" />

      <div className="heroBg">
        <div className="heroBgText">ZOWL WEB DESIGN</div>
      </div>

      <div className="heroGrid">
        <div className="heroLeft">
          <h1 className="heroH1">
            <span className="w1">DISEÑAMOS</span>
            <span className="w2">EXPERIENCIAS</span>
            <span className="w3">DIGITALES</span>
          </h1>
          <p className="heroPara">
            Páginas web, tiendas online, apps y branding. No hacemos sitios bonitos.
            Hacemos armas de conversión digital que trabajan 24/7 mientras tú duermes.
          </p>
          <div className="heroCtas">
            <a href="#services" className="btnFire">
              <span>Ver servicios</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <polyline points="19 12 12 19 5 12"/>
              </svg>
            </a>
            <a href="https://wa.me/573112332539" target="_blank" rel="noreferrer" className="btnGhost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5h.4a8.5 8.5 0 0 1 8.1 8v.5z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
