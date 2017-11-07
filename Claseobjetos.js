const punto1 = {
	x : 0,
	y : 4
}

const punto2 = {
	x: 3,
	y: 0
}

const calcularDistancia = (punto1, punto2) =>{
	const x = punto2.x - punto1.x
	const y = punto2.y - punto1.y

	return Math.sqrt(x*x+y*y)
}


console.log(`La distancia es:`, calcularDistancia(punto1, punto2))
 