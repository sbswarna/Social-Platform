import { string } from "yup";
import { object } from "yup";

const loginSchema = object().shape({
    email: string()
        .trim()
        .email('Please enter a valid email')
        .required('This field is required.'),
    password: string()
        .required('This field is required.')
});


export default loginSchema;