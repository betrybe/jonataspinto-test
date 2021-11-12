import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';

const useExpenseForm = () => {
  const paymentMethods = [
    {
      value: 'dinheiro',
      label: 'Dinheiro',
    },
    {
      value: 'cartão de crédito',
      label: 'Cartão de crédito',
    },
    {
      value: 'cartão de débito',
      label: 'Cartão de débito',
    },
  ];

  const tags = [
    {
      value: 'alimentação',
      label: 'Alimentação',
    },
    {
      value: 'lazer',
      label: 'Lazer',
    },
    {
      value: 'trabalho',
      label: 'Trabalho',
    },
    {
      value: 'transporte',
      label: 'Transporte',
    },
    {
      value: 'saúde',
      label: 'Saúde',
    },
  ];

  const mounCurrenciesOptions = useCallback((list = []) => (
    list.map((currency) => ({
      value: currency,
      label: currency,
    }))
  ), []);

  const wallet = useSelector((store) => store.wallet);

  const currenciesOptions = mounCurrenciesOptions(wallet.currencies);

  const [newExpense, setNewExpense] = useState({
    value: 0,
    currency: '',
    method: '',
    tag: '',
    description: '',
    exchangeRates: null,
  });

  const handleChange = useCallback((event) => {
    const { value, name } = event.target;

    const handlers = {
      value: () => setNewExpense((prevState) => ({ ...prevState, value })),
      currency: () => setNewExpense((prevState) => ({ ...prevState, currency: value })),
      method: () => setNewExpense((prevState) => ({ ...prevState, method: value })),
      tag: () => setNewExpense((prevState) => ({ ...prevState, tag: value })),
      description: () => setNewExpense((prevState) => ({
        ...prevState,
        description: value,
      })),
    };

    return handlers[name]();
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(actions.addExpense(newExpense, wallet.expenses.length));
  }, [newExpense, dispatch, wallet.expenses.length]);

  useEffect(() => {
    dispatch(actions.updateTotalExpense(wallet.expenses));
  }, [dispatch, wallet.expenses, wallet.expenses.length]);

  return {
    paymentMethods,
    tags,
    currenciesOptions,
    handleChange,
    newExpense,
    handleSubmit,
  };
};

export default useExpenseForm;
