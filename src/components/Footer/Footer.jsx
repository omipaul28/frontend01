import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-green-200 py-10 mt-8">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold text-slate-950 mb-2">
                    Subscribe Newsletter
                </h2>
                <p className="text-slate-950 mb-6">
                    Get the latest updates, articles, and resources straight to your inbox.
                </p>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex justify-center items-center max-w-md mx-auto"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-amber-50 w-full px-4 py-2 rounded-l-lg border border-slate-950 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-green-700 text-white px-6 py-2 rounded-r-lg font-semibold hover:bg-lime-700 transition"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="mt-6 text-slate-950 text-sm">
                    © {new Date().getFullYear()} MySite. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer