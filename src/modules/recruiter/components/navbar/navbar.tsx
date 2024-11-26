"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import SidebarMenu from "@/modules/recruiter/components/navbar/sideBar/sidebar";
import SettingsMenu from "@/modules/recruiter/components/navbar/settingBar/seetingbar";

export default function Navbar() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        router.push("/login/recruiters");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className="navbar flex justify-between items-center p-4 bg-gray-800 text-white">
                {/* 3-bar Menu Button */}
                <button onClick={toggleMenu} className="focus:outline-none">
                    <div className="w-8 h-8 flex flex-col justify-between items-center">
                        <span className="block w-8 h-1 bg-white"></span>
                        <span className="block w-8 h-1 bg-white"></span>
                        <span className="block w-8 h-1 bg-white"></span>
                    </div>
                </button>

                <h1 className="text-lg">Recruiter Dashboard</h1>

                {/* Right Side Icons */}
                <div className="space-x-4 flex items-center">
                    {/* Profile Icon */}
                    <button className="bg-blue-500 px-4 py-2 rounded">
                        <FontAwesomeIcon icon={faUser} size="lg" /> {/* Profile Icon */}
                    </button>

                    {/* Settings Icon */}
                    <SettingsMenu />

                    {/* Logout Icon */}
                    <button className="bg-red-500 px-4 py-2 rounded" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} size="lg" /> {/* Logout Icon */}
                    </button>
                </div>
            </nav>

            {/* Sidebar Menu */}
            <SidebarMenu menuOpen={menuOpen} toggleMenu={toggleMenu} handleLogout={handleLogout} />
        </div>
    );
}
