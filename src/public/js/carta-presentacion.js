
$(document).ready(function()
{
	$("#presentacion-btn").click(function(){
    	$("#reglamento").hide();
    	$("#inicio").hide();
    	$("#carta-presentacion").show();
    	$("#carta-postulacion").hide();
    	$("#plan-trabajo").hide();
    	$("#generar").hide();
	});
});
function generar_lista_presentacion()
{
	var  presentacion_doc = generar_presentacion("Unexpo");
		var node = document.createElement("LI");
		var item = document.createElement("a");
	    var textnode = document.createTextNode("prueba");
	    item.setAttribute('onClick',presentacion_doc.save('carta.pdf'));
	    item.appendChild(textnode);
	    node.appendChild(item);
	    document.getElementById("preList").appendChild(node);
}
function descargar(documento)
{
	documento.save('carta.pdf');
}
