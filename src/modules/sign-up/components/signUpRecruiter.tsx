import React, { useState } from "react";

export default function SignUpRecruiter() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async () => {
        setError(null);

        // Validate form fields
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            // Send the data to the API
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                setError(result.error || "Something went wrong");
            } else {
                setSuccess("User registered successfully");
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            }
        } catch (error) {
            setError("Failed to register user");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-10 bg-purple-300">
            <div className="bg-white shadow-lg rounded-lg flex max-w-5xl overflow-hidden">
                {/* Left Side (Image) */}
                <div className="hidden md:block md:w-1/2 bg-gradient-to-r from-purple-600 to-indigo-600">
                    <img className="h-full" src="/assets/hero-bg.png" alt="Hero Background" />
                </div>

                {/* Right Side (Form) */}
                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-purple-700 mb-3">Sign Up</h2>
                    <p className="text-lg text-colors-text-secondary mb-6">SignUp For Recruiters</p>

                    {/* Error and Success Messages */}
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}

                    {/* Name Input */}
                    <div className="mt-6 lg:mt-16 mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            placeholder="Tora Rawat"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Tora@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
                            Confirm Password:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmpassword"
                            type="password"
                            placeholder="******"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mb-6">
                        <button
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSubmit}
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
                                alt="Github"
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

                    {/* Already have an account? */}
                    <div className="text-center">
                        <p>
                            Already have an account?{' '}
                            <span className="text-purple-600 cursor-pointer">Login</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
