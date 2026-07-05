import style from "./navbar.module.css";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/topics", label: "Topics" },
  { href: "/counter", label: "Counter" },
];

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link href="/" className={style.brand}>
        Learn Next.js
      </Link>

      <div className={style["nav-links"]}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
