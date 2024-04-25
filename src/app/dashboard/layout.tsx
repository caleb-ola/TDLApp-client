import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import PrelineScript from "@/components/preline/PrelineScript";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/route-guards/protectedRoute";
import DashHeader from "@/components/dashboard/DashHeader";
import Sidebar from "@/components/dashboard/Sidebar";

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
    // <ProtectedRoute>
    <html lang="en">
      <body className={inter.className}>
        <ProtectedRoute>
          <DashHeader />
          <Sidebar />
          {children}
        </ProtectedRoute>
      </body>
      <PrelineScript />
    </html>
    // </ProtectedRoute>
  );
}
