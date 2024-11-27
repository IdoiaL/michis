pos = 0;

// Ventana modal de Txispa
Txispa_modal.addEventListener("click",e=>{
    ventanaTxispa.style.display = "block";
    intervalTxispa = setInterval(cambiarImagenTxispa, 2500);
    return false;
})
cerrarTxispa.addEventListener("click",e=>{
    ventanaTxispa.style.display = "none";
    clearInterval(intervalTxispa);
    return false;
})
imagenesTxispa = ["Imagenes/1-Casa/Txispa/Txispa3.jpg", "Imagenes/1-Casa/Txispa/Txispa4.jpg","Imagenes/1-Casa/Txispa/Txispa5.jpg","Imagenes/1-Casa/Txispa/Txispa6.jpg","Imagenes/1-Casa/Txispa/Txispa7.jpg","Imagenes/1-Casa/Txispa/Txispa8.jpg","Imagenes/1-Casa/Txispa/Txispa9.jpg","Imagenes/1-Casa/Txispa/Txispa10.jpg","Imagenes/1-Casa/Txispa/Txispa11.jpg"];
function cambiarImagenTxispa() {
    cambiarImagen("carrTxispa", imagenesTxispa);
}

// Ventana modal de Luna
Luna_modal.addEventListener("click",e=>{
    ventanaLuna.style.display = "block";
    intervalLuna = setInterval(cambiarImagenLuna, 2500);
    return false;
})
cerrarLuna.addEventListener("click",e=>{
    ventanaLuna.style.display = "none";
    clearInterval(intervalLuna);
    return false;
})
imagenesLuna = ["Imagenes/1-Casa/Luna/Luna3.jpg", "Imagenes/1-Casa/Luna/Luna4.jpg", "Imagenes/1-Casa/Luna/Luna5.jpg"];
function cambiarImagenLuna() {
    cambiarImagen("carrLuna", imagenesLuna);
}

// Ventana modal de Sinfa
Sinfa_modal.addEventListener("click",e=>{
    ventanaSinfa.style.display = "block";
    intervalSinfa = setInterval(cambiarImagenSinfa, 2500);
    return false;
})
cerrarSinfa.addEventListener("click",e=>{
    ventanaSinfa.style.display = "none";
    clearInterval(intervalSinfa);
    return false;
})
imagenesSinfa = ["Imagenes/1-Casa/Sinfa/Sinfa3.jpg", "Imagenes/1-Casa/Sinfa/Sinfa4.jpg", "Imagenes/1-Casa/Sinfa/Sinfa5.jpg", "Imagenes/1-Casa/Sinfa/Sinfa6.jpg", "Imagenes/1-Casa/Sinfa/Sinfa7.jpg", "Imagenes/1-Casa/Sinfa/Sinfa8.jpg", "Imagenes/1-Casa/Sinfa/Sinfa9.jpg"];
function cambiarImagenSinfa() {
    cambiarImagen("carrSinfa", imagenesSinfa);
}

// Ventana modal de Neftis
Neftis_modal.addEventListener("click",e=>{
    ventanaNeftis.style.display = "block";
    intervalNeftis = setInterval(cambiarImagenNeftis, 2500);
    return false;
})
cerrarNeftis.addEventListener("click",e=>{
    ventanaNeftis.style.display = "none";
    clearInterval(intervalNeftis);
    return false;
})
imagenesNeftis = ["Imagenes/1-Casa/Neftis/Neftis3.jpg", "Imagenes/1-Casa/Neftis/Neftis4.jpg","Imagenes/1-Casa/Neftis/Neftis5.jpg","Imagenes/1-Casa/Neftis/Neftis6.jpg","Imagenes/1-Casa/Neftis/Neftis7.jpg","Imagenes/1-Casa/Neftis/Neftis8.jpg","Imagenes/1-Casa/Neftis/Neftis9.jpg","Imagenes/1-Casa/Neftis/Neftis10.jpg","Imagenes/1-Casa/Neftis/Neftis11.jpg","Imagenes/1-Casa/Neftis/Neftis12.jpg","Imagenes/1-Casa/Neftis/Neftis13.jpg","Imagenes/1-Casa/Neftis/Neftis14.jpg","Imagenes/1-Casa/Neftis/Neftis15.jpg",];
function cambiarImagenNeftis() {
    cambiarImagen("carrNeftis", imagenesNeftis);
}



function cambiarImagen(idImagen, imagenes) {
    pos = pos + 1;
    if (pos >= imagenes.length) {
        pos = 0;
    }
    document.getElementById(idImagen).src = imagenes[pos];
}