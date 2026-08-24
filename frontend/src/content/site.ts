export type Service = { title: string; description: string; image: string; benefits: string[] };

export type SiteContent = {
  company: { name: string; tagline: string; phone: string; email: string; address: string };
  nav: { label: string; href: string }[];
  hero: { eyebrow: string; titleLines: string[]; highlightedLine: string; description: string; primaryCta: string; secondaryCta: string };
  services: Service[];
  sustainability: { eyebrow: string; title: string; text: string };
  about: { eyebrow: string; title: string; text: string; points: { title: string; text: string }[] };
  references: { eyebrow: string; title: string; items: { title: string; logo: string }[] };
  careers: { eyebrow: string; title: string; text: string; jobs: { title: string; description: string; image: string }[] };
  contact: { eyebrow: string; title: string; text: string; button: string };
};

const siteContent: SiteContent = {
  company: {
    name: "AM Dienstleistungen GmbH",
    tagline: "Fokus auf Gäste, wir übernehmen den Rest.",
    phone: "+49 (0) 163 / 53 34 44 0",
    email: "info@tmdienstleistungwest.de",
    address: "Neckarstraße 8, 64625 Bensheim",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Service", href: "/service" },
    { label: "Karriere", href: "/karriere" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  hero: {
    eyebrow: "Professionelle Hoteldienstleistungen",
    titleLines: ["IHR PARTNER FÜR", "HOTEL-SERVICE"],
    highlightedLine: "MANAGEMENT.",
    description: "Als AM Dienstleistungen GmbH sind wir Ihr zuverlässiger Partner für erstklassige Hotel-Dienstleistungen.",
    primaryCta: "Unser Service",
    secondaryCta: "Kontakt aufnehmen",
  },
  services: [
    { title: "Zimmerreinigung", description: "Gründliche und schnelle Zimmerreinigung für höchste Hygieneansprüche.", image: "/images/Startseite-Unser-Service-Zimmerreinigung.webp", benefits: ["Gründliche Sauberkeit", "Hygienische Standards", "Komfortable Atmosphäre"] },
    { title: "Glasreinigung", description: "Kristallklare und streifenfreie Glasreinigung für ein perfektes Erscheinungsbild.", image: "/images/Startseite-Unser-Service-Glasreinigung.webp", benefits: ["Streifenfreie Sauberkeit", "Verbesserte Sicht", "Längere Lebensdauer der Fenster"] },
    { title: "Zimmer-Check", description: "Perfekte Zimmer für Gäste: Sauberkeit, Funktion, Komfort – alles gecheckt!", image: "/images/Startseite-Unser-Service-Zimmer-Check.webp", benefits: ["Garantierte Sauberkeit", "Funktionsprüfung aller Einrichtungen", "Zufriedenere Gäste"] },
    { title: "Public Area", description: "Sauberkeit und Ordnung in öffentlichen Bereichen für ein angenehmes Ambiente.", image: "/images/Startseite-Unser-Service-Public-Area.webp", benefits: ["Gepflegtes Erscheinungsbild", "Positives Gästeerlebnis", "Angenehme Atmosphäre"] },
  ],
  sustainability: {
    eyebrow: "DIN EN ISO 9001 & 14001 – zertifiziert für Qualität und Umwelt",
    title: "Nachhaltige Reinigung",
    text: "Wir reinigen umweltbewusst, hygienisch und gesundheitsfreundlich: mit Ecolabel-Produkten, Universalreiniger auf Enzym-Basis, Sanitärreiniger mit Milchsäure und minimaler Dosierung. Unsere Verfahren sind VOC-frei, allergikerfreundlich und materialschonend. Eine detaillierte Reinigungsanalyse und ein optimierter Plan sorgen für bessere Hygiene, weniger Wasser, Chemikalien, Plastik und CO₂ sowie geringeren Verschleiß.",
  },
  about: {
    eyebrow: "Das Unternehmen",
    title: "Fokus auf Gäste, wir übernehmen den Rest",
    text: "Seit unserer Gründung orientieren wir uns konsequent an den höchsten Ansprüchen unserer Auftraggeber. Unser Fokus liegt auf Hotels und Personaldienstleistungen. Dadurch haben wir die Expertise entwickelt, Dienstleistungen anzubieten, die den spezifischen Anforderungen unserer Kunden gerecht werden.",
    points: [
      { title: "Unsere Vision", text: "Wir gestalten die Zukunft und schaffen unvergessliche Erlebnisse für Ihre Gäste." },
      { title: "Unsere Werte", text: "Qualität, Nachhaltigkeit und Verantwortungsbewusstsein bestimmen unser Handeln." },
      { title: "Unsere Philosophie", text: "„Höchste Qualität und zuverlässiger Service für zufriedene Kunden.“ Unser oberstes Ziel ist es, die Erwartungen und Bedürfnisse unserer Kunden zu erfüllen, während wir gleichzeitig höchste Qualitätsstandards einhalten. Durch eine enge und vertrauensvolle Zusammenarbeit streben wir langfristige Partnerschaften an. Kontinuierlich arbeiten wir an der Weiterentwicklung und Optimierung unserer Dienstleistungen, um den sich wandelnden Anforderungen unserer Kunden gerecht zu werden." },
    ],
  },
  references: {
    eyebrow: "Erfolgreiche Partnerschaften",
    title: "Hotels, die auf unseren Service vertrauen",
    items: [
      { title: "Premier Inn", logo: "/partners-log/premierin-hotel.png" },
      { title: "Holiday Inn Express", logo: "/partners-log/an-ihg-hotel.jpeg" },
      { title: "Achat Hotels", logo: "/partners-log/achat_hotels.png" },
      { title: "LOGINN Hotels", logo: "/partners-log/loginn_hotel.png" },
      { title: "BOLD Hotels", logo: "/partners-log/bold_hotel.png" },
    ],
  },
  careers: {
    eyebrow: "Karriere bei AM Dienstleistungen",
    title: "Wir suchen talentierte Mitarbeiter!",
    text: "Entdecken Sie Ihre Karriere-Chancen bei AM Dienstleistungen GmbH.",
    jobs: [
      { title: "Bereichsleiter (m/w/d)", description: "Zielorientierte Führungskraft und kommunikativ", image: "/images/Karriere-Seite.jpg" },
      { title: "Büroassistenz (m/w/d)", description: "Organisation, Kommunikation und Sekretariat", image: "/images/Karriere-Seite2.jpg" },
      { title: "Reinigungskraft (m/w/d)", description: "Allgemeine Reinigung der Hotelzimmer", image: "/images/Karriere-Seite4.jpg" },
      { title: "Objektleiter (m/w/d)", description: "Mitarbeiter*innen führen und motivieren", image: "/images/Karriere-Seite6.jpg" },
      { title: "Leitende Hausdame (m/w/d)", description: "Hauswirtschaftliche Leitung, Koordination und Personal", image: "/images/Karriere.jpg" },
      { title: "Küchenreiniger (m/w/d)", description: "Hygiene, Reinigung, Küchenorganisation und Teamarbeit", image: "/images/Karriere2.jpg" },
    ],
  },
  contact: {
    eyebrow: "Wir freuen uns auf Ihre Nachricht",
    title: "Wie können wir Ihnen helfen?",
    text: "Kontaktieren Sie uns jetzt für ein unverbindliches Gespräch über die passende Lösung für Ihr Hotel.",
    button: "Nachricht senden",
  },
};

export async function getSiteContent(): Promise<SiteContent> {
  return siteContent;
}
