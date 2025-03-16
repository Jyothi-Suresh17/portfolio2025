import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {

  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"];
  
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
  href="/your-cv.pdf"
  className="mt-5 bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition shadow-md hover:scale-105"
  download="Jyothi_Suresh_CV.pdf"
>
  Download CV
</a>

      </section>

      {/* Classic Design Element */}
      <section className="py-8 flex justify-center">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
          {/* Project Card */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg border border-blue-500 transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-white transition duration-300 hover:text-blue-400">Project Name</h3>
            <p className="text-gray-400 mt-2 transition duration-300 hover:text-gray-200">A short description of the project.</p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 hover:underline transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-blue-400 transition duration-300 hover:scale-105 hover:text-blue-300">
          Contact Me
        </h2>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-gray-400 text-2xl hover:text-blue-400 transition duration-300 hover:scale-110">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 text-2xl hover:text-blue-400 transition duration-300 hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 text-2xl hover:text-blue-400 transition duration-300 hover:scale-110">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
}
