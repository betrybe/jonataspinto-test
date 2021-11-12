import * as Yup from 'yup';

const newExpenseSchema = Yup.object().shape({
  value: Yup.number().required(),
  currency: Yup.string().required(),
  method: Yup.string().required(),
  tag: Yup.string().required(),
  description: Yup.string(),
});

export default newExpenseSchema;
