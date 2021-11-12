import addUpExpenses from '.';

const exchangeRates = {
  USD: {
    code: 'USD',
    codein: 'BRL',
    name: 'Dólar Comercial',
    high: '5.5765',
    low: '5.5739',
    varBid: '0',
    pctChange: '0',
    bid: '5.5735',
    ask: '5.575',
    timestamp: '1601982529',
    create_date: '2020-10-06 08:08:50',
  },
  EUR: {
    code: 'EUR',
    codein: 'BRL',
    name: 'Euro',
    high: '6.5787',
    low: '6.5591',
    varBid: '-0.0006',
    pctChange: '-0.01',
    bid: '6.5645',
    ask: '6.5685',
    timestamp: '1601982922',
    create_date: '2020-10-06 08:15:23',
  },
};

const expenses = [
  {
    id: 0,
    value: '10',
    currency: 'USD',
    method: 'Cartão de crédito',
    tag: 'Lazer',
    description: 'Dez dólares',
    exchangeRates,
  },
  {
    id: 1,
    value: '20',
    currency: 'EUR',
    method: 'Dinheiro',
    tag: 'Trabalho',
    description: 'Vinte euros',
    exchangeRates,
  },
];

const total = '187.12';

describe('Calcular total de gastos', () => {
  it('Valor zero quando náo ha gastos', () => {
    const formatedValue = addUpExpenses([]);

    expect(formatedValue).toEqual(0);
  });

  it('Valor total dos gastos', () => {
    const formatedValue = addUpExpenses(expenses);

    expect(formatedValue).toEqual(total);
  });
});
