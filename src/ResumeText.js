import React from "react";
import "./index.css";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiInternetexplorer } from "react-icons/si";

const ResumeText = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="my-resume">
      <div className="name-contact">
        <h1>Spencer Timothy</h1>
        <div className="location">
          <HiLocationMarker className="map-icon" />
          <h4>Salt Lake City, Utah / Valencia, Spain</h4>
        </div>
        <div className="contact">
          <ul>
            <li>
              <BsFillTelephoneFill className="resume-icons" />
              <b>Phone</b>: 808-757-8251
            </li>
            <li>
              <MdEmail className="resume-icons" />
              <b>Email</b>: spencer.t.timothy@gmail.com
            </li>
            <li>
              <FaLinkedin className="resume-icons" />
              <b>LinkedIn</b>: linkedin.com/in/spencertimothy
            </li>
            <li>
              <SiInternetexplorer className="resume-icons" />
              <b>Website</b>: spencertimothy.github.io
            </li>
            <li>
              <FaGithub className="resume-icons" />
              <b>Github</b>: github.io/spencertimothy
            </li>
          </ul>
        </div>
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        praesentium facere earum officia, eum tenetur laborum blanditiis
        voluptatum, accusamus laboriosam ad dicta alias beatae eligendi deleniti
        ea nesciunt, culpa facilis tempore modi aliquid atque placeat
        dignissimos. Amet dignissimos perspiciatis ea? Molestiae ea cumque vitae
        provident dolore ullam temporibus veniam.
      </p>
      <div className="education">
        <h2>Education</h2>
        <b>University of Utah / Salt Lake City, Utah</b>
        <time dateTime="2019-12-19">December 2019</time>
        <p>B.S. Mathematics</p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <b>project 1</b>:
        <p className="project-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          voluptatum eveniet ducimus ipsum molestias sequi ut sint accusamus
          asperiores voluptate.
        </p>
        <b>project 2</b>:
        <p className="project-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eaque
          debitis rem in quidem velit cumque nulla aperiam excepturi hic.
        </p>
        <b>project 3</b>:
        <p className="project-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
          dignissimos excepturi sed sunt quibusdam sit porro cumque voluptatum,
          exercitationem optio!
        </p>
      </div>
      <div className="relavent-skills">
        <h2>Relavent Skills</h2>
        <div>Python</div>
        <div>SQL</div>
        <div>Tableau</div>
        <div>JavaScript</div>
        <div>CSS</div>
        <div>html</div>
        <div>Microsoft Excel</div>
        <div>Google Sheets</div>
      </div>
      <div className="work-experience">
        <h2>Work Experience</h2>
        <b>Job 1:</b>
        <time dateTime="">sometime - some other time</time>
        <p>Job title</p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam
            unde earum asperiores consequuntur officia ab in est qui sit!
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nisi
            alias dolores, ducimus laboriosam aliquid debitis repellendus
            accusamus doloribus adipisci!
          </li>
        </ul>
        <b>Job 2:</b>
        <time dateTime="">sometime - some other time</time>
        <p>Job title</p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam
            unde earum asperiores consequuntur officia ab in est qui sit!
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nisi
            alias dolores, ducimus laboriosam aliquid debitis repellendus
            accusamus doloribus adipisci!
          </li>
        </ul>
        <b>Job 3:</b>
        <time dateTime="">sometime - some other time</time>
        <p>Job title</p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam
            unde earum asperiores consequuntur officia ab in est qui sit!
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nisi
            alias dolores, ducimus laboriosam aliquid debitis repellendus
            accusamus doloribus adipisci!
          </li>
        </ul>
      </div>
    </div>
  );
});

export default ResumeText;
