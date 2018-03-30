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
