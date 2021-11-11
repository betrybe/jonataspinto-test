import currencyFormatter from '.';

describe('Currency formatter', () => {
  it('string R$ deve estar presente no valor retornado', () => {
    const formatedValue = currencyFormatter('40.00');

    expect(formatedValue).toMatch('R$');
  });

  it('testando valor default', () => {
    const formatedValue = currencyFormatter();

    expect(formatedValue).toMatch('0,00');
  });

  it('testando formatação para euro', () => {
    const formatedValue = currencyFormatter(0, 'en-IE', 'EUR');

    expect(formatedValue).toMatch('€');
  });
});
