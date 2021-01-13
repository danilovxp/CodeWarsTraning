// Consecutive letters

// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

function solve(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const str = new RegExp(s.split("").sort().join(""));
  return str.test(alphabet);
}

console.log(solve("abc")); //, true);
console.log(solve("abd")); // false);
console.log(solve("dabc")); //, true);
console.log(solve("abbc")); // false);
