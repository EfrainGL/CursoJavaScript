function Punto(x, y) {
	this.x = x
	this.y = y
}

Punto.prototype.moverEnX = function(x) {
		this.x = this.x += x
};

Punto.prototype.moverEnY = function (y) {
		this.y = this.y += y
};	

Punto.prototype.calcularDistancia = function(p){
	const x = this.x - p.x
	const y = this.y - p.y

	return Math.round(Math.sqrt(x*x+y*y))
}; 

const p1 = new Punto(0, 4) 
const p2 = new Punto(3, 0) 


console.log(`La distancia es:`, calcularDistancia(punto1, punto2))
 