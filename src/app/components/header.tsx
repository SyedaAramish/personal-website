// src/app/components/header.tsx
import React from 'react';
import Link from 'next/link'; // Importing Link from Next.js for navigation

function Header() {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-white text-2xl font-bold">Syeda Aramish's Portfolio</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/" className="hover:text-gray-300">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about-me" className="hover:text-gray-300">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link href="/my-skills" className="hover:text-gray-300">
              MY SKILLS
            </Link>
          </li>
          <li>
            <Link href="/my-experience" className="hover:text-gray-300">
              MY EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-gray-300">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="/contact-me" className="hover:text-gray-300">
              CONTACT ME
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
