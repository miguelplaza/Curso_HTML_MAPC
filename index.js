//Variables
var largo = 16;
var ancho = 23;
var alto = 13;



//Volumen
const volumen = largo * ancho * alto
console.log('Volumen: ', volumen);

//Area: 2(largo * ancho) + alto
const area_lateral = largo * alto
const area_base = largo * ancho
const area_total = area_lateral + 2*area_base
console.log('Área Total: ', area_total);