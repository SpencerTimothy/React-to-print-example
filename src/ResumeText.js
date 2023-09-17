import React from "react";
import "./index.css";
import { HiLocationMarker } from "react-icons/hi";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiInternetexplorer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

const ResumeText = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="my-resume">
      <div className="name-contact">
         <div className="name">
          <h1>Spencer Timothy</h1>
          <h3>Data Analyst</h3>
          <div className="location">
            <HiLocationMarker className="map-icon" />
            <h4>Salt Lake City, Utah</h4>
          </div>
        </div>
        <div className="contact">
          <ul>
            <li>
              <IoLogoWhatsapp className="resume-icons" />
              <b>Phone</b>:{" "}
              <a
                href="https://wa.me/18087578251?text=Hello%2C%20we%27re%20interested%20in%20your%20resume%21"
                target="_blank"
              >
                (808) 757-8251
              </a>
            </li>
            <li>
              <MdEmail className="resume-icons" />
              <b>Email</b>:{" "}
              <a href="mailto:spencer.t.timothy@gmail.com?subject=Hello%2C%20we%27re%20interested%20in%20your%20resume%21">
                spencer.t.timothy@gmail.com
              </a>
            </li>
            <li>
              <FaLinkedin className="resume-icons" />
              <b>LinkedIn</b>:{" "}
              <a
                href="https://www.linkedin.com/in/spencertimothy/"
                target="_blank"
              >
                linkedin.com/in/spencertimothy
              </a>
            </li>
            <li>
              <SiInternetexplorer className="resume-icons" />
              <b>Website</b>:{" "}
              <a href="https://spencertimothy.github.io/" target="_blank">
                spencertimothy.github.io
              </a>
            </li>
            <li>
              <FaGithub className="resume-icons" />
              <b>Github</b>:{" "}
              <a href="https://github.com/SpencerTimothy" target="_blank">
                github.io/spencertimothy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="description">
        As a data analyst, I possess a strong analytical mindset and technical
        expertise in data visualization, statistical analysis, and multiple
        programming languages such as Python and SQL. With a degree in
        Mathematics and experience working on multiple data analysis projects,
        my goal is to apply my skills to contribute to data-driven
        decision-making and drive business growth.
      </p>
      <div className="education">
        <h2>Education</h2>
        <b>University of Utah / Salt Lake City, Utah</b>
        <time>December 2019</time>
        <p>B.S. Mathematics</p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <b>Modern Portfolio Theory Investment Analysis</b>:
        <p className="project-description">
          This Python-based project utilized Modern Portfolio Theory to
          construct an optimal portfolio by analyzing price changes, price
          correlations, and utilizing the Markowitz Bullet, the project aimed to
          maximize returns while minimizing risk.
        </p>
        <b>Mass Shootings Data Analysis</b>:
        <p className="project-description">
          This analysis uses Python to explore mass shootings in the US from
          1982-2022, including trends in location, age of shooters, and total
          victims per year. A 3D interactive geospatial map is also included.
        </p>
        <b>U.S. Census Data Analysis</b>:
        <p className="project-description">
          This project analyzes U.S. Census data from 2015-2017, examining
          changes in median household income and population at the
          state/territory level using SQL and Tableau visualizations.
        </p>
      </div>
      <div className="relavent-skills">
        <h2>Relavent Skills</h2>
        <div>Python</div>
        <div>SQL Server</div>
        <div>Tableau</div>
        {/* <div>JavaScript</div>
        <div>React.js</div>
        <div>CSS</div>
        <div>HTML</div> */}
        <div>Microsoft Excel</div>
        <div>Macros</div>
        <div>VBA</div>
        <div>Google Sheets</div>
        <div>Apps Script</div>
      </div>
      <div className="work-experience">
        <h2>Work Experience</h2>
        <b>Education Ministry, Spain:</b>
        <time className="time">Oct. 2020 - Jun. 2023</time>
        <p>ESL Teacher</p>
        <ul>
          <li>
            Collaborated with colleagues to analyze and interpret student
            performance, leading to targeted interventions and improved
            outcomes.
          </li>
          <li>
            Developed and delivered English lessons using data-driven strategies
            to maximize student engagement and learning outcomes.
          </li>
        </ul>
        <b>VIPKid/Gogokid:</b>
        <time>Nov. 2020 - Oct. 2022</time>
        <p>Remote ESL Teacher</p>
        <ul>
          <li>
            Provided detailed feedback to students and their parents based on
            performance evaluations, resulting in a high level of overall
            satisfaction.
          </li>
          <li>
            Stayed up-to-date on industry trends and best practices through
            ongoing professional development and training opportunities.
          </li>
        </ul>
        <b>Red Iguana:</b>
        <time>Feb. 2015 - Sep. 2020</time>
        <p>Hospitality Professional</p>
        <ul>
          <li>
            Operated point of sale systems and tracked sales data to optimize
            menu offerings and inventory management.
          </li>
          <li>
            Collaborated with cross-functional teams to develop and implement
            process improvements, resulting in increased efficiency and
            productivity.
          </li>
        </ul>
      </div>
    </div>
  );
});

export default ResumeText;
