import { collaborators, logo, star } from "../../../assets";
import { SliderSectionLayout } from "../../../layouts";
import { SwiperSlide } from "swiper/react";
import { PricingItem } from "../../shared";

import styles from "./index.module.scss";

const Pricing = () => {
    return (
        <SliderSectionLayout
            name={"Pricing"}
            title={"Choose Your Plane"}
            desc={"Simple and affordable pricing for everyone."}
            className={styles.slider}
        >
            <SwiperSlide>
                <PricingItem
                    icon={logo}
                    title={"Free"}
                    desc={"Forever"}
                    price={0}
                    options={[
                        "Basic task management",
                        "Deadline reminders",
                        "Priority support",
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <PricingItem
                    icon={star}
                    title={"Pro"}
                    desc={"For individuals"}
                    price={6}
                    options={[
                        "Advanced task features",
                        "Deadline reminders",
                        "Priority support",
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <PricingItem
                    icon={collaborators}
                    title={"Team"}
                    desc={"For teams"}
                    price={10}
                    options={[
                        "Shared task lists",
                        "Deadline reminders",
                        "Team collaboration",
                    ]}
                />
            </SwiperSlide>
        </SliderSectionLayout>
    );
};

export default Pricing;
