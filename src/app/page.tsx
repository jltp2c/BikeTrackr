import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="h-24">BikeTrackr</h1>
      <div className="flex gap-5 items-center ">
        <Link href="/velos" className="border-2 border-red-700 h-24 w-24">
          <Image src="/velo.png" alt="velo" height={100} width={100}></Image>
        </Link>
        <div className="flex flex-col border-2 border-red-700 gap-5 h-24 w-24">
          <Link href="/signup" className="">
            Inscris toi !
          </Link>
          <Link href="/login">Connecte-toi</Link>
        </div>
      </div>
    </main>
  );
}
