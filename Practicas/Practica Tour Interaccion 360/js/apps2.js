//variables controladoras 
var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/oficina.jpg');

//El valor 50 es el radio del infospot. El infospot es un marcador interactivo que aparece en la escena y puede mostrar información o contenido adicional cuando el usuario interactúa con él (por ejemplo, al hacer clic o pasar el ratón por encima).
//El radio del infospot determina el área de interacción con el usuario. 
// Crea y agrega el primer infospot


var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(0, 0, -500);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('Un televisor 4K es un televisor con resolución 4K. Esto significa que el televisor tiene 3840 píxeles horizontales y 2160 píxeles verticales, lo que representa un total de aproximadamente 8.3 millones de píxeles. En las especificaciones de los televisores, las resoluciones generalmente se muestran como “3840 x 2160” para televisores 4K.', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Un televisor 4K es un televisor con resolución 4K. Esto significa que el televisor tiene 3840 píxeles horizontales y 2160 píxeles verticales, lo que representa un total de aproximadamente 8.3 millones de píxeles. En las especificaciones de los televisores, las resoluciones generalmente se muestran como “3840 x 2160” para televisores 4K.</div>';
panorama.add(infospot1);



// Crea y agrega el segundo infospot
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(1000, -100, 1000);
infospot2.addHoverText('Una impresora es un dispositivo periférico de salida del ordenador que permite producir una gama permanente de textos o gráficos de documentos almacenados en un formato electrónico, imprimiéndolos en medios físicos, normalmente en papel, utilizando cartuchos de tinta o tecnología láser (con tóner).', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Una impresora es un dispositivo periférico de salida del ordenador que permite producir una gama permanente de textos o gráficos de documentos almacenados en un formato electrónico, imprimiéndolos en medios físicos, normalmente en papel, utilizando cartuchos de tinta o tecnología láser (con tóner).</div>';
panorama.add(infospot2);



// Crea y agrega el tercer infospot
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(-430, 50, -1000);
infospot3.addHoverText('La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.', -60);
//insertar el reproductor de video de YouTube en el Infospot
//agregar el parametro para pantalla completa allowfullscreen
infospot3.element.innerHTML = `
    <div class="" style="">
<iframe width="1745" height="697" src="https://www.youtube.com/embed/nv_2rz5BFDA" title="Just Thinking...Retro Jazz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
`;

/*infospot3.element.innerHTML = '<div style="background-color: rgba(28, 134, 12, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.</div>';*/
panorama.add(infospot3);


var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(265, 50, 940);
infospot5.addHoverText('Un audio MP3 multimedial...', -60);
infospot5.element.innerHTML = `
  <div style="color:#000; border-radius:5px; padding:10px; font-size:14px; width:200px;">
    <audio controls>
      <source src="audios/ElevenLabs_2025-10-21T02_28_42_Rachel_pre_sp100_s50_sb75_se0_b_m2.mp3" type="audio/mpeg">
    </audio>
  </div>
`;

panorama.add(infospot5);

var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-800, 120, -600);
infospot6.addHoverText('Reproducción adicional del audio', -60);
infospot6.element.innerHTML = `
  <div style="color:#000; border-radius:5px; padding:10px; font-size:14px; width:200px;">
    <audio controls>
      <source src="audios/ElevenLabs_2025-10-21T02_28_42_Rachel_pre_sp100_s50_sb75_se0_b_m2.mp3" type="audio/mpeg">
    </audio>
  </div>
`;
panorama.add(infospot6);


// zona interactiva7
var infospot7 = new PANOLENS.Infospot(50, 'imagenes/info.png');
infospot7.position.set(-480, -134, 500);
infospot7.addHoverText('Entrar al PDF.', 100);
infospot7.element.innerHTML = `
  <div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
    Entrar al PDF. El proceso de creación de un sitio web, una aplicación o un software.
  </div>
`;

// Agregar un evento de clic para abrir el PDF
infospot7.addEventListener('click', function() {
  // Abrir el PDF en una nueva pestaña
  window.open('pdf/tour.pdf', '_blank');
});

panorama.add(infospot7);


// Agrega la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);