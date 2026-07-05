import "./dashboard.css";

export const metadata = {
  title: "Dashboard - Admin Panel",
  description: "This is the admin dashboard page where you can manage your application.",
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
