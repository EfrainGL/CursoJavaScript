//const nombre = $('#nombre')
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



//--------------------------------------------------------------------
//y el resultado del segundo es:${dado2}

let dado1 = 0, anterior = 0, actual = 0;

function tirar(){
	const min = 1, max = 6;
	return Math.round(Math.random() * (max-min) + min)
}

for(let j = 1; j <= 6; j++){
	dado1 = tirar()
	anterior += dado1
	if (dado1 == trampa) {
		console.log(`Trampa, numeros repetidos`)
	} 
    
	console.log(`La cara ${j} del dado es: ${dado1}`)
}



