function fibonacciCode(num) {
  let a = 0, b = 1

  if (num === a || num === b) {
    return `O numero ${num} pertence a sequencia Fibonacci`
  }

  let nextNum = a + b

  while (nextNum <= num) {
    if (nextNum === num) {
      return `O numero ${num} pertence a sequencia Fibonacci`
    }

    a = b
    b = nextNum
    nextNum = a + b
  }

  return `O numero ${num} nao pertence a sequencia Fibonacci`
}

const numero = 66;
console.log(fibonacciCode(numero));
