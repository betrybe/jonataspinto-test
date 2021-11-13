import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';

const useExpenseForm = () => {
  const paymentMethods = useMemo(() => ([
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
  ]), []);

  const tags = useMemo(() => ([
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
  ]), []);

  const mounCurrenciesOptions = useCallback((list = []) => (
    list.map((currency) => ({
      value: currency,
      label: currency,
    }))
  ), []);

  const wallet = useSelector((store) => store.wallet);

  const currenciesOptions = mounCurrenciesOptions(wallet.currencies);

  const newExpenseInitialState = useMemo(() => ({
    value: 0,
    description: '',
    exchangeRates: null,
  }), []);

  const [newExpense, setNewExpense] = useState(newExpenseInitialState);
  const [isEditingMode, setIsEditingMode] = useState(false);

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

  const handleSaveEditedRecord = useCallback((values) => {
    dispatch(actions.saveEditedRecord(wallet.expenses, values));
    setNewExpense(newExpenseInitialState);
    setIsEditingMode(false);
  }, [dispatch, newExpenseInitialState, wallet.expenses]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const formValues = Object.fromEntries(formData);

    if (isEditingMode) {
      return handleSaveEditedRecord({ id: wallet.recordToEdit.id, ...formValues });
    }

    dispatch(actions.addExpense(formValues, wallet.expenses.length));
    setNewExpense(newExpenseInitialState);
  }, [
    dispatch,
    wallet.expenses.length,
    newExpenseInitialState,
    handleSaveEditedRecord,
    isEditingMode,
    wallet.recordToEdit,
  ]);

  useEffect(() => {
    dispatch(actions.updateTotalExpense(wallet.expenses));
  }, [dispatch, wallet.expenses, wallet.expenses.length]);

  useEffect(() => {
    if (wallet.recordToEdit) {
      setNewExpense(wallet.recordToEdit);
      setIsEditingMode(true);
    }
  }, [wallet.recordToEdit]);

  return {
    paymentMethods,
    tags,
    currenciesOptions,
    handleChange,
    newExpense,
    handleSubmit,
    isEditingMode,
  };
};

export default useExpenseForm;
