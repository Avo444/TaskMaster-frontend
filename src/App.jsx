import { Footer, Navbar } from "./components/features";
import { TopScroll } from "./components/shared";
import { Error, Home } from "./pages";

import "./App.scss";
import { useSelector } from "react-redux";
import { getTestimonalError } from "./store/slices/testimonalSlice/testimonalSlice";
import { getFaqError } from "./store/slices/faqSlice/faqSlice";

const App = () => {
    const testimonalError = useSelector(getTestimonalError);
    const faqError = useSelector(getFaqError);
    const error = testimonalError ||faqError
    return (<>
    {!error ?     <>
            <Navbar />
            <Home />
            <TopScroll />
            <Footer />
        </> : <Error />}
    </>
    
    );
};

export default App;
