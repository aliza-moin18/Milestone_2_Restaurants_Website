"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const About = () => {
  return (
    <section id="about">
      <div id="pic">
        <h1 className="headings">ABOUT ME</h1>
        <div id="intro">
          <h2>ALIZA MOIN</h2>
          <p>
            <h3>
              My name is Aliza Moin and I am constantly learning new technologies
              and techniques to improve my skills and stay up to date with the latest
              trends in web development. I am currently immersing myself in the world
              of Gen AI, Metaverse, and Web3.0. I bring a multifaceted skill set that
              includes proficiency in HTML, CSS, and TypeScript, Javacript and NextJs. I am
              passionate about my work and love to learn creativity and explore new
              things.
            </h3>
          </p>
        </div>
      </div>

      <div id="about2">
        <div className="row">

      {/* Skills Section */}
          <div className="box">
            <h1 className="headings">Skills</h1>
            <ul>
              <li>
                <FaHtml5 className="skillIcon" />
                <span>HTML</span>
              </li>
              <li>
                <FaCss3 className="skillIcon" />
                <span>CSS</span>
              </li>
              <li>
                <FaJs className="skillIcon" />
                <span>JavaScript</span>
              </li>
              <li>
                <FaNodeJs className="skillIcon" />
                <span>TypeScript</span>
              </li>
              <li>
                <SiNextdotjs className="skillIcon" />
                <span>Next.js</span>
              </li>
              <li>
                <SiTailwindcss className="skillIcon" />
                <span>Tailwind CSS</span>
              </li>
            </ul>
          </div> 

    {/* Experience Section */}
          <div className="box">
            <h1 className="headings">Experience</h1>
            <ul>
              <li>
                <h3>Artificial Intelligence</h3>
                <p>GIAIC Initiative</p>
              </li>
              <li>
                <h3>Web Development</h3>
                <p>Internship at Prodigy InfoTech</p>
              </li>
            </ul>
          </div>

    {/* Education Section */}
    <div className="box">
            <h1 className="headings">Education</h1>
            <ul>
              <li>
                <h3>Intermediate</h3>
                <p>Board of Intermediate Education Hyderabad Sindh</p>
                <p>2020 - 2022</p>
              </li>
              <li>
                <h3>Matriculation</h3>
                <p>Board of Secondary Education Hyderabad Sindh</p>
                <p>2018 - 2020</p>
              </li>
              <li>
                <h3>Bachelor's in Development Communication (Undergraduate)</h3>
                <p>University of Sindh, Jamshoro, Pakistan</p>
                <p>2023 - 2027 (Expected Graduation)</p>
              </li>
              <li>
                <h3>Certified AI, Metaverse, and Web 3.0 Developer and Solopreneur</h3>
                <p>Governor Sindh Initiative for Artificial Intelligence Cloud</p>
                <p>2024 - 2025</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
