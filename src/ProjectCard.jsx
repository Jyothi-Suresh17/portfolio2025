import React from 'react';

import BuzzChat from "/src/assets/BuzzChat.png";
import LearnUm from "/src/assets/LearnUm.png";
import FlickPicks from "/src/assets/FlickPicks.png";
import EmployeeManager from "/src/assets/employeeManager.png";

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: "BuzzChat",
      description: "A real-time chat application built using React and Socket.io.",
      image: BuzzChat,
      github: "https://github.com/Jyothi-Suresh17/BuzzChat"
    },
    {
      id: 2,
      title: "LearnUm",
      description: "An online learning platform built with React and Tailwind CSS.",
      image: LearnUm,
      github: "https://github.com/Jyothi-Suresh17/LearnumFrontend"
    },
    {
      id: 3,
      title: "FlickPicks",
      description: "A movie recommendation app powered by the TMDB API and React.",
      image: FlickPicks,
      github: "https://github.com/Jyothi-Suresh17/FlickPicks"
    },
    {
      id: 4,
      title: "Employee Task Manager",
      description: "A task manager for employees, built with React and Node.js.",
      image: EmployeeManager,
      github: "https://github.com/Jyothi-Suresh17/EmployeeManeger"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-800 p-5 rounded-lg shadow-lg border border-blue-500 transition duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-80 md:w-96"
        >
          {/* Project Image (Thumbnail) */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />

          {/* Project Title */}
          <h3 className="text-xl font-semibold text-white transition duration-300 hover:text-blue-400">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-400 mt-2 transition duration-300 hover:text-gray-200">
            {project.description}
          </p>

          {/* GitHub Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-400 hover:text-blue-300 hover:underline transition duration-300"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
