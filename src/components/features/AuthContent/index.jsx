import { Element } from "react-scroll";
import { AuthForm } from "..";

import styles from "./index.module.scss";
import Lottie from "lottie-react";
import { loginRegisterLottie } from "../../../assets";

const AuthContent = ({ name, isLogin }) => {
    return (
        <Element name={name} className={styles.auth}>
            <div className={styles.container}>
                <div className={styles.auth__content}>
                    <AuthForm isLogin={isLogin} name={name} />
                    <Lottie animationData={loginRegisterLottie} loop={true} />
                </div>
            </div>
        </Element>
    );
};

export default AuthContent;
