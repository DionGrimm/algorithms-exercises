/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
    if (nums.length< 2) {
      return nums;
    }

    const middle = Math.floor(nums.length / 2)
    const array1 = nums.slice(0, middle);
    const array2 = nums.slice(middle);

    return merge(mergeSort(array1), mergeSort(array2));
};

const merge = (array1, array2) => {
  const result = [];
  while (array1.length && array2.length) {
    if (array1[0] <= array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }
  return result.concat(array1, array2);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
