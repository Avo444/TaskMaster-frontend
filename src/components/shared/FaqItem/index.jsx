import { useState } from "react";
import styles from "./index.module.scss";

const FaqItem = ({ title, desc }) => {
    const [active, setActive] = useState(false);
    return (
        <div
            className={active ? `${styles.item} ${styles.active}` : styles.item}
            onClick={() => setActive(!active)}
        >
            <div className={styles.heading}>
                <p className={styles.title}>{title}</p>
                <div className={styles.btn}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.content}>{desc}</div>
        </div>
    );
};

export default FaqItem;
