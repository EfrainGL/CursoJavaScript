const Punto = {
	init: function init(x,y) {
		this.x = x
		this.y = y
	},
	moverEnX: function moverEnX(x){
		this.x += x
	},
	moverEnY: function moverEnY(y){
		this.y += y
	},
	calcularDistancia: function calcularDistancia(p){
		const x = this.x - p.x
    	const y = this.y - p.y

	return Math.round(Math.sqrt(x*x+y*y))
	}
}

const p1 = Object.create(Punto)
const p2 = Object.create(Punto) 

p1.init(0,4)
p2.init(3,0)


console.log(p1.calcularDistancia(p2))
console.log(p2.calcularDistancia(p1)) 


