import React from "react";

export function Service() {
    return (
        <div>
            <div id="feature" className="px-4 sm:px-6 lg:px-[170px] py-12 lg:py-[100px]">
                <div className="text-center mb-12">
                    <span className="text-blue-500 bg-clip-text text-lg text-transparent bg-gradient-to-r from-purple-600 to-blue-400 py-2">
                        SERVICES
                    </span>
                    <h1 className="text-colors-text-primary text-3xl lg:text-5xl font-poppins font-bold mt-2 lg:px-[100px]">
                        Job Board Services We Provide
                    </h1>
                    <p className="mt-10 px-6 lg:px-[50px] text-xs lg:text-lg text-colors-text-secondary">
                        From job postings to applicant tracking, we partner with you to streamline the hiring process, ensuring that every interaction is efficient and effective. Experience a tailored approach that meets your unique employment needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 mt-20 justify-center">
                    {/* First Card */}
                    <div className="relative flex flex-col bg-slate-200 rounded-2xl overflow-hidden">
                        <button className="absolute top-3 bg-colors-button text-white rounded-sm px-4 py-2 z-10 hover:scale-x-110 transition duration-200">
                            <span>Job Posting Services</span>
                        </button>
                        <img
                            src="/assets/posting.png"
                            alt="Job Posting Services"
                            className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                        />
                        <p className="text-xl lg:text-2xl font-medium text-colors-text-primary p-4">
                            What is CAC and how do I calculate it?
                        </p>
                    </div>

                    {/* Second Card */}
                    <div className="relative flex flex-col bg-slate-200 rounded-2xl overflow-hidden">
                        <button className="absolute top-3 bg-colors-button text-white rounded-sm px-4 py-2 z-10 hover:scale-x-110 transition duration-200">
                            <span>Resume Search</span>
                        </button>
                        <img
                            src="/assets/resume.png"
                            alt="Resume Search"
                            className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                        />
                        <p className="text-xl lg:text-2xl font-medium text-colors-text-primary p-4">
                            How you can use recurring revenue financing for faster growth without dilution.
                        </p>
                    </div>

                    {/* Third Card */}
                    <div className="relative flex flex-col bg-slate-200 rounded-2xl overflow-hidden">
                        <button className="absolute top-3 bg-colors-button text-white rounded-sm px-4 py-2 z-10 hover:scale-x-110 transition duration-200">
                            <span>Employer Branding</span>
                        </button>
                        <img
                            src="/assets/employer-branding.png"
                            alt="Employer Branding"
                            className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                        />
                        <p className="text-xl lg:text-2xl font-medium text-colors-text-primary p-4">
                            Announcing Slang.ai’s $20M in funding.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mb-10">
                <button className="text-xl text-colors-button border-2 border-colors-button hover:scale-110 transition duration-300 px-4 py-2 rounded-md">
                    Explore More →
                </button>
            </div>
        </div>
    );
}
