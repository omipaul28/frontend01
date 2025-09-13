import React from 'react'
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const cards = [
    { img: img1, title: "Feature One", desc: "Description for feature one." },
    { img: img2, title: "Feature Two", desc: "Description for feature two." },
    { img: img3, title: "Feature Three", desc: "Description for feature three." },
];

export const Sections = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-4">Our Highlights</h2>
                <p className="text-gray-600 mb-10">
                    Explore some of the key features and highlights that make our platform unique.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-48 object-cover rounded-t-2xl"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                <p className="text-gray-600">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
