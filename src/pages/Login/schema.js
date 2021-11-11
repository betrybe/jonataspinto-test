import * as Yup from 'yup';

const minPasswordLength = 6;

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(minPasswordLength),
});

export default loginSchema;
