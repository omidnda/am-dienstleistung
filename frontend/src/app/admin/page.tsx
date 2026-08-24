"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./admin.module.css";

type Section = "dashboard" | "general" | "home" | "services" | "about" | "references" | "media" | "navigation" | "contact" | "legal" | "seo";

const sections: { id: Section; label: string; icon: string }[] = [
  { id: "dashboard", label: "Übersicht", icon: "grid" },
  { id: "general", label: "Allgemein", icon: "settings" },
  { id: "home", label: "Startseite", icon: "home" },
  { id: "services", label: "Leistungen", icon: "briefcase" },
  { id: "about", label: "Über uns", icon: "users" },
  { id: "references", label: "Referenzen & Slider", icon: "images" },
  { id: "media", label: "Medien", icon: "image" },
  { id: "navigation", label: "Navigation & Footer", icon: "menu" },
  { id: "contact", label: "Kontakt", icon: "mail" },
  { id: "legal", label: "Rechtliche Seiten", icon: "file" },
  { id: "seo", label: "SEO & Social Media", icon: "search" },
];

const services = ["Reinigung", "Gebäudeservice", "Hausmeisterservice", "Gartenpflege", "Transport"];

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 8.94 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.57 15 1.7 1.7 0 0 0 3 14H3v-4h.09A1.7 1.7 0 0 0 4.6 8.94a1.7 1.7 0 0 0-.34-1.88L4.2 7l2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.57 1.7 1.7 0 0 0 10 3h4v.09A1.7 1.7 0 0 0 15.06 4.6a1.7 1.7 0 0 0 1.88-.34L17 4.2 19.83 7l-.06.06A1.7 1.7 0 0 0 19.43 9 1.7 1.7 0 0 0 21 10h.09v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>,
    home: <path d="m3 11 9-8 9 8v10h-6v-6H9v6H3Z"/>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    images: <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></>,
    image: <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></>,
    search: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>,
    plus: <path d="M12 5v14M5 12h14"/>,
    save: <><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></>,
    upload: <><path d="M12 16V4M7 9l5-5 5 5"/><path d="M20 15v5H4v-5"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Field({ label, value, wide, multiline, hint }: { label: string; value: string; wide?: boolean; multiline?: boolean; hint?: string }) {
  return <label className={wide ? styles.wide : ""}><span className={styles.label}>{label}</span>{multiline ? <textarea defaultValue={value} rows={4}/> : <input defaultValue={value}/>} {hint && <small>{hint}</small>}</label>;
}

function Panel({ title, description, children, action }: { title: string; description?: string; children: React.ReactNode; action?: React.ReactNode }) {
  return <section className={styles.panel}><div className={styles.panelHead}><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</div>{children}</section>;
}

export default function AdminPage() {
  const [active, setActive] = useState<Section>("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState(true);
  const current = sections.find((item) => item.id === active)!;
  const changeSection = (id: Section) => { setActive(id); setMenuOpen(false); };

  return <div className={styles.admin} onChange={() => setSaved(false)}>
    <aside className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ""}`}>
      <div className={styles.brand}><img src="/logo192.jpg" alt="AM"/><div><strong>AM Admin</strong><span>Content Management</span></div></div>
      <nav className={styles.sideNav}>{sections.map(item => <button key={item.id} className={active === item.id ? styles.active : ""} onClick={() => changeSection(item.id)}><Icon name={item.icon}/><span>{item.label}</span></button>)}</nav>
      <div className={styles.sidebarFoot}><div className={styles.avatar}>OA</div><div><strong>Administrator</strong><span>admin@am.de</span></div></div>
    </aside>
    {menuOpen && <button className={styles.backdrop} aria-label="Menü schließen" onClick={() => setMenuOpen(false)}/>} 

    <main className={styles.main}>
      <header className={styles.topbar}>
        <button className={styles.menuButton} onClick={() => setMenuOpen(true)}><Icon name="menu"/></button>
        <div className={styles.breadcrumb}><span>Website</span><Icon name="chevron" size={14}/><strong>{current.label}</strong></div>
        <div className={styles.topActions}><span className={`${styles.status} ${saved ? styles.saved : ""}`}>{saved ? "Alle Änderungen gespeichert" : "Nicht gespeicherte Änderungen"}</span><Link href="/" target="_blank" className={styles.preview}><Icon name="eye"/> <span>Website ansehen</span></Link><button className={styles.save} onClick={() => setSaved(true)}><Icon name="save"/> Speichern</button></div>
      </header>

      <div className={styles.content}>
        <div className={styles.pageTitle}><div><p>Website-Verwaltung</p><h1>{current.label}</h1></div>{active !== "dashboard" && <button className={styles.secondary}><Icon name="eye"/> Vorschau</button>}</div>

        {active === "dashboard" && <>
          <div className={styles.stats}>{[["11","Inhaltsbereiche"],["6","Bilder & Medien"],["5","Leistungen"],["2","Rechtliche Seiten"]].map(([number,label]) => <div className={styles.statCard} key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
          <div className={styles.dashboardGrid}>
            <Panel title="Schnellzugriff" description="Häufig bearbeitete Bereiche"><div className={styles.quickGrid}>{sections.slice(2,8).map(item => <button key={item.id} onClick={() => changeSection(item.id)}><span><Icon name={item.icon}/></span><strong>{item.label}</strong><Icon name="chevron" size={16}/></button>)}</div></Panel>
            <Panel title="Website-Status"><div className={styles.health}><div><span className={styles.healthDot}/><p><strong>Website ist online</strong><small>Letzte Aktualisierung: heute</small></p></div><div><span>CMS-Status</span><strong>Vorlage</strong></div><div><span>Sprache</span><strong>Deutsch</strong></div><div><span>SEO-Status</span><strong className={styles.good}>Gut</strong></div></div></Panel>
          </div>
          <Panel title="Zuletzt bearbeitet"><div className={styles.table}><div className={styles.tableHead}><span>Bereich</span><span>Bearbeitet von</span><span>Datum</span><span>Status</span></div>{["Startseite","Kontakt","Impressum"].map((x,i)=><div className={styles.tableRow} key={x}><strong>{x}</strong><span>Administrator</span><span>{i ? "12.08.2026" : "Heute, 10:42"}</span><em>Veröffentlicht</em></div>)}</div></Panel>
        </>}

        {active === "general" && <><Panel title="Unternehmensdaten" description="Diese Informationen werden an mehreren Stellen der Website verwendet."><div className={styles.formGrid}><Field label="Firmenname" value="AM Dienstleistungen GmbH"/><Field label="Slogan" value="Zuverlässig. Professionell. Für Sie."/><Field label="Telefon" value="+49 123 4567890"/><Field label="E-Mail" value="info@am-dienstleistungen.de"/><Field wide label="Adresse" value="Musterstraße 123, 12345 Musterstadt"/></div></Panel><MediaUpload title="Logo & Favicon"/></>}

        {active === "home" && <><Panel title="Hero-Bereich" description="Der erste sichtbare Bereich Ihrer Startseite."><div className={styles.formGrid}><Field wide label="Kleine Überschrift" value="Ihr Partner für alle Dienstleistungen"/><Field label="Titel – Zeile 1" value="ZUVERLÄSSIG."/><Field label="Titel – Zeile 2" value="PROFESSIONELL."/><Field wide label="Hervorgehobene Zeile" value="FÜR SIE."/><Field wide multiline label="Beschreibung" value="Reinigung, Gebäudeservice, Hausmeisterservice, Gartenpflege und Transport – zuverlässig aus einer Hand."/><Field label="Primärer Button" value="Unsere Leistungen"/><Field label="Sekundärer Button" value="Kontakt aufnehmen"/></div></Panel><MediaUpload title="Hero-Bild / Hintergrund"/><Panel title="Kennzahlen" action={<AddButton label="Kennzahl hinzufügen"/>}><Cards items={["100+ · Zufriedene Kunden","250+ · Abgeschlossene Projekte","5+ · Jahre Erfahrung","100% · Zuverlässigkeit"]}/></Panel></>}

        {active === "services" && <Panel title="Leistungen verwalten" description="Reihenfolge, Titel, Icon und Beschreibung der Leistungen bearbeiten." action={<AddButton label="Leistung hinzufügen"/>}><Cards items={services} detailed/></Panel>}
        {active === "about" && <><Panel title="Über-uns-Inhalt"><div className={styles.formGrid}><Field label="Kleine Überschrift" value="Über uns"/><Field label="Titel" value="Qualität, auf die Sie sich verlassen können"/><Field wide multiline label="Beschreibung" value="AM Dienstleistungen GmbH ist Ihr kompetenter Partner für vielseitige Dienstleistungen rund um Gebäude, Außenanlagen und Transport."/></div></Panel><MediaUpload title="Bild des Über-uns-Bereichs"/><Panel title="Vorteile" action={<AddButton label="Vorteil hinzufügen"/>}><Cards items={["Erfahrenes Team","Zuverlässig","Kundennah"]}/></Panel></>}
        {active === "references" && <><Panel title="Referenzen & Slider" description="Projekte hinzufügen, sortieren oder ausblenden." action={<AddButton label="Referenz hinzufügen"/>}><div className={styles.mediaGrid}>{services.map((name,i)=><div className={styles.mediaCard} key={name}><div className={styles.mediaPlaceholder}><Icon name="image" size={28}/><span>Bild auswählen</span></div><div><strong>{name}</strong><span>Projekt {i+1}</span></div><button>•••</button></div>)}</div></Panel><Panel title="Slider-Einstellungen"><div className={styles.formGrid}><Field label="Autoplay (Sekunden)" value="5"/><Field label="Elemente pro Ansicht" value="3"/></div><Toggle label="Endlos wiederholen"/><Toggle label="Pfeile und Punkte anzeigen"/></Panel></>}
        {active === "media" && <Panel title="Medienbibliothek" description="Bilder hochladen und auf der Website wiederverwenden." action={<AddButton label="Dateien hochladen"/>}><div className={styles.dropzone}><Icon name="upload" size={32}/><strong>Bilder hier ablegen</strong><span>JPG, PNG, WebP oder SVG · maximal 10 MB</span><button>Dateien auswählen</button></div><div className={styles.library}>{["logo192.jpg","logo512.jpg","logo1272.jpg","logo1600.jpg"].map(file=><div key={file}><img src={`/${file}`} alt=""/><span>{file}</span></div>)}</div></Panel>}
        {active === "navigation" && <><Panel title="Hauptnavigation" action={<AddButton label="Menüpunkt hinzufügen"/>}><Cards items={["Home · #home","Leistungen · #leistungen","Über uns · #ueber-uns","Referenzen · #referenzen","Kontakt · #kontakt"]}/></Panel><Panel title="Footer"><div className={styles.formGrid}><Field wide label="Footer-Text" value="Zuverlässig. Professionell. Für Sie."/><Field label="Copyright" value="© AM Dienstleistungen GmbH"/><Field label="Zusatzlink" value="Datenschutz · Impressum"/></div></Panel></>}
        {active === "contact" && <><Panel title="Kontaktbereich"><div className={styles.formGrid}><Field label="Kleine Überschrift" value="Bereit für ein sauberes Ergebnis?"/><Field label="Titel" value="Wir sind für Sie da!"/><Field wide multiline label="Beschreibung" value="Beschreiben Sie uns kurz Ihr Anliegen. Wir melden uns schnellstmöglich bei Ihnen."/><Field label="Button-Text" value="Anfrage senden"/><Field label="Empfänger-E-Mail" value="info@am-dienstleistungen.de"/></div></Panel><Panel title="Formularfelder"><Cards items={["Name · Pflichtfeld","E-Mail · Pflichtfeld","Telefon · Optional","Leistung · Auswahl","Nachricht · Pflichtfeld"]}/></Panel></>}
        {active === "legal" && <><Panel title="Impressum" description="Rechtliche Anbieterkennzeichnung bearbeiten."><RichText value="Angaben gemäß § 5 TMG\n\nAM Dienstleistungen GmbH\nMusterstraße 123\n12345 Musterstadt\n\nVertreten durch: ..."/></Panel><Panel title="Datenschutzerklärung" description="Datenschutzinformationen und Hinweise zur Datenverarbeitung."><RichText value="Datenschutzerklärung\n\n1. Datenschutz auf einen Blick\n2. Verantwortliche Stelle\n3. Datenerfassung auf dieser Website\n..."/></Panel></>}
        {active === "seo" && <><Panel title="Allgemeine SEO-Einstellungen"><div className={styles.formGrid}><Field wide label="Seitentitel" value="AM Dienstleistungen GmbH" hint="Empfohlen: maximal 60 Zeichen"/><Field wide multiline label="Meta-Beschreibung" value="Reinigung, Gebäudeservice, Hausmeisterservice, Gartenpflege und Transport." hint="Empfohlen: 150–160 Zeichen"/><Field wide label="Schlüsselwörter" value="Reinigung, Gebäudeservice, Hausmeisterservice, Gartenpflege"/></div></Panel><MediaUpload title="Social-Media-Vorschaubild (Open Graph)"/><Panel title="Suchmaschinen"><Toggle label="Website für Suchmaschinen freigeben"/><Toggle label="Sitemap automatisch erstellen"/></Panel></>}
      </div>
    </main>
  </div>;
}

function AddButton({ label }: { label: string }) { return <button className={styles.add}><Icon name="plus" size={17}/>{label}</button>; }
function Cards({ items, detailed = false }: { items: string[]; detailed?: boolean }) { return <div className={styles.itemList}>{items.map((item,i)=><div className={styles.item} key={item}><span className={styles.drag}>⠿</span><span className={styles.itemIcon}>{detailed ? ["◉","▣","⌂","♧","▰"][i] : i+1}</span><div><strong>{item}</strong>{detailed && <small>Beschreibung und Einstellungen bearbeiten</small>}</div><button>Bearbeiten</button><button className={styles.more}>•••</button></div>)}</div>; }
function Toggle({ label }: { label: string }) { return <label className={styles.toggleRow}><span>{label}</span><input type="checkbox" defaultChecked/><i/></label>; }
function MediaUpload({ title }: { title: string }) { return <Panel title={title}><div className={styles.mediaField}><div><Icon name="image" size={30}/></div><p><strong>Aktuelles Bild</strong><span>JPG, PNG, WebP oder SVG</span></p><button><Icon name="upload" size={17}/> Bild ändern</button></div></Panel>; }
function RichText({ value }: { value: string }) { return <div className={styles.editor}><div className={styles.toolbar}><button><b>B</b></button><button><i>I</i></button><button>H1</button><button>H2</button><button>☷</button><button>🔗</button></div><textarea defaultValue={value} rows={12}/></div>; }
