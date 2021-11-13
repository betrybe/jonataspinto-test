import replaceItemOfList from '.';

const list = [
  {
    id: 0,
    value: '10',
    currency: 'USD',
    method: 'Cartão de crédito',
    tag: 'Lazer',
    description: 'Dez dólares',
  },
];

const changedItem = {
  id: 0,
  value: '10',
  currency: 'USD',
  method: 'Cartão de crédito',
  tag: 'Trabalho',
  description: 'Dez dólares',
};

describe('Util para alterar item de lista.', () => {
  it('editando item de id 0', () => {
    const result = replaceItemOfList(list, changedItem);

    expect(result[0]).toEqual(changedItem);
  });
});
