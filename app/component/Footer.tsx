import Link from "next/link";
import { type ReactNode } from "react";

type FootLinkProps = {
  href: string;
  children: ReactNode;
};

function FootLink(props: FootLinkProps) {
  return (
    <li className="hover:bg-blue-300 py-2 px-2">
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-slate-50 shadow-xl py-2">
      <ul className="Container mx-auto flex gap-4">
        <li>
          <FootLink href={"/"}>Contacts</FootLink>
        </li>
      </ul>
    </nav>
  );
}
