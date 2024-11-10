"use client";

import { FiDownload } from "react-icons/fi"; 
import { FaLinkedin, FaGithub } from "react-icons/fa"; 

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-section">
            <h1>
              Hello I'm <br />
              <span className="highlight-text">Aliza Moin</span>
            </h1>
            <p>
              "I work as a web developer specializing in creating responsive,
              beautiful websites. Passionate and meticulous, I transform
              concepts into powerful digital experiences."
            </p>

            <div className="action-buttons">
              <a href="/My CV file.pdf" className="download-btn">
                <span>Download CV</span>
                <FiDownload className="icon" />
              </a>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/aliza-moin-b975a6276/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a
                  href="https://github.com/aliza-moin18" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaGithub className="icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Photo Section  */}
          <div className="photo-section">
            <img
              src="/profile.jpeg" 
              alt="Aliza Moin"
              className="rounded-full w-40 h-40 object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;