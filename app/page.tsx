// app/page.tsx
"use client";

import React from 'react';
import AsciiDonut from '@/components/Donut';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-black font-mono text-white">
      {/* Navigation Menu */}
      <nav className="w-full p-4 mt-12">
        <ul className="flex justify-center space-x-6">
          <li className="hover:underline cursor-pointer">Components</li>
          <li className="hover:underline cursor-pointer">Examples</li>
          <li className="hover:underline cursor-pointer">GitHub</li>
          <li className="hover:underline cursor-pointer">Sponsor</li>
        </ul>
      </nav>

      {/* ASCII Donut */}
      <div className='flex flex-col items-center justify-center'>
      <h1 className="text-5xl font-bold mb-8 ">REACT_ASCII</h1>
      <AsciiDonut />

      {/* Explanatory Section */}
      <div className="text-center mt-8">
        
        <p className="mt-2 max-w-5xl">
          A unique library designed to bring the power of ASCII art into your React projects. 
          Enjoy creative, customizable components that enhance your applications with style.
        </p>
       
      </div>

      </div>

      {/* Footer Section */}
      <footer className="w-full text-center mb-12">
        <div className="space-x-4">
          <span className="hover:underline cursor-pointer">Discord</span>
          <span className="hover:underline cursor-pointer">GitHub</span>
        </div>
         <p className="mt-2">
          Created with ❤️ by <span className="font-bold">ddoemonn</span>.
        </p>
      </footer>
    </div>
  );
};

export default Home;
