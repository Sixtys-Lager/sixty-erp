"use client";

import CustomerForm from "@/components/CustomerForm";
import { useEffect, useState } from "react";
import BackToDashboard from "@/components/BackToDashboard";
import { getCustomers, type Customer } from "@/services/customers";
import Link from "next/link";
type Customer = {
  id?: number;
  company: string;
  contact: string;
  city: string;
  customerNo: string;
  invoices: number;
  templates: number;
};

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  async function reloadCustomers() {
    const data = await getCustomers();
    setCustomers(data);
  }

  useEffect(() => {
    reloadCustomers().catch(console.error);
  }, []);

  return (
    <main style={styles.page}>
      <BackToDashboard />
      <CustomerForm onSaved={reloadCustomers} />
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>Kunden</h1>
          <p style={styles.subtitle}>Kundenverwaltung für Sixty&apos;s Lager & Logistik</p>
        </div>
        <button style={styles.primaryButton}>+ Neuer Kunde</button>
      </header>

      <input style={styles.search} placeholder="Kunden suchen..." />

      <section style={styles.table}>
        <div style={styles.tableHeader}>
          <span>Firma</span>
          <span>Ansprechpartner</span>
          <span>Ort</span>
          <span>KD-Nr.</span>
          <span>Rechnungen</span>
        </div>

        {customers.map((customer) => (
          <div key={customer.id} style={styles.row}>
            <strong>{customer.company}</strong>
            <span>{customer.contact}</span>
            <span>{customer.city}</span>
            <span>{customer.customerNumber}</span>
            <span style={styles.badge}>{0} Rechnung(en)</span>
          </div>
        ))}
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#e5e7eb",
    padding: 32,
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    margin: 0,
    fontSize: 34,
  },
  subtitle: {
    color: "#94a3b8",
    marginTop: 8,
  },
  primaryButton: {
    background: "#22d3ee",
    color: "#020617",
    border: "none",
    borderRadius: 12,
    padding: "12px 18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  search: {
    width: 320,
    padding: 14,
    borderRadius: 10,
    border: "1px solid #334155",
    background: "#111827",
    color: "#e5e7eb",
    marginBottom: 20,
  },
  table: {
    border: "1px solid #1f2937",
    borderRadius: 16,
    overflow: "hidden",
    background: "#111827",
  },
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "2fr 1.5fr 1.5fr 0.8fr 1.2fr",
    gap: 16,
    padding: 16,
    background: "#020617",
    color: "#94a3b8",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 12,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "2fr 1.5fr 1.5fr 0.8fr 1.2fr",
    gap: 16,
    padding: 16,
    borderTop: "1px solid #1f2937",
    alignItems: "center",
  },
  badge: {
    background: "#22d3ee",
    color: "#020617",
    padding: "6px 10px",
    borderRadius: 999,
    fontWeight: "bold",
    width: "fit-content",
    },
 backLink: {
  display: "inline-block",
  marginBottom: 20,
  color: "#22d3ee",
  textDecoration: "none",
  fontWeight: "bold",
},
};
