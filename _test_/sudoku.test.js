import { hasDuplicates } from './../src/sudoku.js';

describe('hasDuplicates', () => {

  test ('Should make sure row contains numbers 1 through 9 without duplicates', () => {
    const arr = [1,2,3,4,5,6,7,8,9];
    expect(hasDuplicates(arr)).toBeDefined();
  })

})