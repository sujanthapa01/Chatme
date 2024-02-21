import React, { useState } from "react";
import instagram from "./instagram.png";
import github from "./github.png";
import twitter from "./twitter.png";

export default function SocialMedia() {
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);

  return (
    <div>
      <h1 className="kode-mono-text text-3xl text-center">Social Media</h1>

      <div className="flex justify-center my-8 gap-2 md:12 xl:12 text-center">
        <div className="GitHub" onMouseEnter={() => setIsGitHubHovered(true)} onMouseLeave={() => setIsGitHubHovered(false)}>
          <a href="https://github.com/sujanthapa01" target="_blank">
            <img
              src={github}
              alt=""
              className="hover:scale-[1.2] duration-200"
            />
          </a>
          <span className={isGitHubHovered ? "fadeIn" : "fadeOut"} id='text-grey'>GitHub</span>
        </div>

        <div className="Instagram" onMouseEnter={() => setIsInstagramHovered(true)} onMouseLeave={() => setIsInstagramHovered(false)}>
          <a href="https://www.instagram.com/idkconundrum_/" target="_blank">
            <img
              src={instagram}
              alt=""
              className="hover:scale-[1.2] duration-200"
            />
          </a>
          <span className={isInstagramHovered ? "fadeIn" : "fadeOut"} id='text-grey'>Instagram</span>
        </div>

        <div className="Twitter" onMouseEnter={() => setIsTwitterHovered(true)} onMouseLeave={() => setIsTwitterHovered(false)}>
          <a href="https://twitter.com/SujanThapa312" target="_blank">
            <img
              src={twitter}
              alt=""
              className="hover:scale-[1.2] duration-200"
            />
          </a>
          <span className={isTwitterHovered ? "fadeIn" : "fadeOut"} id='text-grey'>Twitter</span>
        </div>
      </div>
    </div>
  );
}
