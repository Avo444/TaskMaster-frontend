import { Link } from "react-scroll";
import styles from "./index.module.scss";
const NavbarItem = ({ title, setMenu }) => {
    return (
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
    );
};

export default NavbarItem;
