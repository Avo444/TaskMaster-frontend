import { SwiperSlide } from "swiper/react";
import { FeaturesItem } from "../../shared";
import { SliderSectionLayout } from "../../../layouts";
import {
    calendarLottie,
    collaborateTeamLottie,
    taskManagementLottie,
} from "../../../assets";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";


import styles from "./index.module.scss";

const Features = () => {
    return (
        <SliderSectionLayout name={"Features"} title={"Smart Features Built for You"} desc={"TaskMaster combines simplicity with powerful tools."} className={styles.slider}>
            <SwiperSlide>
                <FeaturesItem
                    title="Task Management"
                    desc="Easily organize and prioritize your tasks."
                    lottieFile={taskManagementLottie}
                    size={120}
                />
            </SwiperSlide>
            <SwiperSlide>
                <FeaturesItem
                    title="Deadline Reminders"
                    desc="Get notifications for due dates."
                    lottieFile={calendarLottie}
                    size={250}
                />
            </SwiperSlide>
            <SwiperSlide>
                <FeaturesItem
                    title="Collaborate with Team"
                    desc="Work together with shared lists."
                    lottieFile={collaborateTeamLottie}
                    size={120}
                />
            </SwiperSlide>
        </SliderSectionLayout>
    );
};

export default Features;
