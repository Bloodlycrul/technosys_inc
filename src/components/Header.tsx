"use client";
import { menuItems } from "@/lib/constant";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // handle the scroll event here
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div
        className={
          isScrolled
            ? "hidden md:flex px-4 py-2 items-center justify-between  border-b-2 backdrop-blur border-white/15"
            : "hidden md:flex px-4 py-2 items-center justify-between "
        }
      >
        <Link className="cursor-pointer" href="/">
          <Image
            src={
              "https://technosysincor.com/wp-content/uploads/2022/06/Technosys-logo.png"
            }
            alt="Technosys Inc Logo"
            width={90}
            height={90}
          />
        </Link>
        <div className="">
          {/* menu */}
          {menuItems &&
            menuItems.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`px-3 py-2 rounded-md text-lg leading-none tracking-tighter font-medium transition-colors duration-300 ${"text-gray-300 hover:bg-indigo-700 hover:text-white"}`}
                >
                  {item.name}
                </Link>
              );
            })}
        </div>
        <div className="">
          {/* cta */}
          <Link href={"/contact"}>
            <Button> Let&apos;s Talk </Button>
          </Link>
        </div>
      </div>

      {/* mobile */}
      <div
        className={
          isScrolled
            ? "fixed top-0 z-50 flex items-center justify-between py-4 px-9 md:hidden w-full backdrop-blur border-b-2 border-white/20"
            : "fixed top-0 z-50 flex items-center justify-between py-4 px-9 md:hidden w-full"
        }
      >
        <Link href={"/"}>
          <Image
            src="https://technosysincor.com/wp-content/uploads/2022/06/Technosys-logo.png"
            alt="Technosys Inc"
            width={60}
            height={60}
            priority
          />
        </Link>
        <div className="flex gap-4 items-center">
          <Button>Let&apos;s talk</Button>
          {isMenuOpen ? (
            <X
              aria-label="Close Menu"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <Menu
              aria-label="Open Menu"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-black  transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`fixed inset-0 z-50 flex flex-col items-start justify-start mt-44 space-y-6 transition-all duration-300 transform md:hidden ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          {menuItems &&
            menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="block px-11  text-4xl font-bold text-gray-300/80 transition-colors duration-300 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

          <div className=" flex flex-col justify-end px-9 py-44  rounded-md text-lg font-bold text-gray-300/30">
            <p>Get in touch</p>
            <Link
              className="block  underline font-light text-2xl  text-gray-300 transition-colors duration-300 hover:bg-indigo-700 hover:text-white"
              href="mailto:hello@technosysincor.com"
            >
              hello@technosysincor.com
            </Link>
            <Link
              className="block   underline  font-light text-2xl  text-gray-300 transition-colors duration-300 hover:bg-indigo-700 hover:text-white"
              href="/"
            >
              +91 9999999999
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
