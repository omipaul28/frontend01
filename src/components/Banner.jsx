import React from 'react'
import bannerImg from "../assets/image.png"

const Banner = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Getting to know me
                    </h1>
                    <p className="text-gray-600 mb-6">
                        From updating work samples nto optimizing for mobile devices, I bring a comprehensive skill set to every project.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                        Learn More
                    </button>
                </div>

                <div className="flex justify-center">
                    <img
                        src={bannerImg}
                        alt="Banner"
                        className="rounded-4xl shadow-lg max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner