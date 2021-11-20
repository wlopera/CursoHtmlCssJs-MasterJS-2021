let account = Number(prompt("Ingrese Costo"));
let cost = 0.0;
let dataDiscount = 0;
let discount = 0.0;
let tax = 0.0;

if (account <= 100.0) {
  dataDiscount = "10%";
  discount = account * 0.1;
  cost = account - discount;
} else if (account > 100.0 && account <= 200.0) {
  dataDiscount = "20%";
  discount = account * 0.2;
  cost = account - discount;
} else {
  dataDiscount = "30%";
  discount = account * 0.3;
  cost = account - discount;
}

tax = cost * 0.19;
document.write("<h3>Total</h3><hr>");
document.write(`<pre>
Consumo            : ${account}
Descuento          :  ${discount} | ${dataDiscount}
Monto con descuento: ${cost}
impuesto           : ${tax} '| 19%'
Importe a pagar    : ${cost + tax}</pre>`);
