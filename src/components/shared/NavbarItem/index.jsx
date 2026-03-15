import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { Link } from "react-scroll";

import styles from "./index.module.scss";

const NavbarItem = ({ title, setMenu, path }) => {
    const location = useLocation();

    return (
        <>
            {location.pathname === ROUTES.HOME ? (
                <Link
                    onClick={() => setMenu(false)}
                    activeClass={styles.active}
                    spy={true}
                    offset={-95}
                    duration={500}
                    smooth={true}
                    to={title}
                    className={styles.item}
                >
                    {title}
                </Link>
            ) : (
                <NavLink className={styles.item} to={path || ROUTES.HOME}>
                    {title}
                </NavLink>
            )}
        </>
    );
};

export default NavbarItem;
