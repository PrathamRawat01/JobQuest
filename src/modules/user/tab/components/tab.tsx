import { useState } from "react";
import Login from "../../login/components/login";
import SignUp from "../../singup/components/signup";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("login");

    return (
        <div className="w-1/4 mx-auto p-6 bg-colors-surface shadow-lg rounded-lg">
            <div className="flex justify-center space-x-20 mb-6">
                {/* Login Tab */}
                <button
                    className={`p-4 ${activeTab === "login" ? "border-b-2 bg-slate-300 w-auto border-blue-600" : ""}`}
                    onClick={() => setActiveTab("login")}
                >
                    Login
                </button>

                {/* Sign Up Tab */}
                <button
                    className={`p-2 ${activeTab === "signup" ? "border-b-2 bg-slate-300 w-auto border-blue-600" : ""}`}
                    onClick={() => setActiveTab("signup")}
                >
                    Sign Up
                </button>
            </div>

            {/* Render the active form */}
            <div>{activeTab === "login" ? <Login /> : <SignUp/>}</div>
        </div>
    );
}
