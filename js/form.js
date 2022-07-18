var botonAdicionar = document.querySelector("#adicionar-paciente"); // Selecciono el botón con el id "adicionar-paciente"

botonAdicionar.addEventListener("click",function(event){ // le agrego una escucha, y le digo que si se hace un click en dicho elemento, llame a una función anónima, el evento y le pongo preventDefault, para prevenir cualquier acción por defecto que realice javascript y que no le haya indicado (javascript por defecto, al hacer click reinicia el navegador automáticamente,cosa que no queremos)
    event.preventDefault();

    var form = document.querySelector("#form-adicionar"); // Selecciono el elemento con id "form-adicionar" y lo guardo en la variable form.
    
    var nombre = form.nombre.value; 
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value
    
    var tabla = document.querySelector("#tabla-pacientes"); // Selecciono la tabla con el id "tabla-pacientes"

    pacienteTr = document.createElement("tr"); // Creo un elemento tr    
    nombreTd = document.createElement("td"); // Creo un elemento td
    alturaTd = document.createElement("td"); // Creo un elemento td
    pesoTd = document.createElement("td"); // Creo un elemento td
    gorduraTd = document.createElement("td"); // Creo un elemento td
    imcTd = document.createElement("td"); // Creo un elemento td

    nombreTd.textContent = nombre; // Le asigno el valor ingresado en el formulario "form-adicionar" y que habia guardado previamente en la variable "nombre"
    alturaTd.textContent = altura; // Le asigno el valor ingresado en el formulario "form-adicionar" y que habia guardado previamente en la variable "altura"
    pesoTd.textContent = peso; // Le asigno el valor ingresado en el formulario "form-adicionar" y que habia guardado previamente en la variable "peso"
    gorduraTd.textContent = gordura; // Le asigno el valor ingresado en el formulario "form-adicionar" y que habia guardado previamente en la variable "gordura"
    imcTd.textContent = calcularIMC(peso,altura); // Le asigno el valor calculado con la función "calcularIMC"

    pacienteTr.appendChild(nombreTd); 
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);

});
