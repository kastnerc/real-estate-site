import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="z-10 absolute w-full h-20 flex items-center justify-between bg-linear-to-b from-black/70 to-transparent text-white">
            <Link
                href="/"
                className="mx-10 text-2xl no-underline font-light uppercase"
            >
                GK <br />
                Immobilier
            </Link>
            <ul className="list-none flex items-center m-0 p-0">
                <li className="mx-10 relative">
                    <Link
                        href="/"
                        className="relative group inline-block uppercase"
                    >
                        <span className="relative z-10">Contact</span>

                        <span
                            className="
                            absolute left-0 -bottom-1 h-px w-full
                            bg-current scale-x-0 origin-left
                            transition-transform duration-300 ease-out group-hover:scale-x-100
                        "
                        />
                    </Link>
                </li>

                <li className="mx-10 relative">
                    <Link
                        href="/"
                        className="relative group inline-block uppercase"
                    >
                        <span className="relative z-10">About Us</span>

                        <span
                            className="
                            absolute left-0 -bottom-1 h-px w-full
                            bg-current scale-x-0 origin-left
                            transition-transform duration-300 ease-out group-hover:scale-x-100
                        "
                        />
                    </Link>
                </li>

                <li className="mx-10 backdrop-blur-sm relative border border-white p-2 hover:bg-white hover:text-black transition-colors duration-300 ease-out">
                    <Link href="/" className="block w-full h-full text-center no-underline uppercase">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
