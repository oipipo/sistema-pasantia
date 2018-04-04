$(document).ready(function()
{
	$("#generar-btn").click(function(){
    	$("#reglamento").hide();
    	$("#inicio").hide();
    	$("#carta-presentacion").hide();
    	$("#carta-postulacion").hide();
    	$("#plan-trabajo").hide();
    	$("#generar").show();
	});
});
function guardar()
{
	const tipo = $("#tipo").val();
	const institucion = $("#empresa").val();
	const area = $("#area").val();
	const titulo = $("#titulo").val();
	const academico = $("#academico ").val();
	const fechaInicio = $("#init").val();
	const fechaFin = $("#fin").val();
	const duracion = $("#duracion").val();
	const data = {};

	data.tipo = tipo;
	data.institucion = institucion;
	data.area = area;
	data.titulo = titulo;
	data.cedula = datos.cedula;
	data.academico = academico;
	data.fechaInicio = fechaInicio;
	data.fechaFin = fechaFin;
	data.tipo = tipo;
	data.duracion = duracion;
	$.ajax(
	{
		url: "api/pasantia",
		data: data,
		method: "POST",
		type: "POST",
		success: function(data) {
			JSON.stringify(data)
			alert("Datos guardados");
			document.getElementById("generarform").reset();
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		  //TODO ERROR NOTIFY
		}
	});
}
function generar_presentacion(empresa)
{
	var texto="\t\tUNIVERSIDAD NACIONAL EXPERIMENTAL DE GUAYANA \r"+
	 	   	 "\t\t\t\t\tVICERRECTORADO ACADÉMICO \r"+
	 	   	 "\t\t\t\tCOORDINACIÓN GENERAL DE PREGRADO \r"+ 
	 	   	 "\t\t\t\t\tCOORDINACIÓN DE PASANTIAS \r\r\r"+ 
	 	   	 "Puerto Ordaz,"+f.getDate()+" de "+meses[f.getMonth()]+" de "+f.getFullYear()+" \r"+ 
	 	   	 "Carta de Presentación \r"+
			 "Señores: \r"+
			 empresa+"\r"+
			 "Presente\r"+
			 "Sirva la presente para informarles que el estudiante "+datos.apellido+"\r"+
			 +datos.nombre+" cédula de identidad: "+datos.cedula+", cursante de la carrera:\r"+
			 datos.carrera+", con un Índice académico de "+datos.indice+", esta apto\r"+
			 "académicamente para realizar la Pasantía a nivel Profesional, con una\r"+
			 "duración mínima de dieciseis (16) semanas.\r"+
			 "ESTA COMUNICACIÓN NO POSTULA AL PORTADOR DE LA PRESENTE\r"+
			 "la postulación oficial de la UNEG será entregada una vez que\r"+ 
			 "la empresa defina la fecha precisa de inicio de Pasantía.\r\r\r"+
			 "Atentamente,\r\r"+
			 "_________________\r"+
			 "Prof: Lennys Castro\r"+
			 "Responsable de Pasantías\r"+
			 "Sede Puerto Ordaz\r";
	var doc = new jsPDF();
	doc.text(texto, 10, 10);
	doc.addImage(logo, 5, 5);
	return doc;
}
function generar_postulacion(dateI, dateF, empresa, apellido, nombre, cedula, carrera, indice)
{
	if(dateI===undefined)
		var dateInicio="01-04-2018"
	else
		var dateInicio=dateI.substr(10).split('-');
	if(dateF===undefined)
		var dateInicio="01-08-2018"
	else
		var dateInicio=dateI.substr(10).split('-');

	var dayI=dateInicio[2];
	var monthI=dateInicio[1];
	var yearI=dateInicio[0];
	var dateFin=dateF.substr(10).split('-');
	var dayF=dateFin[2];
	var monthF=dateFin[1];
	var yearF=dateFin[0];
	var text2="\t\t\t\t\t\t\t\tPuerto Ordaz,"+f.getDate()+" de "+meses[f.getMonth()]+" de "+f.getFullYear()+" \r"+ 
	 	   	 "\t\t\t\t\tCarta de Postulación \r\r\r\r"+
			 empresa+"\r"+
			 "CIUDAD GUAYANA\r"+
			 "Por medio de la presente se postula oficialmente, al estudiante\r"+
			 apellido+" "+nombre +" cédula de identidad: "+cedula+"\r"+
			 "cursante de la carrera de "+"INGENIERO EN INFORMÁTICA con un indice\r"
			 +"académico de -.-- para realizar la actividad de pasantías en esa importante\r"+
			 "empresa durante el periodo comprendido entre el "+dayI+" de "+meses[parseInt(monthI)]+" de "+yearI+" al \r"
			 +dayF+" de "+monthF+" de "+yearF+
			 "\rLa pasantía consiste en un conjunto de actividades de estudio y de trabajo\r"+
			 "cuyo propósito es contribuir con la formación de un profesional integral y \r"+
			 "participativo en el desarrollo socioeconómico de la Región Guayana y del país.\r"+
			 "La pasantía deberá ser ejecutada a tiempo completo en el horario\r"+
			 "fijado por la empresa o institución.\r"+
			 "El desempeño del estudiante durante este período deberá estar enfocado en\r"+
			 "su área profesional con una exigencia que conduzca al estudiante al mayor\r"+
			 "desempeño técnico posible. Los resultados serán evaluados con el criterio de\r";
	var text3="un trabajo terminal para optar al título en la especialidad antes mencionada,\r"+
			 "por lo que es de vital importancia el cumplimiento del plan de trabajo planteado.\r"+
			 "Durante su estadía en la empresa el estudiante será visitado al menos una\r"+
			 "vez por el tutor académico o el Coordinador de Pasantías.\r"+
			 "Al suscribirnos agradecemos la oportunidad prestada por esa empresa para el\r"+
			 "desarrollo de nuestro Programa de Pasantías, lo que estrecha aún más las\r"+
			 "relaciones entre la UNEG y el sector productivo obteniendo beneficios mutuos.\r"+
			 "\t\t\t\t\t\tAtentamente,\r\r\r\r"+
			 "_________________                               __________________________\r"+
			 "Prof: Lennys Castro                                 Director de FUNDEI Guayana\r";
	var doc = new jsPDF();
	doc.text(text2+text3, 10, 10);

	logo.onload = function()
	{
		doc.addImage(logo, 5, 5);
	};
	return doc;
}
function descargar(tipo)
{
	if(tipo=='pre')
	{
		var  presentacion_doc = generar_presentacion(pasantia.institucion);
		presentacion_doc.save('carta de presentacion.pdf')
	}else
	{
		var  postulacion_doc = generar_postulacion(pasantia.fechaInicio,pasantia.fechaFin,pasantia.institucion, datos.apellido, datos.nombre, datos.cedula,datos.carrera,datos.indice);
		postulacion_doc.save('carta de postulacion.pdf')
	}
}
//Para mostrar de forma embebida 
/*
	var pre = document.createElement("EMBED");
    pre.setAttribute("src", "/documents/Carta_de_presentacion.pdf");
    pre.setAttribute("width", "100%");
    pre.setAttribute("height", "100%");
    pre.setAttribute("id", "pre");
	setTimeout(function(){
		document.getElementById("presentacion").appendChild(pre);
	}, 5000);

	var pos = document.createElement("EMBED");
    pos.setAttribute("src", "/documents/Carta_de_postulacion.pdf");
    pos.setAttribute("width", "100%");
    pos.setAttribute("height", "100%");
    pos.setAttribute("id", "pre");
	setTimeout(function(){
		document.getElementById("postulacion").appendChild(pos);
	}, 5000);
*/
