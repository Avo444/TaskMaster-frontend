import { SliderSectionLayout } from "../../../layouts";
import { TestimonalsItem } from "../../shared";
import { SwiperSlide } from "swiper/react";

import styles from "./index.module.scss";
const Testimonals = () => {
    return (
        <SliderSectionLayout
            name={"Testimonals"}
            title={"What Our Users Say"}
            desc={"Hear from our satisfied customers."}
            className={styles.slider}
        >
            <SwiperSlide>
                <TestimonalsItem
                    img={
                        "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
                    }
                    name={"Gago"}
                    profession={"Xadavik"}
                    desc={"Gazan projecta maladec"}
                    stars={5}
                />
            </SwiperSlide>{" "}
            <SwiperSlide>
                <TestimonalsItem
                    img={
                        "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
                    }
                    name={"Gago"}
                    profession={"Xadavik"}
                    desc={"Gazan projecta maladec"}
                    stars={5}
                />
            </SwiperSlide>{" "}
            <SwiperSlide>
                <TestimonalsItem
                    img={
                        "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
                    }
                    name={"Gago"}
                    profession={"Xadavik"}
                    desc={"Gazan projecta maladec"}
                    stars={4}
                />
            </SwiperSlide>{" "}
            <SwiperSlide>
                <TestimonalsItem
                    img={
                        "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
                    }
                    name={"Gago"}
                    profession={"Xadavik"}
                    desc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim commodi facilis inventore, assumenda nihil aspernatur pariatur fugiat eos excepturi animi esse modi illum alias tempora. Iure voluptates id ducimus sapiente."}
                    stars={3}
                />
            </SwiperSlide>
            
        </SliderSectionLayout>
    );
};

export default Testimonals;
