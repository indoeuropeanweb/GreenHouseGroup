import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from  "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Green House Luxury Home Stay",
  description: "Green House Luxury Homestay Click Here To Book Your Luxury Stay Today!! Book Now Green House Developers Click here To Enquire About Your Dream Home In Mountains. Enquire Now Green House Luxury Homestay Click Here To Book Your Luxury Stay Today!! Book Now Green House Developers Click here To Enquire About Your Dream Home In",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-50 bgimgcus`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
