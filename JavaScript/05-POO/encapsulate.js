class Persona {
  // Atributos privados
  #name;
  #age;

  // Atributo estatico public
  static pi1 = 3.141592;

  // Atributo estatico private
  static #pi2 = 3.141592;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // Metodos publicos para consultar o modificar atributos privados
  set setName(name) {
    this.#methodPrivate();
    this.#name = name;
  }

  get getName() {
    return this.#name;
  }

  set setAge(age) {
    this.#age = age;
  }

  get getAge() {
    return this.#age;
  }

  #methodPrivate() {
    console.log("Metodo privado");
  }

  static get PI() {
    return this.#pi2;
  }

  static set PI(pi) {
    console.log("nuevo valor de pi: ", pi);
  }

  static get PI_I() {
    return 3.141592653589793;
  }
}
const p1 = new Persona("william", 54);
console.log(p1);
p1.setAge = 30;
p1.setName = "lopera";
console.log(p1);
console.log(Persona.pi1);
Persona.pi1 = 30;
console.log(Persona.pi1);
console.log(Persona.PI);
Persona.PI = 45;
console.log(Persona.PI);
Math.PI = 45;
console.log(Math.PI);
console.log(Persona.PI_I);
Persona.PI_I = 45;
console.log(Persona.PI_I);
