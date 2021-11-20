const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let pairs = [],
  odds = [];
multi = [];
aleatories = [];

for (const number of numbers) {
  const aleatory = parseInt(Math.floor(Math.random() * 100));
  const res = number * aleatory;
  aleatories.push(aleatory);
  multi.push(`${number} x ${aleatory} = ${number * aleatory}`);
  if (res % 2 === 0) {
    pairs.push(res);
  } else {
    odds.push(res);
  }
}

document.write(`<pre>
Números aleatorios : ${aleatories}
Multiplicación     : ${multi}
Números pares      : ${pairs}
Números impares    : ${odds}
</pre>`);

console.log(`
Números aleatorios\t: ${aleatories}\n
Multiplicación\t\t: ${multi}\n
Números pares\t\t: ${pairs}\n
Números impares\t\t: ${odds}\n
`);
