import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import faTimes for close icon


interface SidebarMenuProps {
    menuOpen: boolean;
    toggleMenu: () => void;
    handleLogout: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menuOpen, toggleMenu, handleLogout }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-[25%] bg-gray-900 text-white p-6 transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
                <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* User Profile Section */}
            <div className="flex items-center space-x-4 mb-6">
                <img
                    src="/assets/pfp.png" // Placeholder for user image
                    alt="User Profile"
                    className="w-16 h-16 rounded-full border-2 border-white"
                />
                <div>
                    <h2 className="text-xl">Tora Rawat</h2> {/* User Name */}
                    <p className="text-gray-400">Tora@example.com</p> {/* User Email */}
                </div>
            </div>

            {/* Menu Links */}
            <ul className="space-y-6 mt-10">
                <li><Link href="/home/recruiter">Home</Link></li>
                <li><Link href="/resume-search">Resume Search</Link></li>
                <li><Link href="/job-posting">Post Jobs</Link></li>
                <li><Link href="/messages">Messages</Link></li>
                <li><Link href="/analytics">Analytics</Link></li>
            </ul>

            {/* Logout Button */}
            <div className="mt-60">
                <button className="bg-red-500 px-4 py-2 rounded" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default SidebarMenu;
