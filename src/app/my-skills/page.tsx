// src/app/my-skills/page.tsx
import React from 'react';

function MySkills() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-10">
      <h1 className="text-center text-5xl font-bold text-light-grey-100 mb-10"><u>
       -: ARAMISH's SKILLS :-
      </u></h1>

      <div className="max-w-4xl mx-auto">
        {/* Skill Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Creativity */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Creativity</h2>
            <p className="text-gray-700">
              I have a strong ability to think outside the box and develop unique solutions to problems, 
              using my background in art and design to inform my work.
            </p>
          </div>

          {/* Card 2: Hardworking */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Hardworking</h2>
            <p className="text-gray-700">
              I am dedicated and persistent in my endeavors, always striving to achieve my goals 
              and overcome challenges through effort and determination.
            </p>
          </div>

          {/* Card 3: Problem Solver */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Problem Solver</h2>
            <p className="text-gray-700">
              I enjoy tackling complex issues by breaking them down into manageable parts, 
              applying logical thinking to find effective solutions.
            </p>
          </div>

          {/* Card 4: Communication */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Communication</h2>
            <p className="text-gray-700">
              I excel at conveying ideas clearly and effectively, both in writing and verbally, 
              ensuring that messages are understood by diverse audiences.
            </p>
          </div>

          {/* Card 5: Time Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Time Management</h2>
            <p className="text-gray-700">
              I prioritize tasks efficiently and meet deadlines, allowing me to manage my workload effectively 
              while maintaining a balance between quality and productivity.
            </p>
          </div>

          {/* Card 6: Leadership */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Leadership</h2>
            <p className="text-gray-700">
              I take initiative and motivate others to achieve common goals, fostering a collaborative environment 
              where everyone's contributions are valued.
            </p>
          </div>

          {/* Card 7: Teamwork */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Teamwork</h2>
            <p className="text-gray-700">
              I work well in team settings, collaborating with others to share ideas, solve problems, 
              and achieve collective success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
