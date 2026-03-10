import { Autoplay, Pagination } from "swiper/modules";
import { Element } from "react-scroll";
import { Heading } from "../../components/shared";
import { Swiper } from "swiper/react";

import styles from "./index.module.scss";
const SliderSectionLayout = ({ children, name, title, desc, className }) => {
    return (
        <Element name={name} className={styles.sliderContainer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <Heading title={title} desc={desc} />
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
                                bulletClass: styles.bullet,
                                el: `.${styles.pagination}`,
                                bulletActiveClass: styles.bulletActive,
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
                            {children}

                            <div className={styles.pagination}></div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default SliderSectionLayout;
