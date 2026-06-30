"use client";

import { useEffect, useState } from "react";
import type { Customer } from "@/services/customers";

type CustomerFormProps = {
  customer?: Customer | null;
  onSaved: () => void;
};

export default function CustomerForm({ customer, onSaved }: CustomerFormProps) {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setCompany(customer?.company ?? "");
    setContact(customer?.contact ?? "");
    setStreet(customer?.street ?? "");
    setZip(customer?.zip ?? "");
    setCity(customer?.city ?? "");
    setEmail(customer?.email ?? "");
    setPhone(customer?.phone ?? "");
  }, [customer]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const url = customer ? `/api/customers/${customer.id}` : "/api/customers";
    const method = customer ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, contact, street, zip, city, email, phone }),
    });

    if (!response.ok) {
      alert("Kunde konnte nicht gespeichert werden.");
      return;
    }

    setCompany("");
    setContact("");
    setStreet("");
    setZip("");
    setCity("");
    setEmail("");
    setPhone("");

    onSaved();
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>{customer ? "Kunde bearbeiten" : "Neuer Kunde"}</h2>

      <input style={styles.input} placeholder="Firma" value={company} onChange={(e) => setCompany(e.target.value)} required />
      <input style={styles.input} placeholder="Ansprechpartner" value={contact} onChange={(e) => setContact(e.target.value)} />
      <input style={styles.input} placeholder="Straße" value={street} onChange={(e) => setStreet(e.target.value)} />
      <input style={styles.input} placeholder="PLZ" value={zip} onChange={(e) => setZip(e.target.value)} />
      <input style={styles.input} placeholder="Ort" value={city} onChange={(e) => setCity(e.target.value)} />
      <input style={styles.input} placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input style={styles.input} placeholder="Telefon" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button type="submit" style={styles.button}>
        {customer ? "Änderungen speichern" : "Kunde speichern"}
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