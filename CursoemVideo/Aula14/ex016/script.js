function contar(){
    let inicio = document.getElementById('txtinit')
    let fim = document.getElementById('txtfim')
    let passo =  document.getElementById('txtpasso')
    let res = document.getElementById('res')
    
    if (inicio.value.length  == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        
        if(i < f){
            for(var c = i ; c <= f ; c += p){
                res.innerHTML += ` \u{1F449} ${c}`
            }
        } else if (i > f){
            for(var c = f ; c >= i ; c -= p ){
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
        

    }
}