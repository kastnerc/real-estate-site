import Nav from '@/components/Nav'

export default function HeroHome() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                src="/videos/drone.webm"
            ></video>

            <div className="absolute flex border-black w-full h-full z-10 justify-center items-center flex-col">
                <h1 className="font-semi-bold text-white text-6xl">
                    Gendron-Kastner
                </h1>
                <h2 className="text-2xl text-white">
                    Investissement immobilier a Gatineau-Hull
                </h2>

                <div className="flex items-center gap-4 mt-5">
                    <button className="bg-white py-2 px-4 mx-5 border rounded">
                        Button 1
                    </button>

                    <button className="bg-transparent py-2 px-4 mx-5 border rounded border-white text-white font-semibold">
                        Button 1
                    </button>
                </div>
            </div>
        </div>
    )
}
