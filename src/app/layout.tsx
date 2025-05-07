import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import RootLayout from "@/components/ui/Layout";

export const metadata: Metadata = {
  title: "Brayan Portfolio",
  description: "Desenvolvedor e programador brayanlolv são paulo e guarulhos. Ia, web, sites, script de automaçãa, escritório, aplicativos de computador entre outros",  
  verification:{
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION_KEY
  }
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <RootLayout>
      {children}
      <Analytics/>
    </RootLayout>
  )
}

