import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Profile from "./assets/Profile.jpg";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
    "MongoDB", "Node.js", "Express.js"
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold text-blue-400 transition duration-300 hover:scale-105 hover:text-blue-300">
          Jyothi Suresh
        </h1>
        <p className="text-xl text-gray-400 mt-3 transition duration-300 hover:text-gray-200">
          Frontend Developer | React Enthusiast
        </p>

        <a
           href="/Resume_Jyothi_Suresh.pdf"
          className="mt-5 bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition shadow-md hover:scale-105"
          download="Jyothi_Suresh_CV.pdf"
          target="_blank"
        >
          Download CV
        </a>

        {/* Profile Image */}
        <img 
          src={Profile}
          alt="Jyothi Suresh"
          className="w-[200px] h-[350px] sm:w-[190px] sm:h-[280px] md:w-[256px] md:h-[380px] lg:w-[288px] lg:h-[420px] border-4 border-blue-400 shadow-lg mt-10 sm:mb-4 transition duration-300 hover:scale-105 order-last sm:order-none"
        />
      </section>

      {/* Classic Design Element */}
      <section className="flex justify-center">
        <div className="w-1/3 h-1 bg-blue-400 rounded-full"></div>
      </section>

      {/* About Section */}
      <section className="py-16 text-center px-4">
        <h2 className="text-3xl font-semibold text-blue-400 transition duration-300 hover:scale-105 hover:text-blue-300">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto transition duration-300 hover:text-gray-200">
          Passionate frontend developer skilled in React, Tailwind CSS, and creating elegant web solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold text-blue-400 transition duration-300 hover:scale-105 hover:text-blue-300">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {skills.map(skill => (
            <span 
              key={skill} 
              className="bg-gray-800 text-blue-400 px-4 py-2 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-gray-900">
  <h2 className="text-3xl font-semibold text-center text-blue-400 transition duration-300 hover:scale-105 hover:text-blue-300">
    Projects
  </h2>
  <div className="flex flex-wrap justify-center gap-6 mt-6">
    {/* This is where ProjectCard will be inserted */}
    <ProjectCard />
  </div>
</section>


      {/* Contact Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-blue-400 transition duration-300 hover:scale-105 hover:text-blue-300">
          Contact Me
        </h2>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/Jyothi-Suresh17" className="text-gray-400 text-2xl hover:text-blue-400 transition duration-300 hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jy0thi-suresh" className="text-gray-400 text-2xl hover:text-blue-400 transition duration-300 hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="mailto:jyothisuresh2521@gmail.com?subject=Hello&body=I want to contact you" className="text-gray-400 text-2xl hover:text-blue-400 transition duration-300 hover:scale-110">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
}
