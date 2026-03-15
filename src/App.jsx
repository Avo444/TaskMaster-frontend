import { ROUTES } from "./routes";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Auth, Error, Home } from "./pages";
import { TopScroll } from "./components/shared";
import { Footer, Navbar } from "./components/features";
import { Route, Routes, useLocation } from "react-router-dom";
import { getFaqError } from "./store/slices/faqSlice/faqSlice";
import { getTestimonalError } from "./store/slices/testimonalSlice/testimonalSlice";

import "./App.scss";
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
                        <Route
                            path={ROUTES.LOGIN}
                            element={<Auth isLogin={true} name={"Sign In"} />}
                        />
                        <Route
                            path={ROUTES.REGISTER}
                            element={<Auth name={"Sign Up"} />}
                        />
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
