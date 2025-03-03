function consultarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio");

    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

    switch (fruta)
    {
        case "1":
            elementoRespuesta.textContent = "$8.45";
            break;
        case "2":
            elementoRespuesta.textContent = "$2.32";
            break;
        case "3":
            elementoRespuesta.textContent = "$4.20";
            break;
        case "4":
            elementoRespuesta.textContent = "$1.54";
            break;
        case "5":
            elementoRespuesta.textContent = "$7.54";
            break;
    }
}