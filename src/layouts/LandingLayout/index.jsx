import { Element } from "react-scroll";
import { Heading } from "../../components/shared";
import styles from "./index.module.scss";

const LandingLayout = ({ name, title, desc, children }) => {
    return (
        <Element name={name} className={styles.layout}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <Heading title={title} desc={desc} />
                    {children}
                </div>
            </div>
        </Element>
    );
};

export default LandingLayout;
