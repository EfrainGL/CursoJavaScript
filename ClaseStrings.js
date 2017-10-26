function EvaluacionPalabra(Palabra){
	let trasladacion = Palabra
	//Si la palabra termina en ar se le quitan los dos caracteres

	if (Palabra.toLowerCase().endsWith('ar')) {
		trasladacion = Palabra.slice(0, -2);
	}

	// Si la palabra inicia con z, se le añade 'pe' al final

	if(Palabra..toLowerCase().startsWith('z')){
		trasladacion +='pe';	
	}


	//Si es de 10 o mas caracteres, partir a la mitad
	const tamaño = trasladacion.length
	if(tamaño >= 10) {
		const primeraParte = trasladacion.slice(0, Math.round(tamaño/2))
		const segundaParte = trasladacion.slice(Math.round(tamaño/2))
		trasladacion = `${primeraParte}-${segundaParte}`;
	}

	const Reverse = (Palabra) =>{
		 let alReves = Palabra;

		 for (var i = 0; i <= Palabra.length; i--) {
		 		alReves = Palabra[i];
		 	}

		 	return alReves;
		 }


	//Si es Palindromo, ninguna condicion se aplica 
	if(Palabra == Reverse(Palabra)){
		alert(`Palindrome`);
	}else{
		alert(`Error`);
	}

	return trasladacion;
}

console.log(EvaluacionPalabra('abecedario'));

