function verificaValores( number1, number2){
    const primeiraFrase = criaPrimeriaFrase(number1, number2);
    const segundaFrase = criaSegundaFrase(number1, number2);

    return `${primeiraFrase} ${segundaFrase} `;
}



function criaPrimeriaFrase(number1, number2){
    const inicial = 'Os numeros'
    const final = 'sao iguais'
    const simNao = 'nao';
    const e = 'e';

    if(number1 == number2){
        return `${inicial}  ${number1} ${e} ${number2} ${final}`
    } 

    return `${inicial} ${number1} ${e} ${number2} ${simNao} ${final}`;


}



function criaSegundaFrase(number1, number2){
    const soma = number1 + number2;
    const resultado = '.Sua soma é:';
    const resultado2 = 'que é maior que 10 e menor que 20';
    const resultado3 = ' que é menor que 10 e menor que 20'

    if(soma > 10 && soma < 20 ){
        return `${resultado} ${soma} ${resultado2}`;
    }

    return `${resultado} ${soma} ${resultado3}`;
}




console.log(verificaValores( 2, 2));