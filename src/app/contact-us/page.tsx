"use client";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/shared/components/navbar";
import { Contact } from "@/modules/contact/components/contact";
import { Footer } from "@/shared/components/footer";

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsScrolled(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <>
            <Navbar isScrolled={isScrolled} />
            <div ref={heroRef}>
                <Contact/>
            </div>
          
            <Footer />
        </>
    );
}
