"use client";
import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ReactLenis } from "@studio-freight/react-lenis";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      themes={["dark"]}
    >
      <ReactLenis
        root
        // @ts-ignore
        options={{ lerp: 0.1, duration: 1.5, smoothTouch: true, autoRef: true }}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </ReactLenis>
      <Toaster />
    </ThemeProvider>
  );
};

export default Provider;
