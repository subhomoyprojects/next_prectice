import Navbar from "../../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Learn Next.js",
  description: "A beginner-friendly Next.js starter project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
