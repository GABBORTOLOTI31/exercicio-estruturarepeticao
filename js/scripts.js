function exe0() {

    let nota // guarda notas
    let conta = 1 // conta de um a seis
    let soma = 0
    while (conta <= 6 ){
        nota= Number(prompt(`informe a nota ${conta}`))
        conta++ // conta = conta + 1 
        soma = soma + nota
    }
   


    //soma das notas

    //let soma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6
    let media = soma / 6 

    alert(`A media das notas ${media.toFixed(1)}`)
}
    
