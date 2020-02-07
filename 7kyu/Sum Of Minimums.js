function sumOfMinimums(arr) {
  return arr.reduce((total, item)=>total + Math.min(...item) , 0);
}

console.log(sumOfMinimums([
  [1, 2, 3, 4, 5], // minimum value of row is 1
  [5, 6, 7, 8, 9], // minimum value of row is 5
  [20, 21, 34, 56, 100] // minimum value of row is 20
]));