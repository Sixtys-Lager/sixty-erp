const customers = [
  {
    company: "Gericke Logistik GmbH",
    contact: "Frau Scherer",
    city: "09337 Hohenstein-Ernstthal",
    customerNo: "0112",
    invoices: 0,
    templates: 1,
  },
  {
    company: "Scherdel Marienberg GmbH",
    contact: "-",
    city: "09496 Marienberg",
    customerNo: "0116",
    invoices: 0,
    templates: 1,
  },
  {
    company: "Diamant Fahrradwerke GmbH",
    contact: "Supervisor K-Lager",
    city: "09232 Hartmannsdorf",
    customerNo: "115",
    invoices: 0,
    templates: 1,
  },
  {
    company: "Autohaus Schmidt GmbH",
    contact: "Jens Schmidt",
    city: "09337 Bernsdorf OT Hermsdorf",
    customerNo: "158",
    invoices: 0,
    templates: 1,
  },
  {
    company: "HBS Homecare-Bestell-Service Franziska Richter e.K.",
    contact: "-",
    city: "09217 Burgstädt",
    customerNo: "175",
    invoices: 1,
    templates: 1,
  },
];

export default function CustomersPage() {
  return (
    <main style={styles.page}>
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
          <div key={customer.customerNo} style={styles.row}>
            <strong>{customer.company}</strong>
            <span>{customer.contact}</span>
            <span>{customer.city}</span>
            <span>{customer.customerNo}</span>
            <span style={styles.badge}>{customer.invoices} Rechnung(en)</span>
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
};