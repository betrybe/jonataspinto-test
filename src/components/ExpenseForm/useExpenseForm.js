import { useCallback } from 'react';
import { useSelector } from 'react-redux';

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

  return {
    paymentMethods,
    tags,
    currenciesOptions,
  };
};

export default useExpenseForm;
