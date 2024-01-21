import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { MenuProvider } from "@/components/Provider";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Shingala",
  description: "Shubham Shingala Portfolio, Project and Skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuProvider>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 pl-0 lg:pl-[300px]">
                <Navbar />  
                {children}
            </main>
          </div>  
        </MenuProvider>
      </body>
    </html>
  );
}
