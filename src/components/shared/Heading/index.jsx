import styles from "./index.module.scss";
const Heading = ({title, desc}) => {
    return (
        <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            {desc && <h4 className={styles.desc}>{desc}</h4>}
        </div>
    );
};

export default Heading;
