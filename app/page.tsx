"use client";
import { useState } from 'react';
import Image from "next/image";
import Yes from './yes';

export default function Home() {
  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col space-y-8 text-center items-center justify-center">
        {
          yes ? <Yes /> : 
          (
            <>
              {
                no ? (
                  <>
                    <Image src="/corgi-no.jpeg" alt="Corgi sad" height={300} width={300} priority />
                    <p className="text-black text-4xl">Haha, really funny, try again...</p>
                  </>
                ) 
              :
                (
                  <>
                    <Image src="/corgi-love.gif" alt="Corgi love gif" height={300} width={300} priority />
                    <p className="text-black text-4xl">Will you be my Valentine?</p>
                  </>
                )
              }
              <div className="flex flex-row items-center justify-center space-x-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-16" onClick={() => setYes(true)}>
                  Yes
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-16" onClick={() => setNo(true)}>
                  No
                </button>
              </div>
            </>
          )
        }
      </div>
    </main>
  );
}
