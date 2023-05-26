
function encriptar() {

    let texto = document.getElementById("texto").value;
    let munieco = document.getElementById("munieco");
    let mensaje = document.getElementById("mensaje");
    let mensajeAlerta = document.getElementById("mensajeAlerta");
    let textoResultado = document.getElementById("textoResultado");
    
    let textoEncriptado = texto.replace(/e/gi,"enter")
                                .replace(/i/gi,"imes")
                                .replace(/a/gi,"ai")
                                .replace(/o/gi,"ober")
                                .replace(/u/gi,"ufat")
    textoResultado.textContent = textoEncriptado;
    munieco.style.display = 'none';
    mensaje.style.display = 'none';
    mensajeAlerta.style.display = 'none';
}





