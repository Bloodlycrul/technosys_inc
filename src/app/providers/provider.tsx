"use client";
import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ReactLenis } from "@studio-freight/react-lenis";
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
      </ReactLenis>
      <Toaster />
    </ThemeProvider>
  );
};

export default Provider;
