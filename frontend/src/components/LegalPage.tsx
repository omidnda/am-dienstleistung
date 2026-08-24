import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import SharedHero from "@/components/SharedHero";
import { getSiteContent } from "@/content/site";

export default async function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  const content = await getSiteContent();

  return <main>
    <header className="site-header">
      <Link className="brand" href="/" aria-label={content.company.name}><Image className="brand-logo" src="/logo.jpg" alt="" width={64} height={64} priority /></Link>
      <nav>{content.nav.map((item) => <Link key={item.href} href={item.href.startsWith("/") ? item.href : `/${item.href}`}>{item.label}</Link>)}</nav>
      <Link className="gold-button header-cta" href="/kontakt">Kontakt</Link>
    </header>
    <SharedHero className="legal-hero"><div className="container legal-hero-content"><p className="eyebrow">Rechtliche Informationen</p><h1>{title}</h1><p>{intro}</p></div></SharedHero>
    <section className="section legal-section"><article className="container legal-content">{children}</article></section>
    <footer className="career-footer"><div className="container footer-grid"><div><Image className="footer-logo" src="/logo.jpg" alt={content.company.name} width={180} height={180} /><p>{content.company.tagline}</p></div><div><strong>Navigation</strong>{content.nav.map((item) => <Link key={item.href} href={item.href.startsWith("/") ? item.href : `/${item.href}`}>{item.label}</Link>)}</div><div><strong>Rechtliches</strong><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {content.company.name}</span><span className="legal-links"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></span></div></footer>
  </main>;
}
