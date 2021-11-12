import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const useTableExpenses = () => {
  const headers = useMemo(() => ([
    'Descrição',
    'Tag',
    'Método de pagamento',
    'Valor',
    'Moeda',
    'Câmbio utilizado',
    'Valor convertido',
    'Moeda de conversão',
    'Editar/Excluir',
  ]), []);

  const [rows, setRows] = useState([]);

  const exchangeData = useCallback((expense) => {
    const { value, currency, exchangeRates } = expense;

    const usedExchange = exchangeRates[currency];

    const convertedValue = value * usedExchange.ask;

    const conversionCurrency = 'Real';

    return {
      usedExchange,
      convertedValue,
      conversionCurrency,
    };
  }, []);

  const mountRow = useCallback(({ exchangeRates, ...expense }) => ({
    ...expense,
    ...exchangeData({ ...expense, exchangeRates }),
  }), [exchangeData]);

  const wallet = useSelector((store) => store.wallet);

  useEffect(() => {
    const draftRows = wallet.expenses.map((expense) => mountRow(expense));

    setRows(draftRows);
  }, [wallet.expenses, mountRow]);

  return {
    headers,
    rows,
  };
};

export default useTableExpenses;
