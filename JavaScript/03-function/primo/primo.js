const numerPrim = () => {
  const number = prompt("Ingrese número");
  let isPrimo = true;
  for (let value = 2; value < number; value++) {
    if (number % value === 0) {
      isPrimo = false;

      break;
    }
  }

  if (isPrimo) {
    document.write(`El numero ${number} es primo`);
  } else {
    document.write(`El numero ${number} no es primo`);
  }
};

numerPrim();
