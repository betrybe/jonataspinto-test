const currencyFormatter = (value = '', locale = 'pr-br', currency = 'BRL') => {
  const stringValue = String(value).replace(/\D/g, '');
  const valueToNumber = Number(stringValue) / 100;
  const data = valueToNumber.toLocaleString(locale, {
    style: 'currency',
    currency,
  });

  return data;
};

export default currencyFormatter;
