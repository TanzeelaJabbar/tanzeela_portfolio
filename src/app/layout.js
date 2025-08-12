import { Geist, Geist_Mono , Outfit } from "next/font/google";
import "../app/css/globals.css";
import "../app/css/color.css";
import "../app/css/pixelsize.css";
import "../app/css/typography.css";
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
