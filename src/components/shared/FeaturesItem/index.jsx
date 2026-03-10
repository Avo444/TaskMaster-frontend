import Lottie from "lottie-react";
import styles from "./index.module.scss";

const FeaturesItem = ({ title, desc, lottieFile, size }) => {
    return (
        <div className={styles.item}>
            <div className={styles.img} style={{ maxWidth: `${size}px` }}>
                <Lottie animationData={lottieFile} loop={true} />
            </div>
            <div className={styles.item__content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    );
};

export default FeaturesItem;
