import { HeroSection } from "@/components/Content/HeroSection";
import { ContactUs } from "@/components/Content/ContactUs";
import { Features } from "@/components/Content/Features";
import { HowItWork } from "@/components/Content/HowItWork";
import { ProductShowCase } from "@/components/Content/ProductShowCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decatron",
  description: "A landing page for Decatron",
};

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      {/* <ClientsSection /> */}
      <Features />
      <HowItWork />
      <ProductShowCase />
      {/* <Testimonials /> */}
      <ContactUs />
    </main>
  );
}
