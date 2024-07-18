import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resume Builder App",
  description: "Create and share professional resumes effortlessly using AI. Generate content, download resumes, and easily manage your profile.",
  keywords: "resume builder, AI resume generator, download resume, share profile, professional resume, CV builder, create resume, resume template, online resume",
  author: "Your Name or Your Company Name",
 };


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
