// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  let ans = "";
  words.forEach((word) => {
    if (word.length > ans.length) {
      ans = word;
    }
  });
  return ans;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  let sum;
  numbers.forEach((num) => {
    sum += num;
  });

  return sum / numbers.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(words, word) {
  return words[0] ? words.includes(word) : null;
}
