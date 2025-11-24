"use client";
import Link from "next/link";
import { type ReactNode, useState } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick: () => void; // Ajout de la prop onClick pour fermer le menu
};

function NavLink(props: NavLinkProps) {
  return (
    <li className="hover:bg-blue-300 py-2 px-4 text-3xl lg:text-base lg:px-2">
      <Link href={props.href} onClick={props.onClick}>
        {props.children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  //1 Creation de l'etat pour suivre l'ouverture du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //Fonction pour fermer explicitement le menu lors d'un clic sur un lien
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    // Nous ajoutons relative pour que le menu 'fixed' ne sorte pas du body
    <nav className="bg-slate-800 text-slate-50 shadow-xl py-2 relative z-50">
      <div className="Container mx-auto flex justify-between items-center px-4">
        {/* Titre ou Logo (à gauche) */}
        <div className="text-xl font-bold">Mon Portfolio</div>

        {/* 2. Bouton Hamburger / Fermeture (Visible sur mobile) */}
        <button
          className="lg:hidden text-2xl" // Masqué sur les grands écrans (lg)
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? "X" : "☰"}
        </button>

        {/* 3. Le Menu (Off-Canvas) */}
        <ul
          className={`
            // Styles par défaut pour mobile (Vertical, Off-Canvas)
            flex flex-col lg:flex-row lg:static lg:bg-transparent lg:h-auto
            
            fixed top-0 right-0 h-full w-3/4 
            bg-slate-900 text-white shadow-xl 
            p-8 pt-20 space-y-4 
            
            // Animation de glissement
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"} 
            
            // Masquer le menu normal sur mobile par défaut
            ${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex // Afficher le menu sur les grands écrans
          `}
        >
          {/* Les NavLinks */}
          <NavLink href={"/"} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink href={"/CV"} onClick={closeMenu}>
            Experience
          </NavLink>
          {/* Ajoutez d'autres liens pour correspondre à votre photo : */}
          <NavLink href={"/Projects"} onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink href={"/Contact"} onClick={closeMenu}>
            Contact
          </NavLink>
        </ul>
      </div>
         
    </nav>
  );
}
