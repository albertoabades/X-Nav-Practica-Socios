var sociostl;
var sociosml;
var sociosud;
var ml = false;
var ud = false;
$(document).ready(function() {
  $(function() {
    $( "#tabs" ).tabs();
  });


  $("#actualizar").click(function(){
    if(ud == false){
      $.getJSON("update.json",function(datos){
        sociosud = datos;
      }).done(function(){
        var mensajes = $("#tabs-1").html();
        for(var i=0;i<sociosud.items.length;i++){
          var nombre = sociosud.items[i].socio;
          var imagen = "<img src="+ sociosud.items[i].imagen +" style='width: 30px; height: 30px;'>";
          var texto = sociosud.items[i].contenido;
          var hora = sociosud.items[i].hora;
          mensajes += "<div class='mensajes'><h3>" + imagen + " " + nombre + "</h3><p>" + texto + "</p><p class='hora'>" + hora + "</p></div>";
        }
        document.getElementById("tabs-1").innerHTML = mensajes;
      });
      ud = true;
    }
  });

  $.getJSON("timeline.json",function(datos){
    sociostl = datos;
  }).done(function(){
    var mensajes = $("#tabs-1").html();
    for(var i=0;i<sociostl.items.length;i++){
      var nombre = sociostl.items[i].socio;
      var imagen = "<img src="+ sociostl.items[i].imagen +" style='width: 30px; height: 30px;'>";
      var texto = sociostl.items[i].contenido;
      var hora = sociostl.items[i].hora;
      mensajes += "<div class='mensajes'><h3>" + imagen + " " + nombre + "</h3><p>" + texto + "</p><p class='hora'>" + hora + "</p></div>";
    }
    document.getElementById("tabs-1").innerHTML = mensajes;
  });

  $("#ml").click(function(){
    if(ml == false){
      $.getJSON("myline.json",function(datos){
        sociosml = datos;
      }).done(function(){
        var mensajes = $("#tabs-2").html();
        for(var i=0;i<sociosml.items.length;i++){
          var nombre = sociosml.items[i].socio;
          var imagen = "<img src="+ sociosml.items[i].imagen +" style='width: 30px; height: 30px;'>";
          var texto = sociosml.items[i].contenido;
          var hora = sociosml.items[i].hora;
          mensajes += "<div class='mensajes'><h3>" + imagen + " " + nombre + "</h3><p>" + texto + "</p><p class='hora'>" + hora + "</p></div>";
        }
        document.getElementById("tabs-2").innerHTML = mensajes;
      });
      ml = true;
    }
  });
});