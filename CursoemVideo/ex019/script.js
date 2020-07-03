function adicionar(){
    var num = document.getElementById('txtnum')
    var add = document.getElementById('selnum')
    if(num.value.length == 0){
        window.alert('Valor inválido ou adicionado na lista!')
    } else {
        var n = Number(num.value)
        add.innerHTML = ''
        var numero = document.createElement('option')
        numero.value = `add${c}`
        add.appendChild(numero)
        numero.text = `Valor ${n} foi adicionado`

    }
}



function finalizar(){

}