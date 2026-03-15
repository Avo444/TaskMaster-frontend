import { Form, Formik } from "formik";
import { authValidation } from "../../../helper";
import { AuthFormItem } from "../../shared";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";

import styles from "./index.module.scss";
const AuthForm = ({ isLogin, name }) => {
    const initialValues = {
        email: "",
        password: "",
        ...(!isLogin && {
            name: "",
            confirmPassword: "",
        }),
    };

    const handleForm = (values) => {
        console.log(values);
    };
    return (
        <div className={styles.formContainer}>
            <h4 className={styles.title}>{name}</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={authValidation(!isLogin)}
                enableReinitialize
                onSubmit={handleForm}
            >
                <Form className={styles.form}>
                    {!isLogin && (
                        <AuthFormItem
                            name="name"
                            placeholder={"Write Your Name"}
                            Icon={FaUser}
                        />
                    )}

                    <AuthFormItem
                        name="email"
                        placeholder={"Write Your Email"}
                        type={"email"}
                        Icon={MdEmail}
                    />
                    <AuthFormItem
                        name="password"
                        placeholder={"Write Your Password"}
                        type={"password"}
                        Icon={MdOutlinePassword}
                    />
                    {!isLogin && (
                        <AuthFormItem
                            name="confirmPassword"
                            placeholder={"Confirm Password"}
                            type={"password"}
                            Icon={IoShieldCheckmark}
                        />
                    )}

                    <button type="submit" className={styles.btn}>
                        Sign {isLogin ? `In` : `Up`}
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default AuthForm;
