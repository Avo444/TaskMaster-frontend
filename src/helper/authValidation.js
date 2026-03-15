import { date, object, string, email } from "yup";

const authValidation = (isRegister) =>
    object({
        email: string().email().required(),
        password: string()
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
            .required(),

        ...(isRegister && {
            name: string().required(),
            confirmPassword: string()
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
                .required(),
            createdDate: date().default(() => new Date()),
        }),
    });

export default authValidation;
