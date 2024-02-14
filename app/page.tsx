import Image from "next/image";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col space-y-8 text-center items-center justify-center">
        <Image src="/corgi-love.gif" alt="Corgi love gif" height={300} width={300} priority />
        <p className="text-black text-4xl">Will you be my Valentine?</p>
        <div className="flex flex-row items-center justify-center space-x-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-16">Yes</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-16">No</button>
        </div>
      </div>
    </main>
  );
}
