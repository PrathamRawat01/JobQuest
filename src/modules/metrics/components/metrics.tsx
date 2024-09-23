import React from "react";
import { METRIX_DATA } from "../config/constant";

export function Metrics() {
    return (
        <div className="flex justify-center mt-32 mb-32 px-4 sm:px-6 lg:px-[250px]">
            <section className="text-center py-5 w-full">
                <span className="font-medium text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-400">
                    METRICS
                </span>
                <h1 className="text-colors-text-primary text-3xl lg:text-3xl font-medium mt-7 mb-7">
                    Numbers speaking for themselves
                </h1>

                {/* Responsive Grid for Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  items-center">
                    {METRIX_DATA.map((metric, index) => (
                        <div key={index} className="text-center mt-5 px-5">
                            <div className="text-7xl font-medium mb-5 text-colors-button">
                                {metric.value}
                            </div>
                            <div className="mt-2 text-3xl text-colors-text-secondary">
                                {metric.description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
