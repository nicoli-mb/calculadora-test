const { somar, subtrair, multiplicar, dividir, porcentagem } = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(10, 0)).toThrow('Divisor não pode ser zero');
});

test('deve somar números negativos corretamente', () => {
  expect(somar(-5, -3)).toBe(-8);
});

test('deve subtrair número negativo de positivo corretamente', () => {
  expect(subtrair(10, -5)).toBe(15);
});

test('deve retornar NaN ao somar com undefined', () => {
  expect(somar(5, undefined)).toBeNaN();
});

test('deve subtrair null corretamente', () => {
  expect(subtrair(null, 5)).toBe(-5);
});


test('deve calcular a porcentagem corretamente', () => {
  expect(porcentagem(200, 10)).toBe(20);
});