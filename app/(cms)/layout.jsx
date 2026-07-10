import Navbar from "../../components/Navbar";
import "./globals.css";
import { Inter, Oswald, Work_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  preload: true,
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
  preload: true,
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-work-sans",
  preload: true,
});

export const metadata = {
  title: "Learn Next.js",
  description: "A beginner-friendly Next.js starter project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} ${workSans.variable}`}>
        <div className="page-shell">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
