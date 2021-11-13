import * as Yup from 'yup';

const minValue = 0.01;

const newExpenseSchema = Yup.object().shape({
  value: Yup.number().required().min(minValue),
  currency: Yup.string().required(),
  method: Yup.string().required(),
  tag: Yup.string().required(),
  description: Yup.string().required(),
});

export default newExpenseSchema;
