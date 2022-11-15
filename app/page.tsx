'use client';

import React from "react";

export default function Page() {

  const names: string[] = ["Rivano ATK", "Hazlan Muhammad Qodri", "Riko", "Fauzan"]

  // State and Hooks
  const [likes, setLikes] = React.useState(0); // 0 means initial value

  function handleClick(): void {
    // console.log('Increment like count');
    setLikes(likes + 1)
  }


  return (
    <div className="container mx-auto px-20 py-10 border-1 border-red">
      <main className="flex flex-col justify-center align-bottom text-green-400 border-2 border-sky-500">
        {/* Title */}
        <h1 className="text-3xl font-bold underline text-center">
          Hello, Next.js!
        </h1>
      
        {/* List */}
        <ul className="list-none border-4  border-red-500 text-center mt-5">
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        {/* Button */}
        <button onClick={handleClick}> Like({likes}) </button>
        
      </main>
    </div>
  )
}