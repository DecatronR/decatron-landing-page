import { HeroSection } from "@/components/Content/HeroSection";
import { ContactUs } from "@/components/Content/ContactUs";
import { Products } from "@/components/Content/Products";
import { HowItWork } from "@/components/Content/HowItWork";
import { CallToAction } from "@/components/Content/CallToAction";
import { About } from "@/components/Content/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decatron",
  description: "The easy way to manage your real estate inspections",
};

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <About />
      {/* <ClientsSection /> */}
      {/* <Products /> */}
      <HowItWork />
      <CallToAction />
      {/* <Testimonials /> */}
      <ContactUs />
    </main>
  );
}
