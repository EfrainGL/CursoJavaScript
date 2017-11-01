let vidaGoku = 100
let vidaVegueta = 100

const min = 5 
const max = 12

const AmbosSiguenVivo = ()=> vidaGoku > 0 && vidaVegueta > 0

const calcularGolpe = () => Math.round(Math.random()*(max-min)+min)

const gokuSigueVivo = () => vidaGoku > 0

const veguetaSigueVivo = () => vidaGoku > 0

let round = 0

while(AmbosSiguenVivo()){	
	round++
	console.log(`Round ${round}`)

	const golpeGoku = calcularGolpe()
	const golpeVegueta = calcularGolpe()

	if (golpeGoku > golpeVegueta) {
		console.log(`Goku golpea a Vegueta con una fuerza de: ${golpeGoku}`)
		vidaVegueta-=golpeGoku
		console.log(`La vida restante de Vegueta es: ${vidaVegueta}`)
	}else{
		console.log(`Vegueta golpea Goku con una fuerza de: ${golpeVegueta}`)
		vidaGoku-=golpeVegueta
		console.log(`La vida restante de Goku es: ${vidaGoku}`)
	}
}

if (gokuSigueVivo) {
		console.log(`Goku ha ganado la pelea, en ${round} con: ${vidaGoku} restante`)
	}else{
		console.log(`Goku ha ganado la pelea, en ${round} con: ${vidaVegueta} restante`)
	}