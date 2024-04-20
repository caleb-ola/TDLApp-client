"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import PrelineScript from "@/components/preline/PrelineScript";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProtectedRoute from "@/components/route-guards/authProtectedRoute";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "TDLApp - A",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProtectedRoute>
          <Header />
          {children}
          <Footer />
        </AuthProtectedRoute>
      </body>
      <PrelineScript />
    </html>
  );
}
