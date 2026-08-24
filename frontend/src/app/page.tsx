import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import PartnerSlider from "@/components/PartnerSlider";
import SharedHero from "@/components/SharedHero";
import { getSiteContent } from "@/content/site";
import Link from "next/link";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="#home" aria-label={content.company.name}>
          <Image className="brand-logo" src="/logo.jpg" alt="" width={64} height={64} priority />
        </Link>
        <nav>
          {content.nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link
          className="gold-button header-cta"
          href={`tel:${content.company.phone.replace(/\s/g, "")}`}
          aria-label={`Jetzt anrufen: ${content.company.phone}`}
        >
          <svg
            className="header-cta-icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="header-cta-label">Jetzt anrufen</span>
        </Link>
      </header>

      <SharedHero id="home" className="hero">
        <div className="hero-overlay" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-content">
          <Reveal direction="left" delay={80}><p className="eyebrow">{content.hero.eyebrow}</p></Reveal>
          <h1 className="hero-title" aria-label={`${content.hero.titleLines.join(" ")} ${content.hero.highlightedLine}`}>
            {content.hero.titleLines.map((line, index) => (
              <span key={line} className={`hero-line hero-line-${index + 1}`}>{line}</span>
            ))}
            <span className="hero-line hero-line-gold">{content.hero.highlightedLine}</span>
          </h1>
          <Reveal direction="up" delay={550}><p className="hero-copy">{content.hero.description}</p></Reveal>
          <Reveal direction="up" delay={700}>
            <div className="hero-actions">
              <a className="gold-button" href="#leistungen">{content.hero.primaryCta} <span>→</span></a>
              <a className="outline-button" href="#kontakt">{content.hero.secondaryCta} <span>→</span></a>
            </div>
          </Reveal>
        </div>
        <div className="scroll-indicator"><span /> Scroll</div>
      </SharedHero>

      <section id="ueber-uns" className="section company-section">
        <div className="container">
          <div className="sustainability-grid">
            <Reveal direction="left"><div className="sustainability-copy"><p className="eyebrow">{content.sustainability.eyebrow}</p><h2>{content.sustainability.title}</h2><p className="body-copy">{content.sustainability.text}</p></div></Reveal>
            <div className="certificates" aria-label="ISO-Zertifizierungen">
              <Reveal direction="up" delay={100}><div className="certificate-image"><Image src="/zertikacates/iso-9001.png" alt="DIN EN ISO 9001 Zertifikat" width={652} height={842} /></div></Reveal>
              <Reveal direction="up" delay={200}><div className="certificate-image certificate-image-raised"><Image src="/zertikacates/iso-14001.png" alt="DIN EN ISO 14001 Zertifikat" width={632} height={892} /></div></Reveal>
            </div>
          </div>
          <div className="company-grid">
            <Reveal direction="left"><div className="company-intro"><p className="eyebrow">{content.about.eyebrow}</p><h2>{content.about.title}</h2><p className="body-copy">{content.about.text}</p><div className="partner-statement"><strong>Zuverlässiger Partner</strong><span>{content.company.tagline}</span></div></div></Reveal>
            <div className="value-grid">
              {content.about.points.map((point, index) => <Reveal key={point.title} direction="up" delay={index * 90}><article className={`value-card value-card-${index + 1}`}><span>0{index + 1}</span><h3>{point.title}</h3><p>{point.text}</p></article></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="section services-section">
        <div className="container">
          <Reveal><div className="section-heading"><p className="eyebrow">Unsere Leistungen</p><h2>Alles aus einer Hand</h2></div></Reveal>
          <div className="services-grid">
            {content.services.map((service, index) => (
              <Reveal key={service.title} direction={index % 2 ? "up" : "down"} delay={index * 90}>
                <article className="service-card">
                  <div className="service-image"><Image src={service.image} alt="" width={450} height={300} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="card-line" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section landing-careers-section">
        <div className="container">
          <Reveal><div className="section-heading"><p className="eyebrow">Karriere-Chancen bei {content.company.name}</p><h2>{content.careers.title}</h2><Link className="gold-button section-cta" href="/karriere">Mehr erfahren <span>→</span></Link></div></Reveal>
          <div className="landing-careers-grid">
            {content.careers.jobs.map((job, index) => <Reveal key={job.title} direction="up" delay={index * 65}>
              <article className="landing-career-card"><Image src={job.image} alt="" width={676} height={471} /><div><h3>{job.title}</h3><p>{job.description}</p><a href={`mailto:${content.company.email}?subject=${encodeURIComponent(`Bewerbung als ${job.title}`)}`}>Jetzt bewerben <span>→</span></a></div></article>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section id="referenzen" className="section references-section">
        <div className="container">
          <Reveal><div className="section-heading"><p className="eyebrow">{content.references.eyebrow}</p><h2>{content.references.title}</h2></div></Reveal>
          <Reveal direction="up"><PartnerSlider partners={content.references.items} /></Reveal>
        </div>
      </section>

      <section id="kontakt" className="contact-section">
        <div className="container contact-grid">
          <Reveal direction="left">
            <div>
              <p className="eyebrow">{content.contact.eyebrow}</p>
              <h2>{content.contact.title}</h2>
              <p>{content.contact.text}</p>
              <div className="contact-data">
                <a href={`tel:${content.company.phone.replace(/\s/g, "")}`}>☎ {content.company.phone}</a>
                <a href={`mailto:${content.company.email}`}>✉ {content.company.email}</a>
                <span>⌖ {content.company.address}</span>
              </div>
            </div>
          </Reveal>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div>
            <Image className="footer-logo" src="/logo.jpg" alt="AM Dienstleistungen GmbH" width={180} height={180} />
            <p>{content.company.tagline}</p>
          </div>
          <div><strong>Schnelllinks</strong>{content.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
          <div><strong>Leistungen</strong>{content.services.map((item) => <a key={item.title} href="#leistungen">{item.title}</a>)}</div>
          <div><strong>Kontakt</strong><span>{content.company.phone}</span><span>{content.company.email}</span><span>{content.company.address}</span></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} {content.company.name}</span><span className="legal-links"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></span></div>
      </footer>
    </main>
  );
}
