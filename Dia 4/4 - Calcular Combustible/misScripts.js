function calcularLitros() {
    var elementokm = document.getElementById("textokm");
    var textokm = elementokm.value;
    var cantkm = Number(textokm);

    var cantLitros = cantkm / 10;

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + cantLitros + " litros de combustible";
}