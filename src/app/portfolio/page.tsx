// src/app/portfolio/page.tsx
import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-darkBlue text-white p-10 flex flex-col items-center justify-center">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold tracking-wide mb-8">
        SYEDA ARAMISH's <span className="font-light italic">PORTFOLIO</span>
      </h1>

      {/* Description */}
      <p className="text-xl mb-10 max-w-3xl text-center leading-relaxed">
        I have been working on various projects to develop my skills, both as a problem solver and a creative thinker. Each project has given me an opportunity to learn new things, overcome challenges, and grow as a developer. My portfolio reflects my passion for coding, designing, and experimenting with new ideas. I have learned many valuable lessons from these little projects, and I look forward to what’s ahead.
      </p>

      {/* GitHub Projects Box */}
      <div className="border-4 border-black bg-lightGrey p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold italic underline text-center mb-4">
          ARAMISH'S GITHUB PROJECTS
        </h2>
        <p className="text-lg text-black mb-4 text-center">
          These are some of my personal projects that I've worked on. You can view the code and learn more about my work by visiting my GitHub repositories.
        </p>
        <div className="text-center">
          <a
            href="https://github.com/SyedaAramish?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-500 underline hover:text-blue-700"
          >
            Visit My GitHub Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
