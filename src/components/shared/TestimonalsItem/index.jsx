import { LiaStarSolid } from "react-icons/lia";
import styles from "./index.module.scss";
const TestimonalsItem = ({ img, name, profession, desc, stars }) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__header}>
                <div className={styles.img}>
                    <img src={img} alt="person" />
                </div>
                <p className={styles.title}>{name}</p>
                <p className={styles.profession}>{profession}</p>
            </div>
            <div className={styles.item__content}>
                <p className={styles.desc}>{desc}</p>
                <div className={styles.stars}>
                    {[...Array(5)].map(((_,index) => <LiaStarSolid key={index} className={index < stars ? styles.activeStar : styles.star} />))}
                </div>
            </div>
        </div>
    );
};

export default TestimonalsItem;
