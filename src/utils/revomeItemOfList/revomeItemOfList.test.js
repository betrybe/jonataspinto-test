import revomeItemOfList from '.';

const expenses = [
  {
    id: 0,
    value: '10',
    currency: 'USD',
    method: 'Cartão de crédito',
    tag: 'Lazer',
    description: 'Dez dólares',
  },
  {
    id: 1,
    value: '20',
    currency: 'EUR',
    method: 'Dinheiro',
    tag: 'Trabalho',
    description: 'Vinte euros',
  },
];

const result1 = [expenses[1]];

const item1 = expenses[0];

const result2 = [expenses[0]];

const item2 = expenses[1];

describe('Util para remover item de lista.', () => {
  it('removendo item de id 0', () => {
    const formatedValue = revomeItemOfList(expenses, item1);

    expect(formatedValue).toEqual(result1);
  });

  it('removendo item utilizando a key value', () => {
    const formatedValue = revomeItemOfList(expenses, item2, 'value');

    expect(formatedValue).toEqual(result2);
  });
});
