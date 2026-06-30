import Link from "next/link";
const menuItems = [
  "Dashboard",
  "Kunden",
  "Rechnungen",
  "Angebote",
  "Lieferscheine",
  "Lager",
  "Offene Posten",
  "Einstellungen",
];

export default function Home() {
  return (
    <main style={styles.app}>
      <aside style={styles.sidebar}>
        <div>
          <h1 style={styles.logo}>SixtyERP</h1>
          <p style={styles.subtitle}>Sixty&apos;s Lager & Logistik</p>
        </div>

        <nav style={styles.nav}>
          {menuItems.map((item) => {
  const href =
    item === "Dashboard" ? "/" :
    item === "Kunden" ? "/customers" :
    item === "Rechnungen" ? "/invoices" :
    "#";

  return (
    <Link key={item} href={href} style={styles.navButton}>
      {item}
    </Link>
  );
})}
        </nav>
      </aside>

      <section style={styles.content}>
        <header style={styles.header}>
          <div>
            <h2 style={styles.title}>Dashboard</h2>
            <p style={styles.description}>Übersicht deiner wichtigsten Kennzahlen</p>
          </div>

          <button style={styles.primaryButton}>Neue Rechnung</button>
        </header>

        <div style={styles.grid}>
          <DashboardCard title="Offene Rechnungen" value="0" />
          <DashboardCard title="Überfällig" value="0" />
          <DashboardCard title="Umsatz Monat" value="0,00 €" />
          <DashboardCard title="Kunden" value="0" />
        </div>

        <div style={styles.panel}>
          <h3 style={styles.panelTitle}>Letzte Aktivitäten</h3>
          <p style={styles.emptyText}>Noch keine Daten vorhanden.</p>
        </div>
      </section>
    </main>
  );
}

function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <div style={styles.card}>
      <p style={styles.cardTitle}>{title}</p>
      <strong style={styles.cardValue}>{value}</strong>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: "100vh",
    display: "flex",
    background: "#0f172a",
    color: "#e5e7eb",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: 280,
    padding: 24,
    background: "#020617",
    borderRight: "1px solid #1e293b",
  },
  logo: {
    fontSize: 28,
    margin: 0,
    color: "#22d3ee",
  },
  subtitle: {
    marginTop: 6,
    color: "#94a3b8",
    fontSize: 14,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 36,
  },
  navButton: {
    padding: "12px 14px",
    textAlign: "left",
    borderRadius: 10,
    border: "1px solid #1e293b",
    background: "#0f172a",
    color: "#e5e7eb",
    cursor: "pointer",
    fontSize: 15,
  },
  content: {
    flex: 1,
    padding: 32,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },
  title: {
    fontSize: 32,
    margin: 0,
  },
  description: {
    marginTop: 6,
    color: "#94a3b8",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 18,
  },
  card: {
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: 16,
    padding: 22,
  },
  cardTitle: {
    margin: 0,
    color: "#94a3b8",
  },
  cardValue: {
    display: "block",
    marginTop: 14,
    fontSize: 30,
  },
  panel: {
    marginTop: 24,
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: 16,
    padding: 22,
  },
  panelTitle: {
    margin: 0,
    fontSize: 20,
  },
  emptyText: {
    marginTop: 12,
    color: "#94a3b8",
  },
};