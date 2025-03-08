"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Designing Section
export function DesigningSection() {
  const cards = designingData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-24 md:py-32 bg-black" id="designing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-sans mb-12 text-center">
          <span className="text-blue-500">Designing</span> Services
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const DesigningContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-white">Crafting stunning visual experiences.</span>{" "}
        Our design team creates responsive, user-focused designs that elevate your brand and captivate your audience.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
        alt="Designing showcase"
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-cover rounded-xl mt-6"
      />
    </div>
  );
};

const designingData = [
  {
    category: "Design",
    title: "Designing",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    content: <DesigningContent />,
  },
];

// Animation Creation Section
export function AnimationCreationSection() {
  const cards = animationData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-24 md:py-32 bg-black" id="animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-sans mb-12 text-center">
          <span className="text-blue-500">Animation Creation</span> Services
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const AnimationContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-white">Bringing ideas to life with motion.</span>{" "}
        From subtle transitions to complex animations, we add dynamic elements that enhance user engagement.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1618005198919-d3d4b3a5a058?q=80&w=2070"
        alt="Animation showcase"
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-cover rounded-xl mt-6"
      />
    </div>
  );
};

const animationData = [
  {
    category: "Animation",
    title: "Animation Creation",
    src: "https://images.unsplash.com/photo-1618005198919-d3d4b3a5a058?q=80&w=2070&auto=format&fit=crop",
    content: <AnimationContent />,
  },
];

// Content Creator Section
export function ContentCreatorSection() {
  const cards = contentData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-24 md:py-32 bg-black" id="content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-sans mb-12 text-center">
          <span className="text-blue-500">Content Creator</span> Services
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const ContentCreatorContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-white">Telling your story with impact.</span>{" "}
        We craft compelling content that resonates with your audience and drives conversions.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1516321310766-779c00d3d2b6?q=80&w=2070"
        alt="Content showcase"
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-cover rounded-xl mt-6"
      />
    </div>
  );
};

const contentData = [
  {
    category: "Content",
    title: "Content Creator",
    src: "https://images.unsplash.com/photo-1516321310766-779c00d3d2b6?q=80&w=2070&auto=format&fit=crop",
    content: <ContentCreatorContent />,
  },
];

// Email Marketing Section
export function EmailMarketingSection() {
  const cards = emailData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-24 md:py-32 bg-black" id="email-marketing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-sans mb-12 text-center">
          <span className="text-blue-500">Email Marketing</span> Services
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const EmailMarketingContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-white">Driving engagement through emails.</span>{" "}
        Strategic email campaigns designed to nurture leads and boost customer retention.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1611162617213-7d673e9e31ca?q=80&w=2070"
        alt="Email Marketing showcase"
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-cover rounded-xl mt-6"
      />
    </div>
  );
};

const emailData = [
  {
    category: "Marketing",
    title: "Email Marketing",
    src: "https://images.unsplash.com/photo-1611162617213-7d673e9e31ca?q=80&w=2070&auto=format&fit=crop",
    content: <EmailMarketingContent />,
  },
];

// WhatsApp Marketing Section
export function WhatsAppMarketingSection() {
  const cards = whatsappData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-24 md:py-32 bg-black" id="whatsapp-marketing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-sans mb-12 text-center">
          <span className="text-blue-500">WhatsApp Marketing</span> Services
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const WhatsAppMarketingContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-white">Connecting instantly with customers.</span>{" "}
        Leverage instant messaging for personalized, real-time marketing that delivers results.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1611930022073-b7a4ba5bfc7c?q=80&w=2070"
        alt="WhatsApp Marketing showcase"
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-cover rounded-xl mt-6"
      />
    </div>
  );
};

const whatsappData = [
  {
    category: "Marketing",
    title: "WhatsApp Marketing",
    src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5bfc7c?q=80&w=2070&auto=format&fit=crop",
    content: <WhatsAppMarketingContent />,
  },
];