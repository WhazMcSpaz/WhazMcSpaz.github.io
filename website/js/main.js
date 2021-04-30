var accessibleoptionsopen = false;

$(document).ready(function(){
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem("fontscale") === null){
			localStorage.setItem("fontscale", "100");
			localStorage.setItem("theme", "dark");
			localStorage.setItem("enablecss", "true");
		}
	}
	
	loadStyles();
	
	$("#accessibleoptionslink").click(function(){
		if (accessibleoptionsopen === true){
			accessibleoptionsopen = false;
			$("#accessibleoptions").addClass("hidden");
		}
		else{
			accessibleoptionsopen = true;
			$("#accessibleoptions").removeClass("hidden");
		}
		
	});
	
	$("#font100button").click(function(){
		localStorage.setItem("fontscale", "100");
		$("#fontsize").attr("href", "css/100font.css");
	});
	
	$("#font150button").click(function(){
		localStorage.setItem("fontscale", "150");
		$("#fontsize").attr("href", "css/150font.css");
	});
	
	$("#font200button").click(function(){
		localStorage.setItem("fontscale", "200");
		$("#fontsize").attr("href", "css/200font.css");
	});
	
	$("#darkthemebutton").click(function(){
		localStorage.setItem("theme", "dark");
		$("#theme").attr("href", "css/darktheme.css");
	});
	
	$("#lightthemebutton").click(function(){
		localStorage.setItem("theme", "light");
		$("#theme").attr("href", "css/lighttheme.css");
	});
	
	$("#blackandwhitebutton").click(function(){
		localStorage.setItem("theme", "blackandwhite");
		$("#theme").attr("href", "css/blackwhitetheme.css");
	});
	
	$("#enablecssbutton").click(function(){
		localStorage.setItem("enablecss", "true");
		loadStyles();
	});
	
	$("#disablecssbutton").click(function(){
		localStorage.setItem("enablecss", "false");
		loadStyles();
	});
	
	$(".duplicatingbutton").click(duplicatebutton);
	
	$("#greentextbutton").click(function(){
		$(".duplicatingbutton").addClass("greentext");
	});
})
function duplicatebutton(){
		var button = '<button class="duplicatingbutton" onClick="duplicatebutton()">Press me too!</button>';
		$("#duplicatingbuttons").append(button);
}

function loadStyles(){
	if (localStorage.getItem("enablecss") === "true"){
		if ( localStorage.getItem("fontscale") === "100") {
			$("#fontsize").attr("href", "css/100font.css");
		}
		else if (localStorage.getItem("fontscale") === "150") {
			$("#fontsize").attr("href", "css/150font.css");
		}
		else if (localStorage.getItem("fontscale") === "200") {
			$("#fontsize").attr("href", "css/200font.css");
		}
	
		if (localStorage.getItem("theme") === "dark"){
			$("#theme").attr("href", "css/darktheme.css");
		}
		else if (localStorage.getItem("theme") === "light"){
			$("#theme").attr("href", "css/lighttheme.css");
			
		}
		else if (localStorage.getItem("theme") === "blackandwhite"){
			$("#theme").attr("href", "css/blackwhitetheme.css");
		}
		
		$("#baseheet").attr("href", "css/normalize.css");
		$("#mainsheet").attr("href", "css/main.css");
		
	}
	else {
		$("#baseheet").attr("href", "");
		$("#mainsheet").attr("href", "");
		$("#fontsize").attr("href", "");
		$("#theme").attr("href", "");
		
	}
}