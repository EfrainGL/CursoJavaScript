const nombre = 'Efrain'

const dias=[
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sabado',
	'Domingo'
]

let totalKms = 0
for (let i = 0; i < dias.length; i++) {
	const kmts = correr()
	totalKms += kmts
	console.log(`El dia ${i} es el ${dias[i]} corrio ${kmts}`)
}


const promedio = totalKms/dias.length
console.log(`En promedio ${nombre} corrio ${promedio}`)


function correr(){
	const min = 5, max = 15;
	return Math.round(Math.random() *(max - min)) + min
} 


