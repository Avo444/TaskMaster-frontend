import { useEffect } from "react";
import { notFoundLottie } from "../assets";

import Lottie from "lottie-react";

const Error = () => {
    useEffect(() => {
        document.title = `Error | ${process.env.REACT_APP_NAME}`;
    }, []);
    return <Lottie animationData={notFoundLottie} loop={true} style={{maxWidth: "fit-content"}} />;
};

export default Error;
