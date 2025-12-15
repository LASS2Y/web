"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "./Logo_Ecam.webp";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <li className="font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-5xl">
        {/* Logo (Placeholder) */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight flex items-center gap-2"
        >
          <Image
            src={Logo}
            alt="Logo Ecam"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span>My Portfolio</span>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </ul>

        {/* Bouton Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200 flex flex-col items-center py-4 space-y-4 md:hidden shadow-lg">
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink href="#experience" onClick={() => setIsMenuOpen(false)}>
              Experience
            </NavLink>
            <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="#blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </ul>
        )}
      </div>
    </nav>
  );
}
