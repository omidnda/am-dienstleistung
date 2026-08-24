import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Impressum | AM Dienstleistungen GmbH", description: "Anbieterkennzeichnung der AM Dienstleistungen GmbH." };

export default function ImpressumPage() {
  return <LegalPage title="Impressum" intro="Anbieterkennzeichnung und rechtliche Informationen.">
    <h2>Angaben gemäß § 5 DDG</h2>
    <address><strong>AM Dienstleistungen GmbH</strong><br />Neckarstraße 8<br />64625 Bensheim<br />Deutschland</address>
    <h2>Kontakt</h2><p>Telefon: <a href="tel:+491635334440">+49 (0) 163 / 53 34 44 0</a><br />E-Mail: <a href="mailto:info@tmdienstleistungwest.de">info@tmdienstleistungwest.de</a></p>
    <h2>Vertretung und Registerangaben</h2><p>Die vertretungsberechtigte Geschäftsführung sowie Handelsregister-, Registergerichts- und Umsatzsteuerangaben müssen vor der Veröffentlichung anhand der verbindlichen Unternehmensunterlagen ergänzt werden.</p>
    <h2>Haftung für Inhalte</h2><p>Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nur im Rahmen der gesetzlichen Vorgaben.</p>
    <h2>Haftung für Links</h2><p>Unser Angebot kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
    <h2>Urheberrecht</h2><p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Eine Nutzung außerhalb der gesetzlichen Grenzen bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.</p>
  </LegalPage>;
}
