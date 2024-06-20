function countChar(str) {
  let charCount = {};

  for (let char of str) {
  if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

