const punto1 = {
	x : 0,
	y : 4,
	MoverEnX: function (x) {
		this.x = this.x += x
	},
	MoverEnY: function (y) {
		this.y = this.y += y
	}

}

const punto2 = {
	x: 3,
	y: 0,
	MoverEnX: function (x) {
		this.x = this.x += x
	},
	MoverEnY: function (y) {
		this.y = this.y += y
	}
}

const calcularDistancia = (punto1, punto2) =>{
	const x = punto2.x - punto1.x
	const y = punto2.y - punto1.y

	return Math.sqrt(x*x+y*y)
}


console.log(`La distancia es:`, calcularDistancia(punto1, punto2))
 