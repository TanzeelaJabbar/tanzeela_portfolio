import { Geist, Geist_Mono , Outfit } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/globals.css";
import "./css//color.css";
import "./css/pixelsize.css";
import "./css/typography.css";

import Sidebar from "@/components/organisms/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tanzeela Jabar",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
