import { Footer, Navbar } from "./components/features";
import { TopScroll } from "./components/shared";
import { Error, Home } from "./pages";

import "./App.scss";
import { useSelector } from "react-redux";
import { getTestimonalError } from "./store/slices/testimonalSlice/testimonalSlice";
import { getFaqError } from "./store/slices/faqSlice/faqSlice";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import { useEffect } from "react";

const App = () => {
    const location = useLocation();
    const testimonalError = useSelector(getTestimonalError);
    const faqError = useSelector(getFaqError);
    const error = testimonalError || faqError;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <>
            {!error ? (
                <>
                    <Navbar />
                    <Routes>
                        <Route path={ROUTES.HOME} element={<Home />} />
                        <Route path="*" element={<Error />} />
                    </Routes>

                    <TopScroll />
                    <Footer />
                </>
            ) : (
                <Error />
            )}
        </>
    );
};

export default App;
