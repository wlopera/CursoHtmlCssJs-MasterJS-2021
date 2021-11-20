// Variable
let sellValue = Number(prompt("Ingrese el valor de venta dle producto!"));
let price = 0;

// Operacion
sellValue = parseFloat(sellValue);

const igv = parseFloat(sellValue * 19) / 100;

price = sellValue + igv;

// Salida
// document.write("Valor de venta: ", sellValue, "<br>");
// document.write("IGV: ", igv, "<br>");
// document.write("Precio de venta: ", price);

document.write(`<pre>
                Valor de venta : ${sellValue} <br>
                IGV            : ${igv} <br> 
                Precio de venta: ${price}
                </pre>`);

console.log(
  `Valor de venta\t:${sellValue}\nIGV\t\t\t\t:${igv}\nPrecio de venta\t:${price}`
);
