// Ventana modal de Lagun
Lagun_modal.addEventListener("click",e=>{
    ventanaLagun.style.display = "block";
    return false;
})
cerrarLagun.addEventListener("click",e=>{
    ventanaLagun.style.display = "none";
    return false;
})

pos = 0;

// Ventana modal de Ametz
Ametz_modal.addEventListener("click",e=>{
    ventanaAmetz.style.display = "block";
    intervalAmetz = setInterval(cambiarImagenAmetz, 2500);
    return false;
})
cerrarAmetz.addEventListener("click",e=>{
    ventanaAmetz.style.display = "none";
    clearInterval(intervalAmetz);
    return false;
})
imagenesAmetz = ["Imagenes/2-Ama/Ametz/Ametz4.jpg", "Imagenes/2-Ama/Ametz/Ametz5.jpg", "Imagenes/2-Ama/Ametz/Ametz6.jpg", "Imagenes/2-Ama/Ametz/Ametz7.jpg"];
function cambiarImagenAmetz() {
    cambiarImagen("carrAmetz", imagenesAmetz);
}

// Ventana modal de Eguzki
Eguzki_modal.addEventListener("click",e=>{
    ventanaEguzki.style.display = "block";
    intervalEguzki = setInterval(cambiarImagenEguzki, 2500);
    return false;
})
cerrarEguzki.addEventListener("click",e=>{
    ventanaEguzki.style.display = "none";
    clearInterval(intervalEguzki);
    return false;
})
imagenesEguzki = ["Imagenes/2-Ama/Eguzki/Eguzki4.jpg", "Imagenes/2-Ama/Eguzki/Eguzki5.jpg", "Imagenes/2-Ama/Eguzki/Eguzki6.jpg"];
function cambiarImagenEguzki() {
    cambiarImagen("carrEguzki", imagenesEguzki);
}



function cambiarImagen(idImagen, imagenes) {
    pos = pos + 1;
    if (pos >= imagenes.length) {
        pos = 0;
    }
    document.getElementById(idImagen).src = imagenes[pos];
}

