import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PartnerSlider from "@/components/PartnerSlider";
import { getSiteContent } from "@/content/site";
import SharedHero from "@/components/SharedHero";

export const metadata = {
  title: "Über uns | AM Dienstleistungen GmbH",
  description: "Lernen Sie AM Dienstleistungen GmbH, unsere Qualitätsansprüche, Vision und Werte kennen.",
};

export default async function AboutPage() {
  const content = await getSiteContent();

  return <main>
    <header className="site-header">
      <Link className="brand" href="/" aria-label={content.company.name}><Image className="brand-logo" src="/logo.jpg" alt="" width={64} height={64} priority /></Link>
      <nav>{content.nav.map((item) => <Link key={item.href} href={item.href.startsWith("/") ? item.href : `/${item.href}`}>{item.label}</Link>)}</nav>
      <Link className="gold-button header-cta" href="/#kontakt">Kontakt</Link>
    </header>

    <SharedHero className="about-page-hero">
      <div className="container about-page-hero-content"><p className="eyebrow">Über AM Dienstleistungen</p><h1>Sehen Sie, was uns motiviert.</h1><p>Herzlich willkommen bei {content.company.name}!</p></div>
    </SharedHero>

    <section className="section about-hotelpartner">
      <div className="container about-hotelpartner-grid">
        <Reveal direction="left"><div className="about-image-wrap"><Image src="/images/Startseite-Unser-Service-Zimmerreinigung.webp" alt="Professioneller Hotelservice" width={900} height={650} /><blockquote>„Kundenzufriedenheit ist der Schlüssel zum Erfolg.“</blockquote></div></Reveal>
        <Reveal direction="right"><div><p className="eyebrow">Über uns</p><h2>Ihr Hotelpartner</h2><p>Willkommen bei {content.company.name} – Ihrem Partner für erstklassigen Hotel-Service. Seit unserer Gründung haben wir uns konsequent an den höchsten Ansprüchen unserer Auftraggeber orientiert.</p><p>Unsere Schwerpunkte sind Qualität, Zuverlässigkeit und Kundenzufriedenheit.</p><p>Durch enge Zusammenarbeit streben wir langfristige Partnerschaften an. Unsere Dienstleistungen reichen von Zimmerreinigung und der Pflege öffentlicher Bereiche bis hin zu umfassendem Facility-Management.</p><p>Erleben Sie, wie wir Ihr Unternehmen durch Expertise und Engagement unterstützen können.</p></div></Reveal>
      </div>
    </section>

    <div className="about-wide-image" role="img" aria-label="Moderne Hotel- und Geschäftsgebäude" />

    <section className="section about-standards">
      <div className="container company-grid">
        <Reveal direction="left"><div className="company-intro"><p className="eyebrow">Qualität ohne Kompromisse</p><h2>Unser Anspruch</h2><p className="body-copy">Bei {content.company.name} setzen wir unsere Standards und Ziele auf einem sehr hohen Niveau.</p><p className="body-copy">Wir erfüllen unmittelbar die Ansprüche der 4- und 5-Sterne-Hotellerie.</p><p className="body-copy">Durch ein erweitertes Qualitätsmanagement haben wir die Kompetenz unseres Unternehmens weiter gesteigert.</p><div className="partner-statement"><strong>Zuverlässiger Partner</strong><span>{content.company.tagline}</span></div></div></Reveal>
        <div className="value-grid">{content.about.points.map((point, index) => <Reveal key={point.title} direction="up" delay={index * 90}><article className={`value-card value-card-${index + 1}`}><span>0{index + 1}</span><h3>{point.title}</h3><p>{point.text}</p></article></Reveal>)}</div>
      </div>
    </section>

    <section className="section about-partners"><div className="container"><div className="about-partners-heading"><p className="eyebrow">Erfolgreiche</p><h2>Partnerschaften</h2></div><PartnerSlider partners={content.references.items} /></div></section>

    <section className="about-contact"><div className="container about-contact-inner"><div><h2>Wir freuen uns auf Ihre Nachricht!</h2><p>Kontaktieren Sie uns jetzt, um herauszufinden, wie wir Ihnen helfen können.</p></div><Link className="gold-button" href="/#kontakt">Kontakt</Link></div></section>

    <footer className="career-footer"><div className="container footer-grid"><div><Image className="footer-logo" src="/logo.jpg" alt={content.company.name} width={180} height={180} /><p>{content.company.tagline}</p></div><div><strong>Navigation</strong>{content.nav.map((item) => <Link key={item.href} href={item.href.startsWith("/") ? item.href : `/${item.href}`}>{item.label}</Link>)}</div><div><strong>Kontakt</strong><span>{content.company.phone}</span><span>{content.company.email}</span><span>{content.company.address}</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {content.company.name}</span><span className="legal-links"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></span></div></footer>
  </main>;
}
