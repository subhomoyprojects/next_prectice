import "./dashboard.css";

export const metadata = {
  title: "Dashboard - Admin Panel",
  description: "This is the admin dashboard page where you can manage your application.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
  authors: [{ name: "Subhomoy Pal", url: "https://subhomoypal.com" }],
  keywords: ["Next.js", "React", "JavaScript", "Web Development", "Admin Panel", "Dashboard"],
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
