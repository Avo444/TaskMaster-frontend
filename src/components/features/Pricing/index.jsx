import { collaborators, logo, star } from "../../../assets";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { PricingItem } from "../../shared";
import { Element } from "react-scroll";

import styles from "./index.module.scss";

const Pricing = () => {
    return (
        <Element name="Pricing" className={styles.pricing}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Choose Your Plane</h2>
                        <h4 className={styles.desc}>
                            Simple and affordable pricing for everyone.
                        </h4>
                    </div>
                    <div className={styles.content}>
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
                            modules={[Pagination, Autoplay]}
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
                        </Swiper>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Pricing;
