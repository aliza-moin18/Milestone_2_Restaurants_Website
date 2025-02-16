"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="nav">
      {Links.map((LinkItem, index) => {
        const isActive = pathname === LinkItem.path;
        return (
          <Link
            href={LinkItem.path}
            key={index}
            className={`nav-link ${isActive ? "active" : ""}`}
          >
            {LinkItem.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;