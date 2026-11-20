//1
let frutas = ["Maça", "Uva", "Pera"]
console.log(frutas)

//2
let cores = ["Azul", "Vermelho", "Preto", "Marrom"]
console.log(cores[1])

//3
let animais = ["Cachorro", "Jacaré", "Crocodilo"]
animais[1] = "Gato";
console.log(animais);

//4
let nomes = ["Jose", "Maria", "Joao", "Joaquim", "Beatriz", "Bianca"];
nomes.push("Joaquim");
console.log(nomes);

//5
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 9, 10, 11, 12, 13];
console.log(numeros.length)

//1
let numerosPares = numeros.filter(numero => numero %2 == 0);
console.log(numerosPares);

//2
numeros.forEach( numero => {
    if (numero > 10){
        console.log(numero)
    }
})

//3
nomes.forEach(nome => {
    if (nome.length < 5){
        console.log(nome);
    }
})

//4
console.log(numeros.filter(numero => numero != 0))

//5
let paises = ["Brasil", "Argentina", "Venezuela"];
paises.pop();
console.log(paises);

//6
let senha = "12345678";
if (senha.length < 8){
    console.log("O minimo de caracteres são 8.")
} else{
    console.log("Senha válida!")
}