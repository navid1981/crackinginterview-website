"use client";

import { useState } from "react";
import { PromoBanner } from "@/components/landing/PromoBanner";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { InterviewTypes } from "@/components/landing/InterviewTypes";
import { VideoDemo } from "@/components/landing/VideoDemo";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { AudioLanguages } from "@/components/landing/AudioLanguages";
import { Highlights } from "@/components/landing/Highlights";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      <PromoBanner onDismiss={() => setBannerVisible(false)} />
      <Header bannerVisible={bannerVisible} />
      <main>
        <Hero />
        <InterviewTypes />
        <VideoDemo />
        <HowItWorks />
        <Features />
        <AudioLanguages />
        <Highlights />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
