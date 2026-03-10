import { Autoplay, Pagination } from "swiper/modules";
import { Element } from "react-scroll";
import { Swiper } from "swiper";

import styles from "./index.module.scss";
const SliderSectionLayout = ({ children, name, title, desc }) => {
    return (
        <Element name={name} className={styles.pricing}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>{title}</h2>
                        {desc && <h4 className={styles.desc}>{desc}</h4>}
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
                            {children}
                        </Swiper>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default SliderSectionLayout;
