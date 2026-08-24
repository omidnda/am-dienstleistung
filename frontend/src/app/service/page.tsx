import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getSiteContent } from "@/content/site";
import SharedHero from "@/components/SharedHero";

export const metadata = {
  title: "Service | AM Dienstleistungen GmbH",
  description: "Professionelle Hoteldienstleistungen: Zimmerreinigung, Glasreinigung, Zimmer-Check und Public Area.",
};

export default async function ServicePage() {
  const content = await getSiteContent();

  return <main>
    <header className="site-header">
      <Link className="brand" href="/" aria-label={content.company.name}><Image className="brand-logo" src="/logo.jpg" alt="" width={64} height={64} priority /></Link>
      <nav>{content.nav.map((item) => <Link key={item.href} href={item.href.startsWith("/") ? item.href : `/${item.href}`}>{item.label}</Link>)}</nav>
      <Link className="gold-button header-cta" href="/#kontakt">Kontakt</Link>
    </header>

    <SharedHero className="service-page-hero">
      <div className="container service-page-hero-content"><p className="eyebrow">Professionelle Hoteldienstleistungen</p><h1>Unser Service für unvergessliche Erlebnisse.</h1><p>Seit unserer Gründung erfüllen wir erfolgreich die höchsten Ansprüche unserer Auftraggeber im Bereich Hotels und Personaldienstleistungen.</p></div>
    </SharedHero>

    <section className="section service-experience">
      <div className="container service-experience-grid">
        <Reveal direction="left"><div><p className="eyebrow">Erfahrung und Kompetenz für Ihren Erfolg</p><h2>Unsere Erfahrung ist Ihr Vorteil</h2><p>Als führender Hoteldienstleister mit Schwerpunkt auf Zimmerreinigung verfügt {content.company.name} über langjährige Erfahrung und Expertise. Unser tiefes Verständnis für die Besonderheiten Ihres Betriebs ermöglicht es uns, Ihnen Optionen anzubieten, die Ihre Anforderungen erfüllen und Ihre Erwartungen übertreffen.</p><p>Unser Ziel ist ein herausragender Service, der Ihre Gäste beeindruckt und zugleich das Ansehen und den Erfolg Ihres Hotels stärkt.</p><Link className="gold-button" href="/#kontakt">Kontakt</Link></div></Reveal>
        <Reveal direction="right">
          <div className="experience-visual">
            <Image className="experience-person" src="/images/service-employee-cutout.png" alt="Mitarbeiterin im Hotelservice" width={1536} height={1024} />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section service-page-list" id="leistungen">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">Unser Service</p>
            <h2>Alles aus einer Hand!</h2>
            <p className="body-copy">Perfekte Gastgebererlebnisse durch professionelle Dienstleistungen.</p></div></Reveal><div className="service-detail-grid">{content.services.map((service, index) => <Reveal key={service.title} direction="up" delay={index * 80}>
              <article className="service-detail-card">
                <Image src={service.image} alt={service.title} width={700} height={470} />
                <h3>{service.title}</h3><p>{service.description}</p>
                <ul>{service.benefits.map((benefit) => <li key={benefit}><span>✓</span>{benefit}</li>)}</ul>
                </article>
          </Reveal>)}
        </div>
    </div>
    </section>

    <footer className="career-footer"><div className="container footer-grid"><div><Image className="footer-logo" src="/logo.jpg" alt={content.company.name} width={180} height={180} /><p>{content.company.tagline}</p></div><div><strong>Navigation</strong>{content.nav.map((item) => <Link key={item.href} href={item.href.startsWith("/") ? item.href : `/${item.href}`}>{item.label}</Link>)}</div><div><strong>Kontakt</strong><span>{content.company.phone}</span><span>{content.company.email}</span><span>{content.company.address}</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {content.company.name}</span><span className="legal-links"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></span></div></footer>
  </main>;
}
