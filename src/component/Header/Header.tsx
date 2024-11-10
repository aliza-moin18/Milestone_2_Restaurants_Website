"use client";

import Link from "next/link";
import Nav from "../Nav/Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="container">

        {/* Navbar */}
        <div className="navbar">
          <Nav />
          <Link href="/contact">
            <button className="hire-button">Hire me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;