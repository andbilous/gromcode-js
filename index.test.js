const getEvenNumbers = (nums) => nums.filter(item => item % 2 === 0)
it('17 equals 17', () => {
  expect(17).toEqual(17);
})


it('18  not equals 17', () => {
  expect(18).not.toEqual(17);
})

it('get Even Numbers', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4])
})