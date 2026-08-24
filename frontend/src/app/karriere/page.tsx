import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getSiteContent } from "@/content/site";
import SharedHero from "@/components/SharedHero";

export const metadata = {
  title: "Karriere | AM Dienstleistungen GmbH",
  description: "Offene Stellen bei AM Dienstleistungen GmbH – entdecken Sie Ihre Karriere-Chancen in der Hoteldienstleistung.",
};

export default async function KarrierePage() {
  const content = await getSiteContent();

  return <main>
    <header className="site-header">
      <Link className="brand" href="/" aria-label={content.company.name}>
        <Image className="brand-logo" src="/logo.jpg" alt="" width={64} height={64} priority />
      </Link>
      <nav>{content.nav.map((item) => <Link key={item.href} href={item.href.startsWith("/") ? item.href : `/${item.href}`}>{item.label}</Link>)}</nav>
      <Link className="gold-button header-cta" href={`tel:${content.company.phone.replace(/\s/g, "")}`}>Jetzt anrufen</Link>
    </header>

    <SharedHero className="career-hero">
      <div className="container hero-content">
        <p className="eyebrow">{content.careers.eyebrow}</p>
        <h1 className="hero-title">{content.careers.title}</h1>
        <p className="hero-copy">{content.careers.text}</p>
        <a className="gold-button career-hero-cta" href="#stellen">Mehr erfahren <span>↓</span></a>
      </div>
    </SharedHero>

    <section id="stellen" className="section careers-section">
      <div className="container">
        <Reveal><div className="section-heading"><p className="eyebrow">Offene Stellen</p><h2>Werden Sie Teil unseres Teams</h2><p className="body-copy">Gemeinsam schaffen wir erstklassige Erlebnisse für unsere Hotelpartner und ihre Gäste.</p></div></Reveal>
        <div className="careers-grid">
        {content.careers.jobs.map((job, index) => <Reveal key={job.title} direction="up" delay={index * 70}>
          <article className="career-card">
            <Image src={job.image} alt="" width={676} height={471} />
            <div className="career-card-content"><span>Offene Stelle</span><h3>{job.title}</h3><p>{job.description}</p><a href={`mailto:${content.company.email}?subject=${encodeURIComponent(`Bewerbung als ${job.title}`)}`}>Jetzt bewerben <span>→</span></a></div>
          </article>
        </Reveal>)}
        </div>
      </div>
    </section>

    <section className="career-contact">
      <div className="container career-contact-inner"><div><p className="eyebrow">Noch Fragen?</p><h2>Wir freuen uns auf Ihre Bewerbung</h2><p>Senden Sie uns Ihre Unterlagen oder sprechen Sie direkt mit unserem Team.</p></div><div className="career-contact-actions"><a className="gold-button" href={`mailto:${content.company.email}?subject=Bewerbung`}>Bewerbung senden</a><a className="outline-button" href={`tel:${content.company.phone.replace(/\s/g, "")}`}>{content.company.phone}</a></div></div>
    </section>

    <footer className="career-footer">
      <div className="container footer-grid">
        <div><Image className="footer-logo" src="/logo.jpg" alt={content.company.name} width={180} height={180} /><p>{content.company.tagline}</p></div>
        <div><strong>Navigation</strong>{content.nav.map((item) => <Link key={item.href} href={item.href.startsWith("/") ? item.href : `/${item.href}`}>{item.label}</Link>)}</div>
        <div><strong>Kontakt</strong><span>{content.company.phone}</span><span>{content.company.email}</span><span>{content.company.address}</span></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {content.company.name}</span><span className="legal-links"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></span></div>
    </footer>
  </main>;
}
