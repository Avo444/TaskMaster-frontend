import AuthContent from "../components/features/AuthContent";

const Auth = ({ isLogin, name }) => {
    return <AuthContent isLogin={isLogin} name={name} />;
};

export default Auth;
