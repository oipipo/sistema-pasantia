$(document).ready(function()
{
	$("#postulacion-btn").click(function(){
    	$("#reglamento").hide();
    	$("#inicio").hide();
    	$("#carta-presentacion").hide();
    	$("#carta-postulacion").show();
    	$("#plan-trabajo").hide();
    	$("#generar").hide();
	});
});
function generar_lista_postulacion()
{
	
	if(pos=="FALSE")
	{
		var node = document.createElement("LI");
	    var textnode = document.createTextNode("pos");
	    node.appendChild(textnode);
	    document.getElementById("posList").appendChild(node);
	    pos="TRUE";
	}
}