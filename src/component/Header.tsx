"use client";

import Nav from "./Nav/Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="container">

        {/* Navbar */}
        <div className="navbar">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;