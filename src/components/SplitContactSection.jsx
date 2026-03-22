import Image from 'next/image'

export default function SplitContactSection({
    leftTitle,
    leftParagraph,
    imageSrc,
    imageAlt,
}) {
    return (
        <section className="min-h-screen flex py-10 items-center bg-black text-white">
            <div className="grid grid-cols-2 p-10 h-full items-center w-full">
                <div className="px-15 w-full border-r-2">
                    <form className="p-6 space-y-4 border border-gray-300">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full border border-gray-300 p-2"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 uppercase"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="px-15 w-full">
                    <h1 className=" text-2xl no-underline font-light uppercase py-2">
                        GK Immobilier
                    </h1>

                    <h2 className="text-lg uppercase py-2">Contact</h2>

                    <div className="grid grid-rows-2 grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-md uppercase py-2">Office</h3>

                            <p className="py-2">
                                Email: gk.locatif@gmail.com <br />
                                Telephone: 123-123-1234
                            </p>
                        </div>

                        <div>
                            <h3 className="text-md uppercase py-2">
                                Loic Gendron
                            </h3>

                            <p className="py-2">
                                Email: gk.locatif@gmail.com <br />
                                Telephone: 123-123-1234
                            </p>
                        </div>

                        <div className="border-r border-black">
                            <h3 className="text-md uppercase py-2">
                                Caleb Kastner
                            </h3>

                            <p className="py-2">
                                Email: gk.locatif@gmail.com <br />
                                Telephone: 123-123-1234
                            </p>
                        </div>

                        <div>
                            <h3 className="text-md uppercase py-2">Socials</h3>

                            <p className="py-2">ADD ICONS FOR FACEBOOK etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
