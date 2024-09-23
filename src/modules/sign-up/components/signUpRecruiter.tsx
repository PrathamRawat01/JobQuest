import React from "react";

export default function SignUpRecruiter() {
    return (
        <div className="min-h-screen flex items-center justify-center p-10 bg-purple-300">
            <div className="bg-white shadow-lg rounded-lg flex max-w-5xl   overflow-hidden">
                {/* Left Side (Image) */}
                <div className="hidden md:block md:w-1/2 bg-gradient-to-r from-purple-600 to-indigo-600">
                    <img className="h-full" src="/assets/hero-bg.png" />
                </div>

                {/* Right Side (Form) */}
                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-purple-700  mb-3">Sign Up</h2>
                    <p className="text-lg text-colors-text-secondary mb-6">
                        SignUp For Recruiters
                    </p>
                    {/*Name */}

                    <div className="mt-6 lg:mt-16 mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name">
                            Name :
                        </label>
                        <input type="text" placeholder="Tora Rawat" id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email :
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Tora@gmail.com"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password :
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******"
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
                            Confirm Password :
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmpassword"
                            type="password"
                            placeholder="******"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mb-6">
                        <button
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Continue
                        </button>
                    </div>

                    {/* OR Divider */}
                    <div className="text-center mb-4">Or</div>

                    {/* Social Login Buttons */}
                    <div className="flex justify-center space-x-4 mb-6">
                        <button className="bg-gray-100 border border-gray-300 p-2 rounded-full">
                            <img
                                src="/assets/github.png"
                                alt="GitHub"
                                className="w-6 h-6"
                            />
                        </button>
                        <button className="bg-gray-100 border border-gray-300 p-2 rounded-full">
                            <img
                                src="/assets/google.png"
                                alt="Google"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>

                    {/* Signup Link */}
                    <p className="text-center text-gray-600">
                        Already Have An Account?{" "}
                        <a href="/login/recruiters" className="text-purple-600 font-bold hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
