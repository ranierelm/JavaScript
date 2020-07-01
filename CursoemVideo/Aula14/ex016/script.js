function contar(){
    let inicio = document.getElementById('txtinit')
    let fim = document.getElementById('txtfim')
    let passo =  document.getElementById('txtpasso')
    let res = document.getElementById('res')
    
    if (inicio.value.length  == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if(i < f){
            for(var c = i ; c<=f;c+=p){
                res.innerHTML += `${c}, `
            }
        } else {
            for(var c = f ; c>=i;c-=p){
                res.innerHTML += `${c}, `
            }
        }
        

    }
}