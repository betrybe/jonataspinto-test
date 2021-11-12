import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../Input';
import Select from '../Select';
import useExpenseForm from './useExpenseForm';
import './styles.css';
import { fetchCurrencies } from '../../actions/walletActions';

const ExpenseForm = () => {
  const { paymentMethods, tags, currenciesOptions } = useExpenseForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <form className="p-4 bg-dark text-light expense-form">
      <Input
        type="number"
        className="form-control"
        id="value"
        placeholder="Valor"
        label="Valor"
        name="value"
      />
      <Select
        className="form-select"
        id="currency"
        label="Moeda"
        name="currency"
        options={ currenciesOptions }
      />
      <Select
        className="form-select"
        id="paymentMethod"
        label="Método de pagamento"
        name="paymentMethod"
        options={ paymentMethods }
      />
      <Select
        className="form-select"
        id="tag"
        label="Tag"
        name="tag"
        options={ tags }
      />
      <Input
        type="text"
        className="form-control"
        id="description"
        placeholder="Descrição"
        label="Descrição"
        name="description"
      />
      <button type="button" className="btn btn-primary">Adicionar despesa</button>
    </form>
  );
};

export default ExpenseForm;
