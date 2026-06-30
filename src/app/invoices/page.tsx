const invoices = [
  {
    number: "100-2026",
    customer: "HBS Homecare-Bestell-Service Franziska Richter e.K.",
    date: "30.06.2026",
    due: "14.07.2026",
    net: "210,08 €",
    gross: "250,00 €",
    status: "Entwurf",
  },
  {
    number: "005-2026",
    customer: "HBS Homecare-Bestell-Service Franziska Richter e.K.",
    date: "29.05.2026",
    due: "12.06.2026",
    net: "292,18 €",
    gross: "347,69 €",
    status: "Versendet",
  },
];

export default function InvoicesPage() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>Rechnungen</h1>
          <p style={styles.subtitle}>Automatische Nummerierung ab 100-2026</p>
        </div>

        <button style={styles.primaryButton}>+ Neue Rechnung</button>
      </header>

      <section style={styles.table}>
        <div style={styles.tableHeader}>
          <span>Nummer</span>
          <span>Kunde</span>
          <span>Datum</span>
          <span>Fällig</span>
          <span>Netto</span>
          <span>Brutto</span>
          <span>Status</span>
        </div>

        {invoices.map((invoice) => (
          <div key={invoice.number} style={styles.row}>
            <strong style={styles.invoiceNumber}>{invoice.number}</strong>
            <span>{invoice.customer}</span>
            <span>{invoice.date}</span>
            <span>{invoice.due}</span>
            <span>{invoice.net}</span>
            <span>{invoice.gross}</span>
            <span style={styles.badge}>{invoice.status}</span>
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
  table: {
    border: "1px solid #1f2937",
    borderRadius: 16,
    overflow: "hidden",
    background: "#111827",
  },
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 2.5fr 1fr 1fr 1fr 1fr 1fr",
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
    gridTemplateColumns: "1fr 2.5fr 1fr 1fr 1fr 1fr 1fr",
    gap: 16,
    padding: 16,
    borderTop: "1px solid #1f2937",
    alignItems: "center",
  },
  invoiceNumber: {
    color: "#22d3ee",
  },
  badge: {
    background: "#1f2937",
    color: "#e5e7eb",
    padding: "6px 10px",
    borderRadius: 999,
    width: "fit-content",
  },
};