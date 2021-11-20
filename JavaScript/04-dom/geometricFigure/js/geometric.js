// Patron modular
const myModule = (() => {
  ("use strict");
  // Variables
  const valueResult = document.getElementById("result");

  const btnPerimSquare = document.querySelector("#btnPerimSquare"),
    btnAreaSquare = document.querySelector("#btnAreaSquare"),
    btnPerimTriangle = document.querySelector("#btnPerimTriangle"),
    btnAreaTriangle = document.querySelector("#btnAreaTriangle"),
    btnDiameterCircle = document.querySelector("#btnDiameterCircle"),
    btnPerimCircle = document.querySelector("#btnPerimCircle"),
    btnAreaCircle = document.querySelector("#btnAreaCircle");

  // area y perimetro de un cuadrado
  const perimSquare = (side) => 4 * side;
  const areaSquare = (side) => side * side;

  const getSideElement = (id) => {
    const inputSide = document.getElementById(id);
    return Number(inputSide.value);
  };

  btnPerimSquare.addEventListener("click", () => {
    const value = getSideElement("inputSide");

    valueResult.innerText = `El perímetro del cuadrado es: ${perimSquare(
      value
    )} cm`;
  });

  btnAreaSquare.addEventListener("click", () => {
    const value = getSideElement("inputSide");
    valueResult.innerText = `El área del cuadrado es: ${areaSquare(
      value
    )} cm^2`;
  });

  // Area y perimetro de un triangulo
  const perimTriangle = (side1, side2, side3) => side1 + side2 + side3;
  const areaTriangle = (base, height) => (base * height) / 2;

  btnPerimTriangle.addEventListener("click", () => {
    const side1 = getSideElement("side1Triangle");
    const side2 = getSideElement("side2Triangle");
    const side3 = getSideElement("side3Triangle");

    valueResult.innerText = `El perímetro del triángulo es: ${perimTriangle(
      side1,
      side2,
      side3
    )} cm`;
  });

  btnAreaTriangle.addEventListener("click", () => {
    const base = getSideElement("baseTriangle");
    const height = getSideElement("heightTriangle");

    valueResult.innerText = `El área del triángulo es: ${areaTriangle(
      base,
      height
    )} cm^2`;
  });

  // Diametro, area y perimetro de un circulo
  const diameterCircle = (radius) => 2 * radius;
  const perimCircle = (radius) => diameterCircle(radius) * Math.PI;
  const areaCircle = (radius) => radius * radius * Math.PI;

  btnDiameterCircle.addEventListener("click", () => {
    const radius = getSideElement("radius");

    valueResult.innerText = `El diámetro del círculo es: ${diameterCircle(
      radius
    )} cm`;
  });

  btnPerimCircle.addEventListener("click", () => {
    const radius = getSideElement("radius");

    valueResult.innerText = `El perímetro del círculo es: ${perimCircle(
      radius
    )} cm`;
  });

  btnAreaCircle.addEventListener("click", () => {
    const radius = getSideElement("radius");

    valueResult.innerText = `El área del círculo es: ${areaCircle(
      radius
    )} cm^2`;
  });

  //   return {
  //     perimSquare: calcPerimSquare,
  //     areaSquare: calcAreaSquare,
  //   };
})();
