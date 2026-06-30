type DashboardCardProps = {
  title: string;
  value: string | number;
  color?: string;
};

export default function DashboardCard({
  title,
  value,
  color = "#22d3ee",
}: DashboardCardProps) {
  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: 12,
        padding: 20,
        border: "1px solid #334155",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: "#94a3b8",
          fontSize: 14,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          marginTop: 12,
          marginBottom: 0,
          fontSize: 30,
          fontWeight: "bold",
          color,
        }}
      >
        {value}
      </p>
    </div>
  );
}