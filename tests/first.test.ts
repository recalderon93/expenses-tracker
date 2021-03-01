function sum(num: number): number{
  return num + num;
}

test('sum 2 +2', () => {
  expect(sum(2)).toBe(4);
})