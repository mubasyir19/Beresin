import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/organism/Sidebar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beresin | Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen`}>
        <Sidebar />
        <main className="flex flex-1">
          <div className="bg-dark-blue flex-1 p-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
