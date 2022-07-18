var pacientes = document.querySelectorAll(".paciente"); // seleccionando todos los elementos del DOM que tengan la clase "class=paciente"


for(var i = 0;i< pacientes.length;i++){
    var paciente = pacientes[i]; // Dentro de los elementos con clase "paciente", creo un for para iterar e ir buscando en cada elemento las siguientes clases dentro.

    var tdPeso = paciente.querySelector(".info-peso"); // Busco el elemento con clase "info-peso"
    var peso = tdPeso.textContent; // voy guardando cada valor del DOM buscado en una variable diferente, y obtengo su valor con el metodo "textContent"

    var tdAltura = paciente.querySelector(".info-altura"); // Busco el elemento con clase "info-altura"
    var altura = tdAltura.textContent; // voy guardando cada valor del DOM buscado en una variable diferente, y obtengo su valor con el metodo "textContent"

    var tdIMC = paciente.querySelector(".info-imc"); // Busco el elemento con clase "info-imc"
    // Ahora con los valores buscados previamente, tengo que calcular el imc

    pesoEsValido = true;
    alturaEsValida = true;

    if((peso < 0) || (peso > 650)){ // Realizo validación para que no se pueda ingresar peso negativo ni valor mayor a 650 kg. 
        tdIMC.textContent = "Peso incorrecto"; // Si el peso es incorrecto, modifico el IMC y le pongo "Peso incorrecto"
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if((altura < 0) || (altura > 3.00)){ // Realizo validación para que no se pueda ingresar altura negativa ni valor mayor a 3 metros.
        tdIMC.textContent = "Altura incorrecta"; // Si la altura es incorrecta, modifico el IMC y le pongo "Altura incorrecto"
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso,altura); // Finalmente, si el peso y la altura son válidos, modifico el valor de la variable tdIMC con el metodo textContent, a traves de la función calcularIMC, a la cual le paso los parámetros "peso" y "altura"
    }

}

function calcularIMC(peso,altura){ // Función calcularIMC, la cual calcula el imc en base a dos parámetros, peso y altura.
    var imc = peso / (altura * altura);
    return imc.toFixed(2); // Retorno el valor IMC, y con el método toFixed, devuelvo un valor con solo dos decimales.
}




 


