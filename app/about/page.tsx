"use client";

export default function About() {
  return (
    <>
      <div className="container">
        {/* Header Section */}
        <header className="about-header">
          <h1>About Us</h1>
          <p>Discover who we are, what we stand for, and why we're passionate about bringing fresh flavors to you!</p>
        </header>

        {/* Our Story Section */}
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            We are passionate about bringing fresh, authentic food to your table. Our chefs use only the finest ingredients to create memorable dining experiences. 
            Established in [Year], our journey began with a simple goal – to create a place where food lovers could gather and enjoy quality meals made with love.
          </p>
          <img src="images/story.jpg" alt="Our Story" className="about-image" />
        </section>
      </div>
    </>
  );
}