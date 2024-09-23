import React from "react";
import { LOGO_DATA } from "../config/constant";
import styles from "../logo.module.css"; 

export function Logo() {
    return (
        <div>
            <h1 className=" flex mt-20 text-2xl justify-center text-colors-text-secondary"> Already chosen by many startups </h1> 
        <div className={styles.logoWrapper}>
            <div className={styles.logoContainer}>
                {LOGO_DATA.map((logo) => (
                    <img
                        key={logo.id}
                        src={logo.src}
                        alt={logo.alt}
                        className={styles.logo}
                    />
                ))}
            </div>
        </div>
        </div>
    );
}
