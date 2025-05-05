function exesatisfacao() {

    let nota // guarda notas
    let conta = 1 // conta de um a seis
    let soma = 0
    let insatisfeitos = 0
    let satisfeitos = 0


    while (conta <= 10 ){

        nota= Number(prompt(`informe a nota de 0 a 10 do aluno: ${conta}`))
        
        soma += nota

    if (nota >= 8) {  // se nota for maior/igual 8

        satisfeito++  // = satisfeito +1
    } 
    else if  (nota <= 5) { // = senao se 

        insatisfeitos++ // = insatisfeito +1
    }
        conta++  // = conta + 1 

    }
   


    //soma das notas

    //let soma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6
    let media = soma / 10 

    alert(`A media das notas ${media.toFixed(1)}`)
    alert(`Total de pessoas satisfeitas : ${satisfeitos}`) 
    alert(`Total de pessoas insatisfeitas : ${insatisfeitos}`)
}
    
