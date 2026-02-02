import Link from 'next/link'

export default function HeroNav() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="/videos/drone.webm"
            >
            </video>

            <nav className="absolute w-full h-15 flex items-center justify-between bg-linear-to-b from-black/60 to-transparent">
                <Link href="/" className="mx-10 no-underline uppercase">
                    GK Immobilier
                </Link>
                <ul className="list-none flex m-0 p-0">
                    <li className="mx-10 relative">
                        <Link href="/" className="no-underline uppercase">
                            Our Projects
                        </Link>
                    </li>

                    <li className="mx-10 relative">
                        <Link href="/" className="no-underline uppercase">
                            About Us
                        </Link>
                    </li>

                    <li className="mx-10 relative">
                        <Link href="/" className="no-underline uppercase">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>

            
        </div>
    )
}
