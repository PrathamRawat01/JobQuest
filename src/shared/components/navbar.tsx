"use client"
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";


export function Navbar({ isScrolled }: { isScrolled: boolean }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

   //will handle contactus
    const handleContactClick = () => {
        router.push("/contact-us");
    }

    return (
        <>
            <nav
                className={`group fixed top-0 left-0 w-full max-h-20 flex items-center justify-between px-4 sm:px-6 md:px-[30px] py-4 z-50 transition duration-300 ${isScrolled
                    ? "bg-colors-surface shadow-lg text-colors-text-primary"
                    : "bg-transparent text-colors-text-plain"
                    } hover:bg-colors-surface hover:text-colors-text-primary`}
            >
                <div>
                    <img src="/assets/clogo.png" alt="logo" width={300} />
                </div>

                <div className="hidden md:flex flex-row gap-10">
                    <div className="hover:scale-110 hover:text-colors-button transition duration-200">
                        <button className="text-[17px] font-bold">About </button>
                    </div>
                    <div className="hover:scale-110 hover:text-colors-button transition duration-200">
                        <button className="text-[17px] font-bold">Service</button>
                    </div>
                    <div className="hover:scale-110 hover:text-colors-button transition duration-200">
                        <button className="text-[17px] font-bold">Testimonials</button>
                    </div>
                    <div className="hover:scale-110 hover:text-colors-button transition duration-200">
                        <button
                        onClick={handleContactClick}
                         className="text-[17px] font-bold">Contact</button>
                    </div>
                </div>

                {/* <div className={`hidden md:block text-xl border-2 py-2 px-2 rounded-md transition duration-300 
                ${isScrolled ? 'border-2 border-colors-button text-colors-button hover:scale-x-110 hover:bg-colors-button hover:text-colors-text-plain' : 'group-hover:border-colors-button group-hover:text-colors-button hover:bg-colors-button hover:scale-x-110'}`}>
                    <a href="/contact-us" className="text-lg hover:text-colors-text-plain">
                        Get Started
                    </a>
                </div> */}

                <div className="block md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <FaBars size={30} />
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed top-20 left-0 w-full bg-colors-surface shadow-lg z-10">
                    <ul className="flex flex-col items-start font-thin text-xl text-colors-text-primary space-y-4 py-4 ml-5">
                        <li>
                            <button className="text-[17px] font-bold">For Enterprises</button>
                        </li>
                        <li>
                            <button className="text-[17px] font-bold">For Techies</button>
                        </li>
                        <li>
                            <button className="text-[17px] font-bold">Contact</button>
                        </li>
                        <li>
                            <button className="text-[17px] font-bold">Blog</button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
