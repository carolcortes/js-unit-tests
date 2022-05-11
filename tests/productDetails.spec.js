const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(productDetails('Alcool gel', 'Máscara') instanceof Array).toBe(true);
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    expect(productDetails('Alcool gel', 'Máscara')[0] instanceof Object).toBe(true);
    expect(productDetails('Alcool gel', 'Máscara')[1] instanceof Object).toBe(true);
    expect(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1]).toBe(true);
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123')).toBe(true);
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123')).toBe(true);
  });
});
