const addUpExpenses = (expenses = [], maximumFractionDigits = 2) => {
  if (expenses.length === 0) {
    return 0;
  }

  const result = expenses.reduce((total, expense) => {
    const { value, currency, exchangeRates } = expense;
    const totalExpense = value * exchangeRates[currency].ask;

    return (total + totalExpense);
  }, 0);

  return result.toFixed(maximumFractionDigits);
};

export default addUpExpenses;
