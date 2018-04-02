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
	const institucion = $("#institucion").val();
	const area = $("#area").val();
	const titulo = $("#titulo").val();
	const academico = $("#academico ").val();
	const fechaInicio = $("#fechaInicio").val();
	const fechaFin = $("#fechaFin").val();
	const duracion = $("#duracion").val();
	const data = {};

	data.tipo = tipo;
	data.institucion = institucion;
	data.area = area;
	data.titulo = titulo;
	data.cedula = cedula;
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
		  alert(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		  //TODO ERROR NOTIFY
		}
	});
}
function generar() 
{
	var logo =new Image;
	logo.src="/images/uneg carta.png"
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var f=new Date();

	var date=$('#init').val().split('-');
	var day=date[2];
	var month=date[1];
	var year=date[0];
	var date1=$('#fin').val().split('-');
	var day1=date1[2];
	var month1=date1[1];
	var year1=date1[0];
	
	var text0="\t\tUNIVERSIDAD NACIONAL EXPERIMENTAL DE GUAYANA \r"+
	 	   	 "\t\t\t\t\tVICERRECTORADO ACADÉMICO \r"+
	 	   	 "\t\t\t\tCOORDINACIÓN GENERAL DE PREGRADO \r"+ 
	 	   	 "\t\t\t\t\tCOORDINACIÓN DE PASANTIAS \r\r\r"+ 
	 	   	 "Puerto Ordaz,"+f.getDate()+" de "+meses[f.getMonth()]+" de "+f.getFullYear()+" \r"+ 
	 	   	 "Carta de Presentación \r"+
			 "Señores: \r"+
			 ""+document.getElementById("empresa").value+
			 "Presente\r"+
			 "Sirva la presente para informarles que el estudiante "+"Apellido \r"+
			 "Nombre cédula de identidad: "+"--------"+", cursante de la carrera:\r"+
			 "INGENIERO EN INFORMÁTICA"+", con un Índice académico de "+"-.--"+", esta apto\r"+
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
	var text2="\t\t\t\t\t\t\t\tPuerto Ordaz,"+f.getDate()+" de "+meses[f.getMonth()]+" de "+f.getFullYear()+" \r"+ 
	 	   	 "\t\t\t\t\tCarta de Postulación \r\r\r\r"+
			 ""+document.getElementById("empresa").value+
			 "\rCIUDAD GUAYANA\r"+
			 "Por medio de la presente se postula oficialmente, al estudiante\r"+
			 "____________________ cédula de identidad: ____________ \r"+
			 "cursante de la carrera de "+"INGENIERO EN INFORMÁTICA con un indice\r"
			 +"académico de -.-- para realizar la actividad de pasantías en esa importante\r"+
			 "empresa durante el periodo comprendido entre el "+day+" de "+meses[parseInt(month)]+" de "+year+" al \r"
			 +day1+" de "+month1+" de "+year1+
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

	var doc0 = new jsPDF();
	doc0.text(text0, 10, 10);
	var doc = new jsPDF();
	doc.text(text2+text3, 10, 10);

	logo.onload = function()
	{
		doc0.addImage(logo, 5, 5);
		doc.addImage(logo, 5, 5);
	};
	
	
	

	/*setTimeout(function(){
		
		doc0.save('Carta_de_presentacion.pdf');
	}, 2000);
	setTimeout(function(){
		
		doc.save('Carta_de_postulacion.pdf');
	}, 2000);
	*/

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




}
