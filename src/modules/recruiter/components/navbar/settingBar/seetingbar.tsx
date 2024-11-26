import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import faTimes for close icon

const SettingsMenu: React.FC = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    const toggleSection = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <>
            {/* Settings Button */}
            <button onClick={toggleSettings} className="bg-green-500 px-4 py-2 rounded">
                <FontAwesomeIcon icon={faCog} size="lg" />
            </button>

            {/* Settings Menu Sidebar */}
            {isSettingsOpen && (
                <div className="fixed top-0 right-0 h-full w-[20%] bg-gray-900 text-white p-6 transition-transform duration-300 z-50 shadow-lg">
                    {/* Close Button */}
                    <button
                        onClick={toggleSettings}
                        className="absolute top-4 right-4 text-2xl text-white focus:outline-none"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <h2 className="text-xl font-bold mb-6">Settings</h2>
                    <ul className="space-y-4">
                        <li>
                            <button onClick={() => toggleSection("profile")}>
                                Profile Settings
                            </button>
                            {activeSection === "profile" && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    <li>Edit Profile</li>
                                    <li>Change Password</li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button onClick={() => toggleSection("account")}>
                                Account Settings
                            </button>
                            {activeSection === "account" && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    <li>Privacy Settings</li>
                                    <li>Email Preferences</li>
                                </ul>
                            )}
                        </li>
                        {/* Add more sections as needed */}
                    </ul>
                </div>
            )}
        </>
    );
};

export default SettingsMenu;
