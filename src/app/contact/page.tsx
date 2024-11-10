"use client";

import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          {/* Contact Information Left */}
          <div className="contact-left">
            <h1 className="headings">CONTACT ME</h1>
            <p><FaEnvelope className="icon" /> Email: alizamoin222@gmail.com</p>
            <p><FaPhoneAlt className="icon" /> Phone: +92 317 388888</p>
            <p><FaLinkedin className="icon" /> <a href="https://www.linkedin.com/in/aliza-moin" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p><FaGithub className="icon" /> <a href="https://github.com/aliza-moin18" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
          </div>

          {/* Contact Form Right */}
          <div className="contact-right">
            <div className="contact-content">
              <div className="contact-text">
                <h1 className="contact-heading">Let&apos;s Work Together</h1>
                <p className="contact-description">
                  I&apos;m currently available to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact me anytime.
                </p>

                <form className="contact-form">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    name="text"
                    className="form-input"
                  />

                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="form-input"
                  />

                  <label htmlFor="message" className="form-label">Write your message here</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="form-textarea"
                  />

                  <button type="submit" className="submit-button">Submit Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
