// for each row, numbers 1-9 with no repeats
// for each column, numbers 1-9 with no repeats

const numberList = [1,2,3,4,5,6,7,8,9];

export function hasDuplicates(numberList) {
  return new Set(numberList).size !== numberList.length;
}

// if (testArr) {
//   return true;
//   console.log("Duplicate elements found.");
// }
// else {
//   return false;
//   console.log("No Duplicates found.");
// }

