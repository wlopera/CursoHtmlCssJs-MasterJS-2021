const myModule = (() => {
  const e = document.getElementById("result"),
    t = document.querySelector("#btnPerimSquare"),
    r = document.querySelector("#btnAreaSquare"),
    n = document.querySelector("#btnPerimTriangle"),
    c = document.querySelector("#btnAreaTriangle"),
    i = document.querySelector("#btnDiameterCircle"),
    l = document.querySelector("#btnPerimCircle"),
    d = document.querySelector("#btnAreaCircle"),
    o = (e) => {
      const t = document.getElementById(e);
      return Number(t.value);
    };
  t.addEventListener("click", () => {
    const t = o("inputSide");
    e.innerText = `El perímetro del cuadrado es: ${((e) => 4 * e)(t)} cm`;
  }),
    r.addEventListener("click", () => {
      const t = o("inputSide");
      e.innerText = `El área del cuadrado es: ${((e) => e * e)(t)} cm^2`;
    });
  n.addEventListener("click", () => {
    const t = o("side1Triangle"),
      r = o("side2Triangle"),
      n = o("side3Triangle");
    e.innerText = `El perímetro del triángulo es: ${((e, t, r) => e + t + r)(
      t,
      r,
      n
    )} cm`;
  }),
    c.addEventListener("click", () => {
      const t = o("baseTriangle"),
        r = o("heightTriangle");
      e.innerText = `El área del triángulo es: ${((e, t) => (e * t) / 2)(
        t,
        r
      )} cm^2`;
    });
  const u = (e) => 2 * e;
  i.addEventListener("click", () => {
    const t = o("radius");
    e.innerText = `El diámetro del círculo es: ${u(t)} cm`;
  }),
    l.addEventListener("click", () => {
      const t = o("radius");
      e.innerText = `El perímetro del círculo es: ${((e) => u(e) * Math.PI)(
        t
      )} cm`;
    }),
    d.addEventListener("click", () => {
      const t = o("radius");
      e.innerText = `El área del círculo es: ${((e) => e * e * Math.PI)(
        t
      )} cm^2`;
    });
})();
