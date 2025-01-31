function foo(a = 0, b = 0) { //add default values
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1)); // 1
console.log(foo()); // 0