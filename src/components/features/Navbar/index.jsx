import { useState } from "react";
import { Link } from "react-scroll";
import { Logo } from "../../shared";
import { ROUTES } from "../../../routes";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

import styles from "./index.module.scss";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const closeMenu = (e) => {
        if (e.target === e.currentTarget || e.target.localName === "svg") {
            setMenu(!menu);
        }
    };

    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.row}>
                    <Logo />

                    <div
                        className={
                            menu
                                ? `${styles.menu__container} ${styles.active}`
                                : styles.menu__container
                        }
                        onClick={closeMenu}
                    >
                        <div className={styles.menu}>
                            <IoMdClose size={32} className={styles.close} />
                            <Link
                                to={"Home"}
                                onClick={() => setMenu(false)}
                                smooth={true}
                                duration={500}
                            >
                                Home
                            </Link>
                            <Link
                                to={"Pricing"}
                                onClick={() => setMenu(false)}
                                smooth={true}
                                duration={500}
                            >
                                Pricing
                            </Link>
                            <Link
                                to={"Features"}
                                onClick={() => setMenu(false)}
                                smooth={true}
                                duration={500}
                            >
                                Features
                            </Link>
                            <NavLink to={ROUTES.LOGIN} className={styles.btn}>
                                Sign in
                            </NavLink>
                        </div>
                    </div>
                    <CiMenuFries
                        size={32}
                        className={styles.mobile}
                        onClick={() => setMenu(!menu)}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
