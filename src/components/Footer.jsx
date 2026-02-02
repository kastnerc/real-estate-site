import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="mx-10 bg-white py-10">
            <h1 className=" text-2xl no-underline font-light uppercase py-2">
                GK Immobilier
            </h1>

            <h2 className="text-lg uppercase py-2">Contact</h2>

            <div className="grid grid-cols-4 gap-10">
                <div>
                    <h3 className="text-md uppercase py-2">Office</h3>

                    <p className="py-2">
                        Email: gk.locatif@gmail.com <br />
                        Telephone: 123-123-1234
                    </p>
                </div>

                <div>
                    <h3 className="text-md uppercase py-2">Loic Gendron</h3>

                    <p className="py-2">
                        Email: gk.locatif@gmail.com <br />
                        Telephone: 123-123-1234
                    </p>
                </div>

                <div className="border-r border-black">
                    <h3 className="text-md uppercase py-2">Caleb Kastner</h3>

                    <p className="py-2">
                        Email: gk.locatif@gmail.com <br />
                        Telephone: 123-123-1234
                    </p>
                </div>

                <div>
                    <h3 className="text-md uppercase py-2">Socials</h3>

                    <p className="py-2">
                        ADD ICONS FOR FACEBOOK etc.
                    </p>
                </div>
            </div>
        </footer>
    )
}
