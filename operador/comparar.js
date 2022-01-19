function comparaNumeros(num1,num2){
    const receber1 = receber(num1, num2);
	const receber2b = receber2(num1, num2);

	return `${receber1} ${receber2b}`;
}

function receber(num1,num2){
    let simNao = 'não';
    if(num1===num2){
        simNao = '';
    }
    return `Os números ${num1} e ${num2} ${simNao} são iguais.`;
}
function receber2(num1,num2){
    const soma = num1+num2;
    let comparaDez = 'menor';
	let comparaVinte = 'menor';
    
    if(soma > 10){
        comparaDez = 'maior';
        
    }
    if (soma > 20) {
		comparaVinte = 'maior';
	}
    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}
console.log(comparaNumeros(10, 15));
