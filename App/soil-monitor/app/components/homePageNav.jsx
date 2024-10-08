import React from 'react';
import "@/styles/styles.css"
import Link from "next/link";


export default function HomePageNav() {
    return (
        <div>
            <header className="flex bg-[#152514] w-full h-32 items-center justify-center">
                <h1 className="title_text">The Soil Watch</h1>
            </header>
            <nav className="bg-[#152514] max-w-full h-10 flex items-center justify-center select-none">
                <ul className="body flex justify-center space-x-11 min-w-full h-full">
                    <li>
                        <Link href="../soilStats">
                            <button
                                className="px-1 py-0.5 hover:bg-[#677066] rounded-xl text-[#f2f1f1] text-2xl font-amiri outline-none">Soil Statistics
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="../Contact">
                            <button
                                className="px-1 py-0.5 hover:bg-[#677066] rounded-xl text-[#f2f1f1] text-2xl font-amiri outline-none">Contact
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="../About">
                            <button
                                className="px-1 py-0.5 hover:bg-[#677066] rounded-xl text-[#f2f1f1] text-2xl font-amiri outline-none">About
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <button
                                className="px-1 py-0.5 hover:bg-[#677066] rounded-xl text-[#f2f1f1] text-2xl font-amiri outline-none">Home
                            </button>
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>


    );
};


