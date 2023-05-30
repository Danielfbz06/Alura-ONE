

function encriptar() {


    let texto = document.getElementById("texto").value;
    let munieco = document.getElementById("munieco");
    let mensaje = document.getElementById("mensaje");
    let mensajeAlerta = document.getElementById("mensajeAlerta");
    let textoResultado = document.getElementById("textoResultado");
    let botonCopiar = document.getElementById("btn-copiar");

    let textoEncriptado = texto.replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")
    textoResultado.textContent = textoEncriptado;
    munieco.style.display = 'none';
    mensaje.style.display = 'none';
    mensajeAlerta.style.display = 'none';
    botonCopiar.style.display = 'block';
    botonCopiar.style.alignItems = 'center'
}

function desencriptar() {

    let texto = document.getElementById("texto").value;
    let munieco = document.getElementById("munieco");
    let mensaje = document.getElementById("mensaje");
    let mensajeAlerta = document.getElementById("mensajeAlerta");
    let textoResultado = document.getElementById("textoResultado");
    let botonCopiar = document.getElementById("btn-copiar");

    let textoDesencriptado = texto.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    textoResultado.textContent = textoDesencriptado;
    munieco.style.display = 'none';
    mensaje.style.display = 'none';
    mensajeAlerta.style.display = 'none';
    botonCopiar.style.display = 'block';
    botonCopiar.style.alignItems = 'center'
}

function copiar (){
    const btnCopiar = document.getElementById("btn-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
        var contenido = document.getElementById("textoResultado").textContent;
        navigator.clipboard.writeText(contenido);
        
    })
}





