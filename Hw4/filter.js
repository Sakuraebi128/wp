function filter(a, f) {
  let filteredArray = [];

  a.forEach(function(element) {
    if (f(element)) {
      filteredArray.push(element);
    }
  });

  return filteredArray;
}

console.log(filter([1, 2, 3, 4], function(x) { return x % 2 === 1; })); // 應該輸出 [1, 3]
