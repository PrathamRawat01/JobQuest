"use client";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/shared/components/navbar";
import { Herotab } from "@/modules/intro/components/hero";
import { Overview } from "@/modules/intro/components/overview";
import { Cards } from "@/modules/cards/components/cards";
import { Contact } from "@/modules/contact-us/contact-us";
import { Metrics } from "@/modules/metrics/components/metrics";
import { Service } from "@/modules/service/components/service";
import { Logo } from "@/modules/logo/components/logo";
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
                <Herotab />
            </div>
            <Overview/>
            <Logo/>
            <Service />
            <Cards />
            <Contact />
            <Metrics />
            <Footer />
        </>
    );
}
