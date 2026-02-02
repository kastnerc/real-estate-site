export default function HeroHome() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="/videos/Drone footage.mp4"
            ></video>

            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

            <div className="absolute flex border-black w-full h-full justify-center items-center flex-col">
                <h1 className="font-semi-bold text-white text-6xl uppercase mb-3">
                    Gendron | Kastner
                </h1>
                <h2 className="text-2xl text-white">
                    Investissement immobilier a Gatineau-Hull
                </h2>

                <div className="flex items-center gap-4 mt-5">
                    <button className="bg-white py-3 px-7 mx-5 border uppercase">
                        Button 1
                    </button>

                    <button className="backdrop-blur-sm py-3 px-7 mx-5 border uppercase border-white text-white">
                        Button 2
                    </button>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-8 flex flex-col text-center items-center text-white">
                <span className="text-md">Scroll down</span>

                <span className="animate-bounce text-lg">↓</span>
            </div>
        </div>
    )
}
