import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import styles from "./index.module.scss";

const PricingItem = ({ icon, title, price, desc, options }) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__content}>
                <div className={styles.icon}>
                    <img src={icon} alt="plane" />
                </div>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{desc}</p>
                <p className={styles.price}>
                    <span>${price}</span>/month
                </p>

                <div className={styles.button__content}>
                    <Link to={"/"} className={styles.btn}>
                        Get Started
                    </Link>
                </div>
            </div>
            <ul className={styles.item__options}>
                {options &&
                    options.map((item, index) => {
                        return <li key={index} className={styles.option__item}>
                            <FaCheck className={styles.check} size={24} />
                            {item}
                        </li>;
                    })}
            </ul>
        </div>
    );
};

export default PricingItem;
