"use client";

import { useState, type ReactNode } from "react";

import { PromoBanner } from "./PromoBanner";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  const [bannerVisible, setBannerVisible] = useState(true);
  return (
    <>
      <PromoBanner onDismiss={() => setBannerVisible(false)} />
      <Header bannerVisible={bannerVisible} />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  );
}
