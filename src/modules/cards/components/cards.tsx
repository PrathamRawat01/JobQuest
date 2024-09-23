import React, { useState, useEffect } from 'react';
import { CARDS_DATA } from '../config/cards-constant';

export function Cards() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Automatically change 
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % CARDS_DATA.length);
        }, 2000);

        return () => clearInterval(interval); 
    }, []);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div id="feedback" className="relative w-full h-96 flex flex-col items-center justify-center bg-comment bg-cover py-10">
          
            {/* cards will move here*/}
            <div className="w-full md:w-3/4 lg:w-2/3 h-3/4 pl-10 pt-3 bg-slate-200 bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg text-start">
                <div className='text-4xl font-bold lg:text-6xl text-colors-text-primary'>&#8220;</div>
                <h2 className="text-lg font-semibold mb-2 text-colors-text-primary">{CARDS_DATA[activeIndex].name}</h2>
                <h3 className='text-xs mb-2 text-colors-text-secondary'>{CARDS_DATA[activeIndex].rating}</h3>
                <p className="text-gray-800 mb-6 lg:mb-7 mr-28">
                    {CARDS_DATA[activeIndex].description}
                </p>
                <div className="text-sm text-gray-500">
                 
                </div>
            {/* my dots */}
            <div className="absolute right-10 lg:right-20  top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-3">
                {CARDS_DATA.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full cursor-pointer hover:scale-150 transition-all duration-300 ${activeIndex === index ? 'bg-colors-text-primary trasition duration-500 scale-150' : 'bg-gray-400'}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>

            </div>
            </div>
       
    );
}
