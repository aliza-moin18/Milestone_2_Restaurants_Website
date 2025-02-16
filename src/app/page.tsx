"use client";

import Link from "next/link";
import Menu from "./menu/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <div className="container">
        <section className="highlights">
          <h2>Restaurant Highlights</h2>
          <p>From farm-to-table ingredients to unique recipes, experience a culinary journey with us!</p>
        </section>

        <section className="intro">
          <h2>Our Story</h2>
          <p>Founded with a love for cooking and creating memorable dining experiences, we bring passion to every dish.</p>
        </section>

        <div className="cta-buttons">
          <Link href="/menu">
            <button className="cta-button">View Menu</button>
          </Link>
          <Link href="/contact">
            <button className="cta-button">Reserve a Table</button>
          </Link>
        </div>
      </div>
      <Menu />
      <About />
      <Contact />
    </>
  );
}