import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import { FaqItem } from "../../shared";
import { LandingLayout } from "../../../layouts";
import { getFaq } from "../../../store/slices/faqSlice/faqSlice";

import styles from "./index.module.scss";
const Faq = () => {
    const [active, setActive] = useState(false);
    const faq = useSelector(getFaq);

    return (
        <LandingLayout name={"Faq"} title={"Frequently Asked Questions"}>
            <div className={styles.content}>
                <div className={styles.list}>
                    {faq.length > 0 &&
                        faq.map((data) => (
                            <FaqItem key={data.id} data={data} active={active} setActive={setActive} />
                        ))}
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
