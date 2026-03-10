import { TopScroll } from "./components/shared";
import { Footer, Navbar } from "./components/features";
import { Home } from "./pages";
import "./App.scss";

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <TopScroll />
            <Footer />
        </>
    );
};

export default App;
