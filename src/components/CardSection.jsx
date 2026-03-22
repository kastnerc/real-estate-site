export default function CardSection() {
    return (
        <section className="relative overflow-hidden p-10 min-h-screen flex items-center">
            <div>
                <div
                    className="absolute inset-0 bg-center bg-cover bg-fixed"
                    style={{
                        backgroundImage: `url('/images/Gatineau Skyline.jpg')`,
                    }}
                ></div>

                <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

                <div className="relative text-center">
                    <h1 className="text-3xl uppercase text-white">
                        Our Approach
                    </h1>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
                    <div className="text-center backdrop-blur-md border border-white px-5 py-3">
                        <h2 className="text-xl uppercase text-white">
                            Lorem ipsum dolor
                        </h2>
                        <p className="px-5 text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati corrupti eveniet facilis officiis
                            expedita quidem iusto aliquid incidunt accusamus
                            iure. Quos sequi hic debitis, quisquam laudantium
                            cumque rerum consectetur sapiente!

                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati corrupti eveniet facilis officiis
                            expedita quidem iusto aliquid incidunt accusamus
                            iure. Quos sequi hic debitis, quisquam laudantium
                            cumque rerum consectetur sapiente!
                        </p>
                    </div>

                    <div className="text-center backdrop-blur-md border border-white px-5 py-3">
                        <h2 className="text-xl uppercase text-white">
                            Lorem ipsum dolor
                        </h2>
                        <p className="px-5 text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati corrupti eveniet facilis officiis
                            expedita quidem iusto aliquid incidunt accusamus
                            iure. Quos sequi hic debitis, quisquam laudantium
                            cumque rerum consectetur sapiente!

                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati corrupti eveniet facilis officiis
                            expedita quidem iusto aliquid incidunt accusamus
                            iure. Quos sequi hic debitis, quisquam laudantium
                            cumque rerum consectetur sapiente!
                        </p>
                    </div>

                    <div className="text-center backdrop-blur-md border border-white px-5 py-3">
                        <h2 className="text-xl uppercase text-white">
                            Lorem ipsum dolor
                        </h2>
                        <p className="px-5 text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati corrupti eveniet facilis officiis
                            expedita quidem iusto aliquid incidunt accusamus
                            iure. Quos sequi hic debitis, quisquam laudantium
                            cumque rerum consectetur sapiente!
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati corrupti eveniet facilis officiis
                            expedita quidem iusto aliquid incidunt accusamus
                            iure. Quos sequi hic debitis, quisquam laudantium
                            cumque rerum consectetur sapiente!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
