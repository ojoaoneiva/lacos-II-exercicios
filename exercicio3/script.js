// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// Utilize o for...of para resolver

// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
k = 0

for (i of maioresPaises){
    console.log(`${k+=1} - ${i}`)
}