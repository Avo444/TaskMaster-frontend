import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { logo } from "../../../assets";

import styles from "./index.module.scss";
const Logo = () => {
    return (
        <NavLink to={ROUTES.HOME} className={styles.logo}>
            <img src={logo} alt="logo" />
            {process.env.REACT_APP_NAME}
        </NavLink>
    );
};

export default Logo;
