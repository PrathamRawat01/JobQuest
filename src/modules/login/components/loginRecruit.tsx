import React from "react";

export default function LoginRecruit() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-purple-300">
            <div className="bg-white shadow-lg rounded-lg flex max-w-4xl overflow-hidden">
                {/* Left Side (Image) */}
                <div className="hidden md:block md:w-1/2 bg-gradient-to-r from-purple-600 to-indigo-600">
                    <img className="h-full" src="/assets/UserLogin.png" />
                </div>

                {/* Right Side (Form) */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl lg:text-5xl font-bold text-purple-700 mt-7  mb-3">Login</h2>
                    <p className="text-lg text-colors-text-secondary mb-6">
                       Login For Recruites
                    </p>

                    {/* Email Input */}
                    <div className="mt-6  lg:mt-16 mb-4">
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
                        Don’t have an account?{" "}
                        <a href="/signup/recruit" className="text-purple-600 font-bold hover:underline">
                            Signup
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
