import { ErrorMessage, Field } from "formik";

import styles from "./index.module.scss";

const AuthFormItem = ({ name, type, placeholder, Icon }) => {
    return (
        <div className={styles.item}>
            <label className={styles.item__content}>
                {Icon && <Icon className={styles.icon} />}
                <Field name={name} type={type} placeholder={placeholder} />
            </label>
            <ErrorMessage name={name} component={"p"} className={styles.error} />
        </div>
    );
};

export default AuthFormItem;
