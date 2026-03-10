import { Element, Link } from "react-scroll";
import styles from "./index.module.scss";
import { headerLottie } from "../../../assets";
import Lottie from "lottie-react";
const Header = () => {
    return (
        <Element name="Home" className={styles.header}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.header__content}>
                        <h1 className={styles.title}>
                            Organize Your Tasks Efficiently
                        </h1>
                        <h3 className={styles.desc}>
                            Boost your productivity with our smart to-ogt app.
                        </h3>
                        <Link to="Pricing" className={styles.btn} smooth={true} duration={500}>Try for Free</Link>
                    </div>
                    <Lottie className={styles.lottie} animationData={headerLottie} loop={true} />
                </div>
            </div>
        </Element>
    );
};

export default Header;
