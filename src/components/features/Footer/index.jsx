import Logo from "../../shared/Logo";
import styles from "./index.module.scss";
const Footer = () => {
  return (
    <footer>
        <div className={styles.content}>
            <Logo />
            <p className={styles.copyright}>© 2024 TaskMaster. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
