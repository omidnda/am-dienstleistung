import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Datenschutz | AM Dienstleistungen GmbH", description: "Datenschutzhinweise der AM Dienstleistungen GmbH." };

export default function DatenschutzPage() {
  return <LegalPage title="Datenschutzerklärung" intro="Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.">
    <h2>1. Verantwortlicher</h2><address><strong>AM Dienstleistungen GmbH</strong><br />Neckarstraße 8<br />64625 Bensheim<br />Deutschland<br /><a href="mailto:info@tmdienstleistungwest.de">info@tmdienstleistungwest.de</a><br /><a href="tel:+491635334440">+49 (0) 163 / 53 34 44 0</a></address>
    <h2>2. Allgemeine Hinweise</h2><p>Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den geltenden Datenschutzvorschriften. Personenbezogene Daten sind Informationen, mit denen Sie persönlich identifiziert werden können.</p>
    <h2>3. Bereitstellung der Website und Server-Logfiles</h2><p>Beim Aufruf der Website können durch den Hosting-Anbieter technisch erforderliche Daten verarbeitet werden, insbesondere IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite, übertragene Datenmenge, Browser und Betriebssystem. Die Verarbeitung dient dem sicheren und störungsfreien Betrieb der Website und beruht auf Art. 6 Abs. 1 lit. f DSGVO.</p>
    <h2>4. Kontaktaufnahme</h2><p>Wenn Sie uns per E-Mail, Telefon oder Kontaktformular kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage der Vertragsanbahnung dient, andernfalls Art. 6 Abs. 1 lit. f DSGVO.</p>
    <h2>5. Speicherdauer</h2><p>Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Danach werden die Daten gelöscht oder anonymisiert.</p>
    <h2>6. Ihre Rechte</h2><p>Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>
    <h2>7. Beschwerderecht</h2><p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.</p>
    <h2>8. Consent-Einstellungen und externe Dienste</h2><p>Ihre Auswahl im Consent-Banner wird ausschließlich lokal in Ihrem Browser gespeichert, damit die Website Ihre Entscheidung bei einem späteren Besuch berücksichtigen kann. Diese Website setzt in der derzeitigen Ausführung keine Analyse-, Marketing- oder Social-Media-Trackingdienste ein. Optionale Kategorien sind standardmäßig deaktiviert. Sollten später zusätzliche Dienste oder nicht notwendige Cookies eingebunden werden, wird diese Datenschutzerklärung vor deren Einsatz entsprechend aktualisiert und eine erforderliche Einwilligung eingeholt.</p>
    <h2>9. Stand</h2><p>Stand dieser Datenschutzerklärung: August 2026.</p>
  </LegalPage>;
}
