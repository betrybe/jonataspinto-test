import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../Input';
import Select from '../Select';
import useExpenseForm from './useExpenseForm';
import './styles.css';
import actions from '../../actions';

const ExpenseForm = () => {
  const {
    paymentMethods,
    tags,
    currenciesOptions,
    handleChange,
    newExpense,
    handleSubmit,
    isEditingMode,
  } = useExpenseForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchCurrencies());
  }, [dispatch]);

  return (
    <form
      className={
        `p-4 bg-${!isEditingMode ? 'dark' : 'success'} text-light expense-form`
      }
      onSubmit={ handleSubmit }
    >
      <Input
        type="number"
        className="form-control"
        id="value"
        placeholder="Valor"
        label="Valor"
        name="value"
        value={ newExpense.value }
        onChange={ handleChange }
        data-testid="value-input"
      />
      <Select
        className="form-select"
        id="currency"
        label="Moeda"
        name="currency"
        options={ currenciesOptions }
        onChange={ handleChange }
        data-testid="currency-input"
      />
      <Select
        className="form-select"
        id="method"
        label="Método de pagamento"
        name="method"
        options={ paymentMethods }
        onChange={ handleChange }
        data-testid="method-input"
      />
      <Select
        className="form-select"
        id="tag"
        label="Tag"
        name="tag"
        options={ tags }
        onChange={ handleChange }
        data-testid="tag-input"
      />
      <Input
        type="text"
        className="form-control"
        id="description"
        placeholder="Descrição"
        label="Descrição"
        name="description"
        value={ newExpense.description }
        onChange={ handleChange }
        data-testid="description-input"

      />
      <button
        type="submit"
        className="btn btn-primary"
      >
        {!isEditingMode ? 'Adicionar despesa' : 'Editar despesa'}
      </button>
    </form>
  );
};

export default ExpenseForm;
