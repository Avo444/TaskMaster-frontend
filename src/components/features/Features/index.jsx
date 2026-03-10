import { Swiper, SwiperSlide } from "swiper/react";
import { Element } from "react-scroll";
import { FeaturesItem } from "../../shared";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
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
        <Element name="Features" className={styles.features}>
            <div className={styles.container}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    speed={500}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className={styles.slider}
                >
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
                </Swiper>
            </div>
        </Element>
    );
};

export default Features;
