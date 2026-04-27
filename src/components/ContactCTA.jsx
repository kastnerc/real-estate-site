import Link from "next/link"

export default function ContactCTA() {
    return (
        <section className="py-10 bg-black h-[50vh] flex items-center justify-center">
            <div>
                <div className="flex flex-col place-items-center text-center">
                    <h1 className="text-3xl uppercase py-4 text-white">
                        Interested in working with us?
                    </h1>

                    <div className="w-50 border-b border-white"></div>

                    <h2 className="text-white py-4">
                        Whether you have questions about what we do, investment
                        opportunities, or potential partnerships, GK Immobilier
                        would be happy to speak with you.
                    </h2>
                    <button className="bg-transparent text-lg border border-white uppercase text-white hover:bg-white hover:text-black transition-colors duration-300 ease-out">
                        <Link
                            href="/contact"
                            className="block w-full h-full py-3 px-7 text-center no-underline uppercase"
                        >
                            Contact Us
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}
