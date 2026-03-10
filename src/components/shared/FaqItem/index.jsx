import { useState } from "react";
import styles from "./index.module.scss";

const FaqItem = ({ data, active, setActive }) => {
    const { id, title, desc } = data;
    return (
        <div
            className={
                active === id ? `${styles.item} ${styles.active}` : styles.item
            }
            onClick={() => setActive(active === id ? false : id)}
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
