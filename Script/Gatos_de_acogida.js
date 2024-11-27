pos = 0;

// Ventana modal de Satur
Satur_modal.addEventListener("click",e=>{
    ventanaSatur.style.display = "block";
    intervalSatur = setInterval(cambiarImagenSatur, 2500);
    return false;
})
cerrarSatur.addEventListener("click",e=>{
    ventanaSatur.style.display = "none";
    clearInterval(intervalSatur);
    return false;
})
imagenesSatur = ["Imagenes/3-Acogida/Satur/Satur3.jpg", "Imagenes/3-Acogida/Satur/Satur4.jpg", "Imagenes/3-Acogida/Satur/Satur5.jpg", "Imagenes/3-Acogida/Satur/Satur6.jpg", "Imagenes/3-Acogida/Satur/Satur7.jpg", "Imagenes/3-Acogida/Satur/Satur8.jpg"];
function cambiarImagenSatur() {
    cambiarImagen("carrSatur", imagenesSatur);
}

// Ventana modal de Wicca
Wicca_modal.addEventListener("click",e=>{
    ventanaWicca.style.display = "block";
    intervalWicca = setInterval(cambiarImagenWicca, 2500);
    return false;
})
cerrarWicca.addEventListener("click",e=>{
    ventanaWicca.style.display = "none";
    clearInterval(intervalWicca);
    return false;
})
imagenesWicca = ["Imagenes/3-Acogida/Wicca/Wicca3.jpg", "Imagenes/3-Acogida/Wicca/Wicca4.jpg", "Imagenes/3-Acogida/Wicca/Wicca5.jpg", "Imagenes/3-Acogida/Wicca/Wicca6.jpg","Imagenes/3-Acogida/Wicca/Wicca7.jpg","Imagenes/3-Acogida/Wicca/Wicca8.jpg", "Imagenes/3-Acogida/Wicca/Wicca9.jpg"];
function cambiarImagenWicca() {
   cambiarImagen ("carrWicca", imagenesWicca);
}

// Ventana modal de Piro
Piro_modal.addEventListener("click",e=>{
    ventanaPiro.style.display = "block";
    intervalPiro = setInterval(cambiarImagenPiro, 2500);
    return false;
})
cerrarPiro.addEventListener("click",e=>{
    ventanaPiro.style.display = "none";
    clearInterval(intervalPiro);
    return false;
})
imagenesPiro = ["Imagenes/3-Acogida/Piro/Piro3.jpg", "Imagenes/3-Acogida/Piro/Piro4.jpg", "Imagenes/3-Acogida/Piro/Piro5.jpg", "Imagenes/3-Acogida/Piro/Piro6.jpg", "Imagenes/3-Acogida/Piro/Piro7.jpg"];
function cambiarImagenPiro() {
   cambiarImagen ("carrPiro", imagenesPiro);
}

// Ventana modal de Dusha
Dusha_modal.addEventListener("click",e=>{
    ventanaDusha.style.display = "block";
    intervalDusha = setInterval(cambiarImagenDusha, 2500);
    return false;
})
cerrarDusha.addEventListener("click",e=>{
    ventanaDusha.style.display = "none";
    clearInterval(intervalDusha);
    return false;
})
imagenesDusha = ["Imagenes/3-Acogida/Dusha/Dusha3.jpg", "Imagenes/3-Acogida/Dusha/Dusha4.jpg", "Imagenes/3-Acogida/Dusha/Dusha5.jpg", "Imagenes/3-Acogida/Dusha/Dusha6.jpg", "Imagenes/3-Acogida/Dusha/Dusha7.jpg", "Imagenes/3-Acogida/Dusha/Dusha8.jpg", "Imagenes/3-Acogida/Dusha/Dusha9.jpg", "Imagenes/3-Acogida/Dusha/Dusha10.jpg", "Imagenes/3-Acogida/Dusha/Dusha11.jpg"];
function cambiarImagenDusha() {
   cambiarImagen ("carrDusha", imagenesDusha);
}

// Ventana modal de Fenixa
Fenixa_modal.addEventListener("click",e=>{
    ventanaFenixa.style.display = "block";
    intervalFenixa = setInterval(cambiarImagenFenixa, 2500);
    return false;
})
cerrarFenixa.addEventListener("click",e=>{
    ventanaFenixa.style.display = "none";
    clearInterval(intervalFenixa);
    return false;
})
imagenesFenixa = ["Imagenes/3-Acogida/Fenixa/Fenixa3.jpg", "Imagenes/3-Acogida/Fenixa/Fenixa4.jpg", "Imagenes/3-Acogida/Fenixa/Fenixa5.jpg"];
function cambiarImagenFenixa() {
   cambiarImagen ("carrFenixa", imagenesFenixa);
}

// Ventana modal de Lucas
Lucas_modal.addEventListener("click",e=>{
    ventanaLucas.style.display = "block";
    intervalLucas = setInterval(cambiarImagenLucas, 2500);
    return false;
})
cerrarLucas.addEventListener("click",e=>{
    ventanaLucas.style.display = "none";
    clearInterval(intervalLucas);
    return false;
})
imagenesLucas = ["Imagenes/3-Acogida/Lucas/Lucas3.jpg", "Imagenes/3-Acogida/Lucas/Lucas4.jpg", "Imagenes/3-Acogida/Lucas/Lucas5.jpg", "Imagenes/3-Acogida/Lucas/Lucas6.jpg", "Imagenes/3-Acogida/Lucas/Lucas7.jpg", "Imagenes/3-Acogida/Lucas/Lucas8.jpg", "Imagenes/3-Acogida/Lucas/Lucas9.jpg"];
function cambiarImagenLucas() {
   cambiarImagen ("carrLucas", imagenesLucas);
}

// Ventana modal de Rosco
Rosco_modal.addEventListener("click",e=>{
    ventanaRosco.style.display = "block";
    intervalRosco = setInterval(cambiarImagenRosco, 2500);
    return false;
})
cerrarRosco.addEventListener("click",e=>{
    ventanaRosco.style.display = "none";
    clearInterval(intervalRosco);
    return false;
})
imagenesRosco = ["Imagenes/3-Acogida/Rosco/Rosco3.jpg", "Imagenes/3-Acogida/Rosco/Rosco4.jpg", "Imagenes/3-Acogida/Rosco/Rosco5.jpg", "Imagenes/3-Acogida/Rosco/Rosco6.jpg", "Imagenes/3-Acogida/Rosco/Rosco7.jpg"];
function cambiarImagenRosco() {
   cambiarImagen ("carrRosco", imagenesRosco);
}

// Ventana modal de Misumi
Misumi_modal.addEventListener("click",e=>{
    ventanaMisumi.style.display = "block";
    intervalMisumi = setInterval(cambiarImagenMisumi, 2500);
    return false;
})
cerrarMisumi.addEventListener("click",e=>{
    ventanaMisumi.style.display = "none";
    clearInterval(intervalMisumi);
    return false;
})
imagenesMisumi = ["Imagenes/3-Acogida/Misumi/Misumi3.jpg", "Imagenes/3-Acogida/Misumi/Misumi4.jpg", "Imagenes/3-Acogida/Misumi/Misumi5.jpg", "Imagenes/3-Acogida/Misumi/Misumi6.jpg", "Imagenes/3-Acogida/Misumi/Misumi7.jpg", "Imagenes/3-Acogida/Misumi/Misumi8.jpg", "Imagenes/3-Acogida/Misumi/Misumi9.jpg", "Imagenes/3-Acogida/Misumi/Misumi10.jpg", "Imagenes/3-Acogida/Misumi/Misumi11.jpg"];
function cambiarImagenMisumi() {
   cambiarImagen ("carrMisumi", imagenesMisumi);
}

// Ventana modal de Pepa y Tomás
PepaTomas_modal.addEventListener("click",e=>{
    ventanaPepaTomas.style.display = "block";
    intervalPepaTomas = setInterval(cambiarImagenPepaTomas, 2500);
    return false;
})
cerrarPepaTomas.addEventListener("click",e=>{
    ventanaPepaTomas.style.display = "none";
    clearInterval(intervalPepaTomas);
    return false;
})
imagenesPepaTomas = ["Imagenes/3-Acogida/PepaTomas/002Pepa.jpg", "Imagenes/3-Acogida/PepaTomas/003Tomas.jpg", "Imagenes/3-Acogida/PepaTomas/004PepaTomas.jpg", "Imagenes/3-Acogida/PepaTomas/005Tomas.jpg", "Imagenes/3-Acogida/PepaTomas/006Pepa.jpg", "Imagenes/3-Acogida/PepaTomas/007PepaTomas.jpg", "Imagenes/3-Acogida/PepaTomas/008PepaTomas.jpg", "Imagenes/3-Acogida/PepaTomas/009Tomas.jpg", "Imagenes/3-Acogida/PepaTomas/010Pepa.jpg", "Imagenes/3-Acogida/PepaTomas/011PepaTomas.jpg", "Imagenes/3-Acogida/PepaTomas/012PepaTomas.jpg", "Imagenes/3-Acogida/PepaTomas/013PepaTomasSinfaNeftis.jpg", "Imagenes/3-Acogida/PepaTomas/014Tomas.jpg", "Imagenes/3-Acogida/PepaTomas/015Pepa.jpg", "Imagenes/3-Acogida/PepaTomas/016PepaTomas.jpg",];
function cambiarImagenPepaTomas() {
   cambiarImagen ("carrPepaTomas", imagenesPepaTomas);
}



function cambiarImagen(idImagen, imagenes) {
    pos = pos + 1;
    if (pos >= imagenes.length) {
        pos = 0;
    }
    document.getElementById(idImagen).src = imagenes[pos];
}

