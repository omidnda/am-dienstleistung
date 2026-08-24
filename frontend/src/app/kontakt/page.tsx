import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PartnerSlider from "@/components/PartnerSlider";
import Reveal from "@/components/Reveal";
import { getSiteContent } from "@/content/site";
import SharedHero from "@/components/SharedHero";

export const metadata = {
  title: "Kontakt | AM Dienstleistungen GmbH",
  description: "Kontaktieren Sie AM Dienstleistungen GmbH für professionelle Hotel- und Reinigungsdienstleistungen.",
};

export default async function ContactPage() {
  const content = await getSiteContent();

  return <main>
    <header className="site-header">
      <Link className="brand" href="/" aria-label={content.company.name}><Image className="brand-logo" src="/logo.jpg" alt="" width={64} height={64} priority /></Link>
      <nav>{content.nav.map((item) => <Link key={item.href} href={item.href.startsWith("/") ? item.href : `/${item.href}`}>{item.label}</Link>)}</nav>
      <Link className="gold-button header-cta" href="/kontakt">Kontakt</Link>
    </header>

    <SharedHero className="contact-page-hero"><div className="container contact-page-hero-content"><p className="eyebrow">Direkt und persönlich</p><h1>Wir freuen uns auf Ihre Nachricht!</h1><p>Kontaktieren Sie uns jetzt, um herauszufinden, wie wir Ihnen helfen können.</p></div></SharedHero>

    <section className="section contact-page-main">
      <div className="container">
        <div className="contact-intro-grid">
          <Reveal direction="left"><div><p className="eyebrow">Wir sind für Sie da!</p><h2>Kontaktieren Sie uns</h2><p>Wenn Sie Fragen zu unseren Dienstleistungen haben oder weitere Informationen benötigen, kontaktieren Sie uns bitte per E-Mail, Telefon oder über unser Kontaktformular.</p></div></Reveal>
          <div className="contact-methods">
            <Reveal direction="up" delay={80}><a className="contact-method contact-method-primary" href={`mailto:${content.company.email}`}><span aria-hidden="true">✉</span><div><strong>E-Mail</strong><small>{content.company.email}</small></div></a></Reveal>
            <Reveal direction="up" delay={150}><a className="contact-method" href={`tel:${content.company.phone.replace(/\s/g, "")}`}><span aria-hidden="true">☎</span><div><strong>Jetzt anrufen</strong><small>{content.company.phone}</small></div></a></Reveal>
          </div>
        </div>

        <div className="contact-form-block">
          <Reveal direction="left"><div className="contact-form-copy"><p className="eyebrow">Ihre Anfrage</p><h2>Wie können wir Ihnen helfen?</h2><p>Schildern Sie uns kurz Ihr Anliegen. Unser Team meldet sich schnellstmöglich bei Ihnen.</p><div className="contact-address"><strong>{content.company.name}</strong><span>{content.company.address}</span><a href={`mailto:${content.company.email}`}>{content.company.email}</a><a href={`tel:${content.company.phone.replace(/\s/g, "")}`}>{content.company.phone}</a></div></div></Reveal>
          <Reveal direction="right"><ContactForm /></Reveal>
        </div>
      </div>
    </section>

    <section className="section contact-partners"><div className="container"><div className="about-partners-heading"><p className="eyebrow">Erfolgreiche</p><h2>Partnerschaften</h2></div><PartnerSlider partners={content.references.items} /></div></section>

    <footer className="career-footer"><div className="container footer-grid"><div><Image className="footer-logo" src="/logo.jpg" alt={content.company.name} width={180} height={180} /><p>{content.company.tagline}</p></div><div><strong>Navigation</strong>{content.nav.map((item) => <Link key={item.href} href={item.href.startsWith("/") ? item.href : `/${item.href}`}>{item.label}</Link>)}</div><div><strong>Kontakt</strong><span>{content.company.phone}</span><span>{content.company.email}</span><span>{content.company.address}</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {content.company.name}</span><span className="legal-links"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></span></div></footer>
  </main>;
}
