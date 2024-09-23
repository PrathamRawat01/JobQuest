"use client";

import { useScrollTo } from '../utils/useScrollTo';

export function Footer() {
    // const scrollToDemo = useScrollTo('demo');
    const scrollToOverview = useScrollTo('aboutus')
    const scrollToContactUS = useScrollTo('contact');
    const scrollToFeatures = useScrollTo('feature');
    const scrollToCommunity = useScrollTo('feedback');

    return (
        <div  className="footer-container px-2 sm:px-2 lg:px-6 bg-colors-button text-colors-text-plain">
            <div className="flex flex-col lg:flex-row justify-center  lg:px-[50px]">
               
                <div className="flex flex-col lg:flex-row  mt-10  lg:space-x-32">
                    <div className=" w-auto font-bold flex flex-row  gap-6 items-start mb-8 lg:mb-0 px-1 lg:px-4">
                        <p
                            onClick={scrollToContactUS}
                            className="cursor-pointer text-colors-text-plain  font-poppins text-xs lg:text-lg mb-4"
                        >
                            Contact Us
                        </p>
                        <p
                            onClick={scrollToFeatures}
                            className="cursor-pointer text-colors-text-plain font-poppins text-sm lg:text-lg mb-4"
                        >
                            Services
                        </p>
                        <p
                            onClick={scrollToOverview}
                            className="cursor-pointer text-colors-text-plain font-poppins text-sm lg:text-lg mb-4"
                        >
                            About Us
                        </p>
                        <p
                            onClick={scrollToCommunity}
                            className="cursor-pointer text-colors-text-plain font-poppins text-sm lg:text-lg mb-4"
                        >
                            Community
                        </p>
                        
                    </div>
                

                    {/* <div className="flex flex-col items-start mb-8 lg:mb-0 px-4">
                        <p className="text-colors-text-plain font-poppins text-xl lg:text-2xl mb-2">Resources</p>
                        <p className="text-colors-text-secondary text-sm mb-2">Blog</p>
                        <p className="text-colors-text-secondary text-sm mb-2">Apps</p>
                        <p className="text-colors-text-secondary text-sm mb-2">Careers</p>
                        </div>
                        <div className="flex flex-col items-start px-4">
                        <p className="text-colors-text-plain font-poppins text-xl lg:text-2xl mb-2">Company</p>
                        <p className="text-colors-text-secondary text-sm mb-2">Our Story</p>
                        <p className="text-colors-text-secondary text-sm mb-2">Our Team</p>
                        <p className="text-colors-text-secondary text-sm mb-2">Press</p>
                        <p className="text-colors-text-secondary text-sm mb-2">Contact Us</p>
                        </div> */}
                </div>
            </div>
                <div className=" flex flex-row justify-between items-end  text-colors-text-plain m-5  lg:mb-2">
                  <div className='w-80'><img  src="/assets/clogo.png" alt="Logo2" /></div> 
                    <div className='mb-7'>Citizen AI • Copyright © 2024</div>
                </div>

    
        </div>
    );
}
