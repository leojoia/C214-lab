function calcularIMC(peso, altura){
    if (altura === 0){
        return 'NaN'; // Retorna caso a altura seja 0, não preenchida(Not a Number)
    }

    const alturaMetros = altura/100;
    imc = (peso / (alturaMetros * alturaMetros).toFixed(2));
    if(imc <= 18.59){
        console.log('Abaixo do peso')
        return imc;
    }
    else if(imc >= 18.60 && imc <=24.99){
        console.log('Peso ideal')
        return imc;
    }
    else if(imc >= 25 && imc <=29.99){
        console.log('Ligeiramente acima do peso')
        return imc;
    }
    else if(imc >= 30 && imc <=34.99){
        console.log('Obesidade I')
        return imc;
    }
    else if(imc >= 35 && imc <=39.99){
        console.log('Obesidade II')
        return imc;
    }
    else{
        console.log('Obesidade III')
        return imc;
    }
}

module.exports = {calcularIMC}; // Módulo responsável pela exportação da função para coleta no teste.
