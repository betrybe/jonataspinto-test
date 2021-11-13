import selectItemOfList from '.';

const list = [
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

const item1 = list[1];

describe('Util para pegar item de uma lista.', () => {
  it('retornando item de id 0', () => {
    const result = selectItemOfList(list, item1);

    expect(result).toEqual(item1);
  });
});
