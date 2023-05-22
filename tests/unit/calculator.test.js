import calculator from '../../src/router/calculator'

test('should know  1+1 = 2', () => {
  const expected = 2
  const actual = calculator.add(1, 1)
  expect(actual).toBe(expected)
})
