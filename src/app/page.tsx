// src/app/page.tsx
import React from 'react';
import Link from 'next/link';
import Header from './components/header';

function HomePage() {
  return (
    <div className="min-h-screen bg-blue-100">
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="stylish-heading">
            Welcome to <span className="highlight">Syeda Aramish's</span> Website
          </h1>
          <p className="mt-4 text-lg text-blue-800">
            This is a simple introduction page for my website.
          </p>
          <Link href="/about-me">
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
              Click here to learn more about my info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
