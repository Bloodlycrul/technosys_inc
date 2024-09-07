import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SocialMediaShare } from "@/components/ui/Socialmedia";
import Provider from "./providers/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Technosys Inc",
    default: "Digital Marketing Agency | Technosys Inc",
  },
  description:
    "Digital Marketing Agency | Technosys Inc - We are the digital marketing agency. We are always open to discuss your next project, idea or just to have a chat. We are here to help you achieve your goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
          <SocialMediaShare />
        </Provider>
      </body>
    </html>
  );
}
