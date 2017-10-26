function EvaluacionPalabra(Palabra){
	let trasladacion = Palabra
	//Si la palabra termina en ar se le quitan los dos caracteres

	const Reverse = (trasladacion) => trasladacion.split('').reverse().join('');

	function MinMay(trasladacion){
		const tam = trasladacion.length
		let conversion = ''
		let evaluacion = true

	for (let i = 0; i < tam; i++) {
		const caracter = trasladacion.charAt(i)
		conversion += evaluacion ? caracter.toUpperCase() : caracter.toLowerCase()
		evaluacion = !evaluacion
	}
	return trasladacion;
}

	//Si es Palindromo, ninguna condicion se aplica 
	if(Palabra == Reverse(trasladacion)){
		return MinMay(trasladacion);
	}
}

console.log(EvaluacionPalabra('sometemos'));