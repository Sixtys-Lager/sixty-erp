import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/" },
  { name: "Kunden", href: "/customers" },
  { name: "Rechnungen", href: "/invoices" },
  { name: "Angebote", href: "#" },
  { name: "Lieferscheine", href: "#" },
  { name: "Lager", href: "#" },
  { name: "Offene Posten", href: "#" },
  { name: "Einstellungen", href: "#" },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 260,
        background: "#020617",
        padding: 24,
        borderRight: "1px solid #1e293b",
      }}
    >
      <h1 style={{ color: "#22d3ee", marginBottom: 6 }}>
        SixtyERP
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: 30 }}>
        Sixty&apos;s Lager & Logistik
      </p>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            style={{
              textDecoration: "none",
              color: "white",
              background: "#111827",
              padding: "14px 16px",
              borderRadius: 10,
              border: "1px solid #1f2937",
            }}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}