//traer elementos

var paseDia = document.getElementById('pase_dia')
var paseCompleto = document.getElementById('pase_completo')
var paseDosDias = document.getElementById('pase_dosdias')
var camisaEvento = document.getElementById('camisa_evento')
var etiquetasEvento = document.getElementById('etiquetas')
var regaloEvento = document.getElementById('regalo')



var textoRegalo //no funciona

console.log(regaloEvento.value == 1)
if (regaloEvento.value == 1){
    textoRegalo = "Regalo: Pulsera"
}
else if (regaloEvento.value == 2){
    textoRegalo = "Regalo: Etiquetas"
}
else if (regaloEvento.value == 3){
    textoRegalo = "Regalo: Plumas"
}else{
      textoRegalo = "Regalo: - "
}

//escucha

var calculo = document.getElementById("calcular")

calculo.addEventListener('click', sumaTotal)

   
function sumaTotal(){

 //seleccion regalo
var textoRegalo 

console.log(regaloEvento.value == 1)
if (regaloEvento.value == 1){
    textoRegalo = "Regalo: Pulsera"
}
else if (regaloEvento.value == 2){
    textoRegalo = "Regalo: Etiquetas"
}
else if (regaloEvento.value == 3){
    textoRegalo = "Regalo: Plumas"
}else{
      textoRegalo = "Regalo: - "
}


      
//obtener valor pases

var suma = Number(paseDia.value * 30) + Number(paseCompleto.value * 50) + Number(paseDosDias.value * 45) + (Number(camisaEvento.value*10) - Number((camisaEvento.value * 10) * 7 /100)) + Number(etiquetasEvento.value * 2)

//mostrar detalle pedido

var resumenPedido = document.getElementById('lista_productos')
resumenPedido.textContent = "Pase por día =" +" "+ paseDia.value + "/" + " " + "Pase completo =" + " " + paseCompleto.value + "/" +" " + "Pase por dos dias=" + "" + paseDosDias.value + "/" + " " + "Camisa del evento =" + " " + camisaEvento.value + "/" + " " + "Paquete de etiquetas ="+ " " + etiquetasEvento.value + "/ " + "" + textoRegalo 

    

//mostrar suma total
var totalAPagar = document.getElementById('suma-total')
totalAPagar.textContent =  suma
   

}
   




