import "./dashboard.css";

export const metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s | Admin Dashboard",
  },
  description: "This is the admin dashboard page where you can manage your application.",
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
