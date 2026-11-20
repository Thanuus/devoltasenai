let frutas = ["maçã", "uva", "laranja"];

//console.log(frutas[0]);
//console.log(frutas[1]);
//console.log(frutas);

frutas.push("Abacate");
//console.log(frutas);

frutas.pop();
//console.log(frutas);

let numero = [10,20,30,40];
//console.log(numero.length);
let nomee = "Thanus";
//console.log(nomee.length);

let nomes = ["Ana", "Beatriz", "João"];
let nomeEncontrado = nomes.filter(nome => nome === "João");
console.log(nomeEncontrado);

let cores = ["Azul", "Vermelho", "Verde"];
cores.forEach(cor =>{
    console.log("Cor: " + cor)
})