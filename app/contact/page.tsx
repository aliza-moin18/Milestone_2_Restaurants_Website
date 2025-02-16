export default function Contact() {
  return (
    <div className="container">
      <header>
        <h1>Contact Us</h1>
      </header>

      <section>
        <h2>We'd Love to Hear From You</h2>
        <p>If you have any questions or want to place a large order, feel free to reach out to us!</p>

        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>
    </div>
  );
}