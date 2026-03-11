import { useState } from "react";
import { Link } from "react-scroll";
import { Logo, NavbarItem } from "../../shared";
import { ROUTES } from "../../../routes";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
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
                            <NavbarItem title={"Home"} setMenu={setMenu} />
                            <NavbarItem title={"Features"} setMenu={setMenu} />
                            <NavbarItem title={"Pricing"} setMenu={setMenu} />
                            <NavbarItem title={"Faq"} setMenu={setMenu} />

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
