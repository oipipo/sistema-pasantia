$(document).ready(function()
{
	$("#presentacion-btn").click(function(){
    	$("#reglamento").hide();
    	$("#inicio").hide();
    	$("#carta-presentacion").show();
    	$("#carta-postulacion").hide();
    	$("#constancia-inscripcion").hide();
    	$("#plan-trabajo").hide();
    	$("#generar").hide();
	});
});
function generar_lista_presentacion()
{
	
	if(pre=="FALSE")
	{
		var node = document.createElement("LI");
		var item = document.createElement("a");
	    var textnode = document.createTextNode("pre");
	    item.setAttribute('href',"http://google.com")
	    item.appendChild(textnode);
	    node.appendChild(item);
	    document.getElementById("preList").appendChild(node);
	    pre="TRUE";
	}
}
/*function Carta_Presentacion()
{
	var text
	 text=
	 "UNIVERSIDAD NACIONAL EXPERIMENTAL DE GUAYANA
	 VICERRECTORADO ACADÉMICO
	COORDINACIÓN GENERAL DE PREGRADO
	COORDINACIÓN DE PASANTIAS
	Puerto Ordaz, 03 de Abril de 2017
	Carta de Presentación
	Señores:
	UNEXPO
	Presente
	Sirva la presente para informarles que el estudiante VASQUEZ MOTA RICARDO JAVIER,
	cédula de identidad: V26073680, cursante de la carrera: INGENIERO EN INFORMÁTICA, con un
	Índice académico de 8.04, esta apto académicamente para realizar la Pasantía a nivel Profesional, con
	una duración mínima de dieciseis (16) semanas.
	ESTA COMUNICACIÓN NO POSTULA AL PORTADOR DE LA PRESENTE, la postulación
	oficial de la UNEG será entregada una vez que la empresa defina la fecha precisa de inicio de Pasantía
	Atentamente,
	__________________________________________
	Prof: LENYS CASTRO
	Responsable de Pasantías
	Sede PUERTO ORDAZ
	Para validar los datos incluidos en este documento debe consultar en la página www.uneg.edu.ve, la
	opción 'Validar Cartas de Pasantía' en el menú 'Información Universitaria', ingresando el código
	976A3275AD, el cual reemplaza el sello humedo";
	var doc = new jsPDF()
	doc.text(text, 10, 10)
	doc.save('Carta de presentacion.pdf');
}*/