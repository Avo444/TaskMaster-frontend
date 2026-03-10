import { useState, useEffect } from "react";
import { rocketLottie } from "../../../assets";

import Lottie from "lottie-react";
import styles from "./index.module.scss";

const TopScroll = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const showing = () => {
            setScrolled(window.scrollY > 20 ? true : false);
        };
        window.addEventListener("scroll", showing);
        return () => {
            window.removeEventListener("scroll", showing);
        };
    }, []);
    return (
        <button
            className={`${styles.btn} ${scrolled ? styles.active : ""}`}
            onClick={scrollToTop}
        >
            <Lottie
                animationData={rocketLottie}
                className={styles.lottie}
                loop={true}
            />
        </button>
    );
};

export default TopScroll;
