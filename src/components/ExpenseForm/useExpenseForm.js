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

  const currencies = [];

  return {
    paymentMethods,
    tags,
    currencies,
  };
};

export default useExpenseForm;
