/*
/objetivos de ambas funciones:
/ejecutar(): muestra el lightbox y reproduce el video.
/ocultar(): detiene el video y oculta el lightbox.
*/

//permite ejecutar el video dentro del lightbox
function ejecutar(divID, videoID) {
    //obtiene el elemento del lightbox por su ID donde se mostrará el video
    const lightbox = document.getElementById(divID);
    //obtiene el elemento <iframe> del video de YouTube por su ID
    const youtube = document.getElementById(videoID);

    //video automatico que se reproduce
    const videoURL = "https://www.youtube.com/embed/_tAScinvoU8?si=uk1uOY0wm6hfzyx1&autoplay=1";

    //const videoURL = "https://www.youtube.com/embed/XuIMWpPwd1k?autoplay=1";

    //video con play pausa
    //se añade mute=1 para evitar bloqueo del autoplay en algunos navegadores web
    //const videoURL = "https://www.youtube.com/embed/XuIMWpPwd1k?mute=1";

    //asignar la URL del video al iframe para cargarlo dinámicamente
    youtube.src = videoURL;
    //cambiar el estilo del lightbox para mostrarlo en pantalla
    lightbox.style.display = "flex";
}


//permite ocultar el lightbox y detiene el video
function ocultar(divID, videoID) {
    //obtiene el contenedor del lightbox por su ID
    const lightbox = document.getElementById(divID);
    //obtiene el iframe del video
    const youtube = document.getElementById(videoID);
    //elimina la URL del iframe, lo que detiene la reproducción del video
    youtube.src = "";
    //oculta el lightbox
    lightbox.style.display = "none";
}
