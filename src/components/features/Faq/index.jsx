import { LandingLayout } from "../../../layouts";
import { FaqItem } from "../../shared";
import { Link } from "react-scroll";
import styles from "./index.module.scss";

const Faq = () => {
    return (
        <LandingLayout name={"Faq"} title={"Frequently Asked Questions"}>
            <div className={styles.content}>
                <div className={styles.list}>
                    <FaqItem
                        title={"Is the Free plan really free?"}
                        desc={
                            "Yes, our Free plan is completely free forever and includes all basic task management features."
                        }
                    />
                    <FaqItem
                        title={"How does the Team plan work?"}
                        desc={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae maiores temporibus dignissimos nemo velit ipsum non expedita veritatis. Optio commodi est reprehenderit vel, doloribus cum consequatur laborum cupiditate atque."
                        }
                    />
                    <FaqItem
                        title={"Can I integrate with other apps?"}
                        desc={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae maiores temporibus dignissimos nemo velit ipsum non expedita veritatis."
                        }
                    />
                    <FaqItem
                        title={"Is my data safe with TaskMaster?"}
                        desc={
                            "Yes, our Free plan is completely free forever and includes all basic task management features."
                        }
                    />
                </div>
                <div className={styles.bottom}>
                    <h5 className={styles.title}>
                        Ready to boost your productivity?
                    </h5>
                    <Link
                        to="Pricing"
                        spy={true}
                        offset={-70}
                        smooth={true}
                        className={styles.btn}
                    >
                        Try for free
                    </Link>
                </div>
            </div>
        </LandingLayout>
    );
};

export default Faq;
