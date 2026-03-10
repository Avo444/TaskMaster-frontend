import { useEffect } from "react";

const Error = () => {
    useEffect(() => {
        document.title = `Connection Error | ${process.env.REACT_APP_NAME}`;
    }, []);
    return <div>Connection error</div>;
};

export default Error;
