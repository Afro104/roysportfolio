'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faFile } from "@fortawesome/free-regular-svg-icons/faFile";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="box z-40">
        <div className="inner">
          <span>Rogelio Rodriguez's</span>
        </div>
        <div className="inner">
          <span>Portfolio</span>
        </div>
      </div>
      <div className="z-50">
        <ul>
          <li>
            <a className="linkedIn" href="https://www.linkedin.com/in/rogelio-rodriguez-676552182/" target="_blank" rel="noopener noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a className="resume" onClick={handleOpen}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FontAwesomeIcon icon={faFile} />
            </a>
          </li>
          <li>
            <a className="github" href="https://github.com/Afro104" target="_blank" rel="noopener noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>

      <div className="stars z-0">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </main>
  );
}
