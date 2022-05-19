

function actualizar(id) {
	switch (id){
		case 1809:
			document.getElementById('gifs').src="recursos/1809.mp4"
			document.getElementById('texto').innerHTML="Charles Darwin nació en 1809, en Inglaterra. Era un niño muy curioso y gastaba tiempo coleccionando cosas que encontraba. Cuando tuvo 16 años fue a la Universidad a estudiar medicina, pero pronto se desanimó porque no le gustaban las clases"
			document.getElementById('gifs').currentTime=0;
			document.getElementById('gifs').play()
			break;
		case 1831:
			document.getElementById('gifs').src="recursos/1831.mp4"
			document.getElementById('texto').innerHTML=" En 1831 lo invitan a hacer parte de una expedición por el mundo como ayudante de geología, (sin pago alguno) y se embarca en el Beagle en una ruta que lo llevó por África, América, Australia y Asia "
			document.getElementById('gifs').currentTime=0;
			document.getElementById('gifs').play()
			break;		
		case 1832:
			document.getElementById('gifs').src="recursos/1832.mp4"
			document.getElementById('texto').innerHTML="El Beagle recorrió muchos lugares que Darwin no conocía y quedó maravillado de las cosas que pudo aprender."
			document.getElementById('gifs').currentTime=0;
			document.getElementById('gifs').play()
			break;
		case 1835:
			document.getElementById('gifs').src="recursos/1835.mp4"
			document.getElementById('texto').innerHTML="Todo lo que veía lo escribía y enviaba sus escritos a Inglaterra, como parte de su diario de trabajo. En las Islas Galápagos pudo ver que una misma especie de pájaro tenía diferentes colores y picos, esto le causó curiosidad. Lo mismo sucedió con las tortugas, que aunque eran la misma especie, su caparazón era diferente en cada una de las islas."
			document.getElementById('gifs').currentTime=0;
			document.getElementById('gifs').play()
			break;
		case 1836:
			document.getElementById('gifs').src="recursos/1836.mp4"
			document.getElementById('texto').innerHTML="Como recogió muchas muestras de fósiles y de animales y plantas de su época, al volver a Inglaterra gastó muchísimos años  (de 1836 a 1858) analizando lo recolectado y comunicándose con cientificos de su época..."
			document.getElementById('gifs').currentTime=0;
			document.getElementById('gifs').play()
			break;
		case 1858:
			document.getElementById('gifs').src="recursos/1858.mp4"
			document.getElementById('texto').innerHTML="En 1858 recibió una carta de otro científico llamado Russel Wallace. Darwin quedó asombrado de que otra persona había llegado a casi las mismas conclusiones de manera independiente y lo invitó a que publicaran juntos sus conslusiones"
			document.getElementById('gifs').currentTime=0;
			document.getElementById('gifs').play()
			break;
		case 1859:
			document.getElementById('gifs').src="recursos/1859.mp4"
			document.getElementById('texto').innerHTML="En 1859 publicó su libro 'El Origen de las especies' que es su obra más importante, pero a la vez un resumen de todas sus investigaciones. Esta obra, por ser tan novedosa, les gustó a muchos, pero también disgustó a otros..."
			document.getElementById('gifs').currentTime=0;
			document.getElementById('gifs').play()
			break;
		case 1882:
			document.getElementById('gifs').src="recursos/1882.mp4"
			document.getElementById('texto').innerHTML="Durante mucho tiempo, recibió críticas y aprobaciones de su obra y profundizando en sus investigaciones.Finalmente murió en 1882, dejando a la humanidad un gran conocimiento que todavia mantiene vigencia"
			document.getElementById('gifs').currentTime=0;
			document.getElementById('gifs').play()
			break;

	}
	// body...
}
function avanzar(){
	document.getElementById('inicio').setAttribute("hidden","");
	document.getElementById('contenido').removeAttribute("hidden")
}
