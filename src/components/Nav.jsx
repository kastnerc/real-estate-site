import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="z-10 absolute w-full h-20 flex items-center justify-between bg-linear-to-b from-black/70 to-transparent text-white">
            <Link href="/" className="mx-10 text-2xl no-underline font-light uppercase">
                GK <br />
                Immobilier
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
    )
}
