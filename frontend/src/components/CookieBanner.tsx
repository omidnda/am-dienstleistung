"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Consent = { necessary: true; analytics: boolean; updatedAt: string };

const STORAGE_KEY = "am-cookie-consent-v1";

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) as Consent : null;
      setConsent(parsed);
      setAnalytics(parsed?.analytics ?? false);
    } catch {
      setConsent(null);
    }
  }, []);

  function save(nextAnalytics: boolean) {
    const next: Consent = { necessary: true, analytics: nextAnalytics, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setConsent(next);
    setAnalytics(nextAnalytics);
    setSettingsOpen(false);
  }

  if (consent === undefined) return null;

  if (consent && !settingsOpen) {
    return <button className="cookie-settings-trigger" type="button" onClick={() => setSettingsOpen(true)}>Cookie-Einstellungen</button>;
  }

  return <div className="cookie-layer" role="region" aria-label="Cookie-Einstellungen">
    <div className="cookie-banner">
      <div className="cookie-copy"><span className="cookie-icon" aria-hidden="true">◉</span><div><h2>Ihre Privatsphäre ist uns wichtig</h2><p>Wir verwenden technisch notwendige Speicherungen für den Betrieb dieser Website. Optionale Dienste werden nur mit Ihrer Einwilligung aktiviert. Weitere Informationen finden Sie in unserer <Link href="/datenschutz">Datenschutzerklärung</Link>.</p></div></div>
      {settingsOpen && <div className="cookie-options">
        <div><span><strong>Notwendig</strong><small>Speichert Ihre Consent-Auswahl und ermöglicht grundlegende Funktionen.</small></span><input type="checkbox" checked disabled aria-label="Notwendige Speicherung ist immer aktiv" /></div>
        <label><span><strong>Analyse</strong><small>Hilft uns, die Nutzung der Website zu verstehen. Derzeit ist kein Analysedienst eingebunden.</small></span><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /></label>
      </div>}
      <div className="cookie-actions">
        {!settingsOpen && <button type="button" className="cookie-secondary" onClick={() => setSettingsOpen(true)}>Einstellungen</button>}
        <button type="button" className="cookie-secondary" onClick={() => save(false)}>Nur notwendige</button>
        {settingsOpen ? <button type="button" className="cookie-primary" onClick={() => save(analytics)}>Auswahl speichern</button> : <button type="button" className="cookie-primary" onClick={() => save(true)}>Alle akzeptieren</button>}
      </div>
    </div>
  </div>;
}
