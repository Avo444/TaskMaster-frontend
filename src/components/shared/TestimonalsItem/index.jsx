import { LiaStarSolid } from "react-icons/lia";
import styles from "./index.module.scss";
const TestimonalsItem = ({data}) => {
    const { img, name, profession, comment, stars } = data;
    return (
        <div className={styles.item}>
            <div className={styles.item__header}>
                <div className={styles.img}>
                    <img src={img ? img : "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png"} alt="person" />
                </div>
                <p className={styles.title}>{name}</p>
                <p className={styles.profession}>{profession}</p>
            </div>
            <div className={styles.item__content}>
                <p className={styles.desc}>{comment}</p>
                <div className={styles.stars}>
                    {[...Array(5)].map(((_,index) => <LiaStarSolid key={index} className={index < stars ? styles.activeStar : styles.star} />))}
                </div>
            </div>
        </div>
    );
};

export default TestimonalsItem;
