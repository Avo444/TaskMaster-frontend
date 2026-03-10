import { useSelector } from "react-redux";
import { SliderSectionLayout } from "../../../layouts";
import { TestimonalsItem } from "../../shared";
import { SwiperSlide } from "swiper/react";
import { getTestimonal } from "../../../store/slices/testimonalSlice/testimonalSlice";

import styles from "./index.module.scss";
const Testimonals = () => {
    const testimonal = useSelector(getTestimonal);
    console.log(testimonal)
    return (
        <SliderSectionLayout
            name={"Testimonals"}
            title={"What Our Users Say"}
            desc={"Hear from our satisfied customers."}
            className={styles.slider}
        >
            {testimonal.length > 0 &&
                testimonal.map((data) => (
                    <SwiperSlide key={data.id}>
                        <TestimonalsItem data={data} />
                    </SwiperSlide>
                ))}
        </SliderSectionLayout>
    );
};

export default Testimonals;
