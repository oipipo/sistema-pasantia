
$(document).ready(function()
{
	$("#presentacion-btn").click(function()
	{
    	$("#reglamento").hide();
    	$("#inicio").hide();
    	$("#carta-presentacion").show();
    	$("#carta-postulacion").hide();
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

function generar_lista_presentacion()
{
	if(pre=="FALSE")
	{
		var node = document.createElement("button");
	    var textnode = document.createTextNode("Descargar");
	    node.type="button";
	    node.setAttribute('onClick',"descargar('pre')");
	    node.appendChild(textnode);
	    document.getElementById("car-pre").appendChild(node);
	    pre="TRUE";
	}

}

