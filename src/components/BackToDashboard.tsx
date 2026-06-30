import Link from "next/link";

export default function BackToDashboard() {
  return (
    <Link
      href="/"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 20,
        color: "#22d3ee",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "15px",
      }}
    >
      ← Zurück zum Dashboard
    </Link>
  );
}