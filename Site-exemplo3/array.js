let num = [5, 8, 2]
num[3]= 6 // adicionar no elemento 3 o valor 6
num.push(7) // adicionar o valor 7 no último elemento(Não necessário saber qual último elemento)
num.lenght // saber o comprimento do vetor
num.sort() // pega todos os elementos e coloca em ordem crescente
num.indexOf(7) // buscar valor dentro de um vetor

console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num}`)


/*for(let pos = 0; pos<num.length; pos++){
    console.log(num[pos])
}*/
// forma simplificada e mais recente lê-se (para cada posição dentro de num)
for(let pos in num){
    console.log(num[pos])
}