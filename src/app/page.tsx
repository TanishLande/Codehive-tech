"use client"; // Required since ServicesSection uses client-side features
import { BenefitsSection } from "@/components/benefits-section";
import Contact from "@/components/contact";
import { FaqSection } from "@/components/faq-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import Footer from "@/components/footerr";
import { ServicesSection } from "@/components/services-section"; // Points to the carousel version
import ProcessSection from "@/components/steps";
import Courses from "@/components/courses";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <BenefitsSection />
        <Courses />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}