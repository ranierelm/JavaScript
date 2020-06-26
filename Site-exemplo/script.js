function calc(){
    var talt1 = document.querySelector('input#txtalt')
    var tpeso1 = document.querySelector('input#txtpeso')
    var alt1 = Number(talt1.value)
    var peso1 = Number(tpeso1.value)
    var res = document.querySelector('div#res')
    var imc = peso1 / alt1**2 // imc = peso/altura**2
    if (imc <= 18.5){
        res.innerHTML = `<strong>IMC ${(imc).toFixed(1)}<br>CUIDADO! Você está baixo do peso ideal.</strong>`  
    }else if (imc > 18.5  && imc <= 24.9){
        res.innerHTML = `<strong>IMC ${(imc).toFixed(1)}<br>Peso normal</strong>`  
    }else if (imc >= 25 && imc <=29.9){
        res.innerHTML = `<strong>IMC ${(imc).toFixed(1)}<br>Se cuide, você está um pouco acima do peso.</strong>`   
    }else if (imc >= 30 && imc <= 34.9){
        res.innerHTML = `<strong>IMC ${(imc).toFixed(1)}<br>Cuidado. Obesidade Grau I.</strong>` 
    }else if (imc >= 35 && imc<= 40){
        res.innerHTML = `<strong>IMC ${(imc).toFixed(1)}<br>Cuidado. Obesidade Grau II.</strong>`   
    }else if (imc > 40){
        res.innerHTML = `<strong>IMC ${(imc).toFixed(1)}<br>Obesidade Grau III. Procure um médico.</strong>`   
    }
}