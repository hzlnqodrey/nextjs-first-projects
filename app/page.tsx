'use client';

import React from "react";

// Interface Header
interface HeaderProps {
  title: string
  children?: React.ReactNode
}

function Header(props: HeaderProps) {
  
  return <h1 className="text-center mt-8 mb-8">{ props.title ? props.title : 'Default Title'}</h1>
}

export default function Page() {

  const names: string[] = ["Rivano ATK", "Hazlan Muhammad Qodri", "Riko", "Fauzan"]

  // State and Hooks
  const [likes, setLikes] = React.useState(0); // 0 means initial value

  function handleClick(): void {
    // console.log('Increment like count');
    setLikes(likes + 1)
  }


  return (
    <div className="container mx-auto mt-20 mb-20 border-2 border-yellow-50 ">
      <div className="flex justify-around items-center text-center mb-20">
        <div className="py-24 xl:w-60 xl:h-60 lg:w-40 lg:h-40 md:w-24 md:h-24 sm:w-16 sm:h-16  bg-pink-700">01</div>
        <div className="py-24 xl:w-60 xl:h-60 lg:w-40 lg:h-40 md:w-24 md:h-24 sm:w-16 sm:h-16  bg-pink-700">02</div>
        <div className="py-24 xl:w-60 xl:h-60 lg:w-40 lg:h-40 md:w-24 md:h-24 sm:w-16 sm:h-16  bg-pink-700">03</div>
      </div>

      <Header title="Develop. Preview. Ship. 🚀"/>

      <div className="w-full h-40 justify-center items-center text-center bg-gradient-to-t from-teal-400 to-cyan-400 py-16">
        box
      </div>

      <main className="h-screen flex flex-col justify-around items-center text-green-400 border-2 border-sky-500 ">
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
        <button className="w-1/6 h-2/12 rounded-[12px] border-2 border-sky-300 mt-5" onClick={handleClick}> Like ({likes}) </button>
        
      </main>
    </div>
  )
}