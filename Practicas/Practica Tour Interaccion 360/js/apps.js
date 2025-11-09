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
        <iframe width="720" height="480" src="https://www.youtube.com/embed/e-lQYKYbOtI"></iframe>        
    </div>
`;

/*infospot3.element.innerHTML = '<div style="background-color: rgba(28, 134, 12, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.</div>';*/
panorama.add(infospot3);



// Crea y agrega el cuarto infospot
var infospot4 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
// Crea y agrega el cuarto infospot con un ícono personalizado
var infospot4 = new PANOLENS.Infospot(200, 'imagenes/info.png');
infospot4.position.set(-4500, -650, -3500);
//evento hover
infospot4.addHoverText('Una máquina que obedece órdenes para efectuar cálculos y operaciones lógicas en poco tiempo. Es un dispositivo que puede recibir, almacenar, procesar información y generar resultados o respuestas.', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(69, 148, 208, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Una máquina que obedece órdenes para efectuar cálculos y operaciones lógicas en poco tiempo. Es un dispositivo que puede recibir, almacenar, procesar información y generar resultados o respuestas.</div>';
panorama.add(infospot4);


// Crea y agrega el quinto infospot
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot5.position.set(265, 30, 800);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot5.addHoverText('Un video beam o proyector es un dispositivo electrónico que recibe una señal de video desde una fuente externa (como un computador, un reproductor de DVD, un celular o una consola de videojuegos) y la convierte en luz para proyectarla en una pantalla o superficie plana.', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(127, 17, 224, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> Un video eam o proyector es un dispositivo electrónico que recibe una señal de video desde una fuente externa (como un computador, un reproductor de DVD, un celular o una consola de videojuegos) y la convierte en luz para proyectarla en una pantalla o superficie plana. </div>';
panorama.add(infospot5);


// Crea y agrega el sexto infospot
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot6.position.set(265, 50, 940);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot6.addHoverText('Un audio MP3 multimedial...', -60);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio1.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot6);




// Agrega la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);