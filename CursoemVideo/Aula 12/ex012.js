var idade = 66
console.log(`Vôce tem ${idade} anos.`)
if (idade < 16){
    console.log('NÃO pode votar!')
}else if(idade < 18 || idade > 65){
    console.log('Voto Opcional')
}else {
    console.log('Voto Obrigatório')
}