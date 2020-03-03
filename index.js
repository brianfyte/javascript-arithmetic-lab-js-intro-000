function add () {
  1 + 1
}

function subtract() {
  1 - 1
}

function multiply() {
  1 * 2
}

function divide () {
  4 / 2
}

var number = 10

function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()
console.log(number)

add5()

console.log(number)

divideBy3()

console.log(number)

function increment(n) {
  return n = n += 1
}

function decrement(n) {
  return n = n -= 1
}
