import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFaqData } from "../store/slices/faqSlice/api";
import {
    Faq,
    Features,
    Header,
    Pricing,
    Testimonals,
} from "../components/features";
import { getTestimonalData } from "../store/slices/testimonalSlice/api";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME} | Your Productivity Starts Here`;
        dispatch(getFaqData());
        dispatch(getTestimonalData());
    }, []);
    return (
        <>
            <Header />
            <Features />
            <Pricing />
            <Testimonals />
            <Faq />
        </>
    );
};

export default Home;
