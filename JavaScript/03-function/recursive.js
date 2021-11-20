function factorial(n) {
  console.log("Valor inicial: ", n);
  if (n > 1) {
    n = n * factorial(n - 1);
    console.log("Valor modificado:", n);
  }

  return n;
}

console.log("resultado: ", factorial(5));
