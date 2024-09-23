"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function Herotab() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Controls dropdown visibility
    const router = useRouter();

    // Toggle dropdown visibility
    const handleTryNowClick = () => {
        setIsDropdownVisible(!isDropdownVisible); // Toggle dropdown
    };

    // Handle the navigation when either "Recruit" or "Recruiters" is clicked
    const handleRecruitClick = () => {
        router.push("/login/recruit");
    };

    const handleRecruitersClick = () => {
        router.push("/login/recruiters");
    };

    return (
        <div className="bg-hero-pattern">
            <main className="flex flex-col items-center justify-center h-100% md:h-screen text-center pt-[200px] px-4 sm:px-6 md:px-8">
                <h1 className="font-poppins text-3xl sm:text-4xl md:text-8xl font-extrabold text-colors-text-primary mb-4">
                    JobQuest
                </h1>
                <p className="text-colors-text-primary mb-8 pt-[15px]">
                    A Professional Platform
                    <br className="hidden md:block" /> For Both Recruiter And Recruite
                </p>

                <div className="flex flex-wrap justify-center space-x-10 pt-[25px] mb-20">
                    {/* Learn More Button */}
                    <button className="w-44 h-16 border-2 bg-colors-surface text-colors-button py-2 px-4 rounded-full hover:border-colors-button hover:bg-colors-button hover:text-colors-text-plain transition duration-300">
                        Learn more
                    </button>

                    {/* Try Now Button */}
                    <div className="relative inline-block">
                        <button
                            onClick={handleTryNowClick}
                            className="w-44 h-16 bg-colors-button text-colors-text-plain py-2 px-4 rounded-full hover:scale-x-110 transition duration-300"
                        >
                            Try Now <span aria-hidden="true">→</span> {/* Added a down arrow to indicate a dropdown */}
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownVisible && (
                            <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-10">
                                <ul className="py-1">
                                    <li
                                        onClick={handleRecruitClick}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                                    >
                                       For Recruit
                                    </li>
                                    <li
                                        onClick={handleRecruitersClick}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                                    >
                                       For Recruiters
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
