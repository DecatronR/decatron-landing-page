"use client";
import "./globals.css";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/images/favicons/favicon.ico" />
      </Head>
      <body className={""}>
        <NavigationBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}