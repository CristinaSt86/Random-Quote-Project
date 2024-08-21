"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Main: React.FC = () => {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    fetchQuote();

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        fetchQuote();
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const fetchQuote = async () => {
    const res = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev"
    );
    const data = await res.json();
    setQuote(data.value);
  };

  return (
    <main className="flex flex-col gap-8 md:flex-row justify-around items-center w-full h-full p-8 ">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className=" border-2 border-black rounded-lg ">
          <Image
            src="/img2.jpg"
            alt="random image"
            width={300}
            height={300}
            className="mb-12 md:m-0 rounded-lg max-w-full h-auto"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col items-center max-w-lg flex-grow">
        <div className="h-52 w-full p-2 flex items-center justify-center overflow-y-auto border-2 border-black rounded-lg sm:ml-6">
          <p className="text-2xl text-center">{quote}</p>
        </div>
        <button
          onClick={fetchQuote}
          className="bg-black text-white p-4 rounded-lg my-8 hover:bg-gradient-to-r hover:from-black hover:to-gray-600 hover:border-gray-500 hover:scale-102 hover:shadow-md hover:text-gray-100"
        >
          Get New Quote
        </button>
      </div>
    </main>
  );
};

export default Main;
