"use client";

import { useState } from "react";

type CustomerFormProps = {
  onSaved: () => void;
};

export default function CustomerForm({ onSaved }: CustomerFormProps) {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await fetch("/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        contact,
        street,
        zip,
        city,
        email,
        phone,
      }),
    });

    setCompany("");
    setContact("");
    setStreet("");
    setZip("");
    setCity("");
    setEmail("");
    setPhone("");

    onSaved();
    if (!response.ok) {
  alert("Kunde konnte nicht gespeichert werden.");
  return;
}
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Neuer Kunde</h2>

      <input style={styles.input} placeholder="Firma" value={company} onChange={(e) => setCompany(e.target.value)} required />
      <input style={styles.input} placeholder="Ansprechpartner" value={contact} onChange={(e) => setContact(e.target.value)} />
      <input style={styles.input} placeholder="Straße" value={street} onChange={(e) => setStreet(e.target.value)} />
      <input style={styles.input} placeholder="PLZ" value={zip} onChange={(e) => setZip(e.target.value)} />
      <input style={styles.input} placeholder="Ort" value={city} onChange={(e) => setCity(e.target.value)} />
      <input style={styles.input} placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input style={styles.input} placeholder="Telefon" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button type="submit" style={styles.button}>
        Kunde speichern
      </button>
    </form>
  );
}

const styles: Record<string, React.CSSProperties> = {
  form: {
    marginBottom: 24,
    padding: 20,
    borderRadius: 16,
    background: "#111827",
    border: "1px solid #1f2937",
    display: "grid",
    gap: 12,
    maxWidth: 520,
  },
  title: {
    margin: 0,
    marginBottom: 8,
  },
  input: {
    padding: 12,
    borderRadius: 10,
    border: "1px solid #334155",
    background: "#020617",
    color: "#e5e7eb",
  },
  button: {
    marginTop: 8,
    padding: "12px 16px",
    borderRadius: 10,
    border: "none",
    background: "#22d3ee",
    color: "#020617",
    fontWeight: "bold",
    cursor: "pointer",
  },
};