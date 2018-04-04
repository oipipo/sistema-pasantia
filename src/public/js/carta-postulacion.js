$(document).ready(function()
{
	$("#postulacion-btn").click(function(){
    	$("#reglamento").hide();
    	$("#inicio").hide();
    	$("#carta-presentacion").hide();
    	$("#carta-postulacion").show();
    	$("#plan-trabajo").hide();
    	$("#generar").hide();  	
	  $.ajax(
		{
			url: "api/pasantia/"+datos.cedula,
			method: "GET",
			success: function(data) 
			{
			    pasantia.cedula=datos.cedula;
			    pasantia.tipo=data.tipo;
			    pasantia.institucion=data.institucion;
			    pasantia.area = data.area;
			    pasantia.titulo = data.titulo;
				pasantia.academico = data.academico;
				pasantia.fechaInicio = data.fechaInicio;
				pasantia.fechaFin = data.fechaFin;
				pasantia.duracion = data.duracion
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
			 console.log("Error", XMLHttpRequest, textStatus, errorThrown);
			}
		});
	});
});
function generar_lista_postulacion()
{
	if(pos=="FALSE")
	{
		var node2 = document.createElement("button");
	    var textnode2 = document.createTextNode("Descargar");
	    node2.type="button";
	    node2.setAttribute('onClick',"descargar('pos')");
	    node2.appendChild(textnode2);
	    document.getElementById("car-pos").appendChild(node2);
	    pos="TRUE";
	}
}