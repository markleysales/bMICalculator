const calcular = document.getElementById('button')


function imc(){
    const nome = document.getElementById('name').value;
    const altura = document.getElementById('height').value;
    const peso = document.getElementById('weight').value;
    const resultado = document.getElementById('result')

    if(nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificação = '';
        if(valorIMC < 18.5){
            classificação = 'abaixo do peso.';
        }else if(valorIMC < 25){
            classificação = 'com peso ideal. parabéns!';
        }else if (valorIMC < 30){
            classificação = 'levemente acima do peso.';
        }else if(valorIMC < 35){
            classificação = 'com obesidade grau I.';
        }else if(valorIMC < 40){
            classificação = 'com obesidade grau II.';
        }else{
            classificação = 'com obesidade grau III. Cuidado!';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificação}`;
        }else{
        alert('Preencha todos os campos.')
    }
}

calcular.addEventListener('click', imc);