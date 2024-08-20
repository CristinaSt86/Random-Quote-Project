"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Main: React.FC = () => {
  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random?category=dev');
    const data = await res.json();
    setQuote(data.value);
  };

  return (
    <main className="flex flex-col md:flex-row justify-around items-center w-full h-full p-8 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="p-1 ">
          <Image src="/img2.jpg" alt="random image" width={300} height={300} className='mb-12 md:m-0 rounded-xl' priority />
        </div>
      </div>
      <div className="flex flex-col items-center max-w-lg flex-grow">
        <div className="h-52 w-full p-4 flex items-center justify-center overflow-y-auto border-2 border-gray-800 rounded-br-2xl rounded-tl-2xl">
          <p className="text-2xl mb-4 text-center">{quote}</p>
        </div>
        <button
          onClick={fetchQuote}
          className="bg-gray-800 text-white p-4 rounded-br-2xl rounded-tl-2xl my-12 md:my-8 transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600 hover:border-gray-500 hover:scale-102 hover:shadow-md hover:text-gray-100"
        >
          Get New Quote
        </button>
      </div>
    </main>
  );
};

export default Main;
