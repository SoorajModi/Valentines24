import Image from "next/image";

export default function Yes() {
    return (
        <>
            <Image src="/corgi-yes.gif" alt="Another corgi gif" height={300} width={300} priority />
            <p className="text-black text-4xl">Ok, yay! I&apos;ll see you soon!!</p>
        </>
    )
}
