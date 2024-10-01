// src/app/my-experience/page.tsx
import React from 'react';

function MyExperience() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-200 to-orange-300 flex items-center justify-center">
      <div className="text-center p-10 bg-white rounded-lg shadow-lg border-4 border-yellow-500">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-6 drop-shadow-lg">
          I Am a Fresher!
        </h1>
        <p className="text-lg text-gray-800 mb-4 italic">
          Currently loading experience... Please wait!
        </p>
        <p className="text-md text-gray-600 mb-6">
          Just kidding! I'm a student eager to learn and grow. Let's explore the world together!
        </p>
        <div className="bg-gradient-to-r from-blue-100 to-green-200 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
          <p className="text-lg font-semibold text-blue-800">
            🚧 The construction of my experience is ongoing! Stay tuned for updates! 🚧
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyExperience;
