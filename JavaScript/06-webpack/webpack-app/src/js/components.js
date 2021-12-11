// import "../css/style.css";
import wpLogo from "../img/webpack.png";

export const greet = (name) => {
  console.log("Creando etiqueta h1");

  const h1 = document.createElement("h1");
  h1.innerHTML = `Hola ${name}`;
  document.body.append(h1);

  const img = document.createElement("img");
  img.src = wpLogo;
  document.body.append(img);
};
