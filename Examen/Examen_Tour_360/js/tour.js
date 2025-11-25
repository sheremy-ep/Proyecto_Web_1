var panorama, viewer, container;

// Contenedor donde se mostrará la escena 3D
container = document.querySelector("#container_principal");

// Cargar la foto 360
panorama = new PANOLENS.ImagePanorama("img/shanghai_bund.jpg");

viewer = new PANOLENS.Viewer({
  container: container,
  controlButtons: ["fullscreen"], // Solo botón de fullscreen
  autoHideInfospot: false
});

viewer.add(panorama);

function activarPorClick(infospot) {
  infospot.addEventListener("click", function () {
    infospot.toggleElement();
  });
}

// ==================== TORRE DE LA PERLA ORIENTAL ====================

var infospot1 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot1.position.set(417, 94, -256);
infospot1.addHoverText("Torre de la Perla Oriental", -60);

infospot1.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.9); color:#fff; border-radius: 10px; padding: 15px; font-size: 14px; width: 300px;">
    <h3 style="margin-top:0; color: #8a3d99ff;">Torre de la Perla Oriental</h3>
    <p>Uno de los iconos más reconocidos de Shanghai, ubicada en el distrito de Pudong. Desde su mirador se obtiene una vista panorámica del Bund y del río Huangpu.</p>
  </div>
`;
activarPorClick(infospot1);
panorama.add(infospot1);

// ==================== PEACE HOTEL ====================

var infospot2 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot2.position.set(-450, 200, -11);
infospot2.addHoverText("Peace Hotel", -60);

infospot2.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.9); border-radius: 10px; padding: 15px; color:#fff; width: 280px;">
    <h3 style="margin-top:0;">Peace Hotel</h3>
    <p>Hotel histórico ubicado frente al río, famoso por su arquitectura art déco y por haber sido punto de encuentro de artistas, empresarios y diplomáticos durante décadas.</p>
  </div>
`;
activarPorClick(infospot2);
panorama.add(infospot2);

// ==================== DATOS SOBRE SHANGHAI ====================

var infospot3 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot3.position.set(370, -150, -314);
infospot3.addHoverText("Datos sobre Shanghai", -60);

infospot3.element.innerHTML = `
  <div style="background-color: rgba(255, 255, 255, 0.95); border-radius: 10px; padding: 15px; width: 280px;">
    <h4 style="margin-top:0; color: #333;">Datos sobre Shanghai</h4>
    <img src="img/datos_shanghai.jpeg" style="width:100%; border-radius:5px; margin:10px 0;">
    <p>Shanghai es una de las ciudades más pobladas de China y un centro financiero global. El área del Bund combina edificios históricos europeos con los rascacielos modernos de Pudong.</p>
  </div>
`;
activarPorClick(infospot3);
panorama.add(infospot3);

// ==================== MIRADOR IZQUIERDO ====================

var infospot4 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot4.position.set(500, -30, 0);
infospot4.addHoverText("Mirador izquierdo", -60);

infospot4.element.innerHTML = `
  <div style="background-color: rgba(255, 255, 255, 0.95); border-radius: 10px; padding: 15px; width: 300px;">
    <h4 style="margin-top:0;">Mirador lado izquierdo</h4>
    <p>Desde este sector del mirador se observan con claridad los rascacielos del distrito financiero de Pudong y el contraste entre la arquitectura moderna y el río Huangpu.</p>
  </div>
`;
activarPorClick(infospot4);
panorama.add(infospot4);

// ==================== GUÍA TURÍSTICA SHANGHAI (PDF) ====================

var infospot5 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot5.position.set(325, 170, -300);
infospot5.addHoverText("Guía turística Shanghai (PDF)", -60);

infospot5.element.innerHTML = `
  <div style="background-color: rgba(244,67,54,0.9); padding:10px; color:#fff; border-radius:5px; width:230px;">
    <h4 style="margin-top:0;">Guía turística de Shanghai</h4>
    <p>Haz clic para abrir el documento con información detallada de atracciones, transporte y recomendaciones.</p>
  </div>
`;

infospot5.addEventListener("click", function () {
  window.open("pdf/guia_turistica.pdf", "_blank");
});

panorama.add(infospot5);

// ==================== MIRADOR DERECHO ====================

var infospot6 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot6.position.set(-51, -15, -497);
infospot6.addHoverText("Mirador derecho", -60);

infospot6.element.innerHTML = `
  <div style="background-color: rgba(76, 175, 80, 0.95); color:#fff; border-radius: 10px; padding: 15px; font-size: 14px; width: 280px;">
    <h3 style="margin-top:0;">Mirador lado derecho</h3>
    <p>En esta parte del mirador se aprecia mejor la zona histórica del Bund y las fachadas iluminadas de los edificios clásicos frente al río.</p>
  </div>
`;
activarPorClick(infospot6);
panorama.add(infospot6);

// ==================== MIRADOR CENTRAL ====================

var infospot7 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot7.position.set(370, -50, -314);
infospot7.addHoverText("Mirador central", -60);

infospot7.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.9); border-radius: 10px; padding: 15px; color:#fff; width: 280px;">
    <h4 style="margin-top: 0;">Mirador central</h4>
    <p>Este punto suele ser uno de los más concurridos. Desde aquí se logra una vista equilibrada del Bund, el río y los rascacielos, ideal para fotografías panorámicas.</p>
  </div>
`;
activarPorClick(infospot7);
panorama.add(infospot7);

// ==================== PERSONAS TOMANDO FOTOS ====================

var infospot8 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot8.position.set(-250, -102, -404);
infospot8.addHoverText("Zona de fotografías", -60);

infospot8.element.innerHTML = `
  <div style="background-color: rgba(103, 58, 183, 0.95); color: #fff; border-radius: 10px; padding: 15px; width: 260px;">
    <h4 style="margin-top:0;">Zona de fotografías</h4>
    <p>Esta área del paseo suele llenarse de visitantes que se detienen a tomar fotos del skyline y del movimiento de barcos sobre el río.</p>
  </div>
`;
activarPorClick(infospot8);
panorama.add(infospot8);

// ==================== VIDEO BANCO ICBC EN YOUTUBE ====================

var infospot9 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot9.position.set(-450, 150, 480);
infospot9.addHoverText("Video ICBC en YouTube", -60);

infospot9.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.9); border-radius: 10px; padding: 10px;">
    <h4 style="color: #fff; margin-top: 0;">Video promocional ICBC</h4>
    <iframe width="480" height="270"
      src="https://www.youtube.com/embed/T18Gu6gzplQ"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style="border-radius:5px;">
    </iframe>
  </div>
`;

activarPorClick(infospot9);
panorama.add(infospot9);

// ==================== SONIDOS DE CARROS ====================

var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot10.position.set(-200, -64, 500);
infospot10.addHoverText('Sonidos de carros', -60);

infospot10.element.innerHTML = `
  <div style="color:#000; border-radius:5px; padding:10px; font-size:14px; width:200px;">
    <audio controls>
      <source src="audios/sonidos_carros.mp3" type="audio/mpeg">
    </audio>
  </div>
`;

panorama.add(infospot10);



