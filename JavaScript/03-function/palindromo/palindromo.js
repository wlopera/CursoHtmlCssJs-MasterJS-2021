const isPalindromo = () => {
  const value = prompt("Ingrese Palabra");
  const arr1 = value.split(" ").join("").toLocaleLowerCase();
  const arr2 = arr1.split("").reverse("").join("");
  if (arr1 === arr2) {
    document.write(` ${value} ==>  es palindromo `);
  } else {
    document.write(` ${value} ==> no es palindromo `);
  }
};

isPalindromo();
