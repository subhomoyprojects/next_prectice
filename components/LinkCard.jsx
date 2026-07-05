import Link from "next/link";

export default function LinkCard({ title, description, href }) {
  return (
    <Link href={href} className="link-card">
      <p className="section-label">{title}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}
