import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold">
                    Logo
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-200">Home</Link>
                    <Link to="/about" className="hover:text-gray-200">About</Link>
                    <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                </div>
                <Link
                    to="/login"
                    className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                    Login
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;