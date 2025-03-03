function sumar(numero1, numero2){
    resultado = +numero1 + +numero2;
    return resultado;
}

function mostrarResultado(){
    let elementoNumero1 = document.getElementById("primerNumero");
    let elementoNumero2 = document.getElementById("segundoNumero");
    let eleemntoTexto = document.getElementById("textoresultado");
    let elementoSuma = sumar(elementoNumero1.value, elementoNumero2);

    elementoTexto.textContent = elementoSuma;
}