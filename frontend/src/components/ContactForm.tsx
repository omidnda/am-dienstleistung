"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <input required placeholder="Name / Firma" aria-label="Name oder Firma" />
        <input required type="email" placeholder="E-Mail" aria-label="E-Mail" />
        <input placeholder="Telefon" aria-label="Telefon" />
        <select defaultValue="" aria-label="Leistung">
          <option value="" disabled>Leistung auswählen</option>
          <option>Zimmerreinigung</option>
          <option>Glasreinigung</option>
          <option>Zimmer-Check</option>
          <option>Public Area</option>
        </select>
      </div>
      <textarea required rows={5} placeholder="Wie können wir Ihnen helfen?" aria-label="Nachricht" />
      <button className="gold-button" type="submit">Nachricht senden <span>→</span></button>
      {sent && <p className="success-note">Danke! Demo-Modus: Später wird das Formular mit dem Backend verbunden.</p>}
    </form>
  );
}
