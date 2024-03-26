import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sign_up_Email from "./components/Sign_up_Email";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Project",
  description: "Making a Online Shop ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Hero/>
        {children}
        <Sign_up_Email/>
        <Footer/>
        </body>
    </html>
  );
}
