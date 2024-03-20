import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// image
import profile from "./profile.jpeg";
// components
import BackButton from "../../components/BackButton/BackButton";
import Projects from "../../components/Projects/Projects";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

// auth0
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  useEffect(() => {
    AOS.init(); // Initialize AOS when component mounts
  }, []);

  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <header>
        <h1
          className="kode-mono-text text-[4rem] text-center p-4 underline decoration-from-font"
          data-aos="fade-down"
        ></h1>

        <header />
        <h1
          className="kode-mono-text text-[4rem] text-center p-4 underline decoration-from-font"
          data-aos="fade-down"
        >
          Profile
        </h1>
      </header>
      <div className="flex justify-center items-center text-center flex-col my-8 ">
        <img
          className="h-64 w-64 shadow-stone-400 shadow-md  rounded-3xl hover:shadow-purple-300  duration-200 "
          src={profile}
          alt=""
          data-aos="zoom-out"
        />
        <h1 className="kode-mono-text text-[1.5rem] my-4 md:text-[4rem] xl:text-[4rem]">
          Hey{" "}
          {isAuthenticated && (
            <span className="text-green-300">{user.given_name}!</span>
          )}{" "}
          i'm <span></span>
          <a
            href="https://www.instagram.com/idkconundrum_/"
            target="_blank"
            className="cursor-pointer  hover:underline decoration-from-font "
          >
            Sujan Thapa
          </a>
        </h1>
      </div>

      <div className="flex flex-col  ">
        <div className=" w-screen p-8  ">
          <h1 className="kode-mono-text text-3xl  flex items-center ">
            About <span className="text-sm">- Sujan Thapa</span>{" "}
          </h1>
          <span>
            Hey there! He's Sujan Thapa, a web developer from Dharamshala,
            India. He loves making websites run smoothly. Currently, he's diving
            into full-stack development, which involves working on both the
            front and back ends of websites. It's like learning to construct an
            entire building, not just the outer walls! He's thrilled about
            learning new things and creating exciting projects online. Come
            along on his journey as he contributes to making the web a more
            awesome place, step by step!
          </span>
        </div>
        
      </div>

      <section className="">
        <h1 className="kode-mono-text text-3xl text-center p-4 md:p-12 xl:p-12">
          Projects
        </h1>
        <div>
          <Projects></Projects>
        </div>
        <div className="my-12">
          <SocialMedia></SocialMedia>
        </div>
      </section>
      <BackButton />
    </div>
  );
}
