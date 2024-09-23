import { signIn } from "next-auth/react";

export default function Login() {
    


    return (
        <div className="">
        <form  className="flex flex-col  space-y-4">
            <h2 className="text-xl font-semibold mb-4">Login</h2>

            {/* Email Input */}
            <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
            />

            {/* Password Input */}
            <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
            />

            {/* Login Button */}
            <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                Login
            </button>

            {/* Google Login Button */}
            <button
                type="button"
                className="bg-red-500 text-white p-2 rounded flex items-center justify-center"
            >
                Login with Google
            </button>
        </form>
        </div>
    );
}
