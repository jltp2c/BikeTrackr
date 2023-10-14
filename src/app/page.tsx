import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex flex-col justify-center items-center h-screen">
      <h1 className="h-24 font-bold text-5xl sm:text-6xl">BikeTrackr</h1>
      <div className="flex gap-5 items-center">
        <Link
          href="/velos"
          className="flex border-8 border-grey-700 sm:w-56 md:h-96 relative">
          <video
            src="/stealv.mp4"
            className="w-screen object-cover"
            autoPlay
            loop
            muted
          />
        </Link>
        <div className="flex flex-col justify-center items-center border-8 border-grey-700 gap-5 h-80 w-36 p-4 sm:w-56 md:h-96 relative">
          <Link
            href="sign-up"
            className="border-2 p-2 rounded-md text-xs w-24 sm:w-32 text-center font-bold hover:text-green-600 hover:border-green-600 hover:scale-110 transition-all">
            Inscription
          </Link>
          <Link
            href="sign-in"
            className="border-2 p-2 rounded-md text-xs w-24 sm:w-32  text-center font-bold hover:text-green-600 hover:border-green-600 hover:scale-110 transition-all">
            Connecte-toi
          </Link>
        </div>
      </div>
    </main>
  );
}
