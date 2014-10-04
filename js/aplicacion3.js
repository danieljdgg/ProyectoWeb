jQuery(document).ready(function() {
    alert("jQuery si funciona");
    $('li').text("modificado");
    $('#lista2 li').text("yo soy lista 2");
    $('#lista2').find('li').text("yo soy lista 2");
    $('#lista2').find('li').append("<li>mames</li>");
    $('ul').on("click", 'li', function() {
      alert("Hola!!");
    });
    $('ul').on("click", 'li', function() {
      alert("adios");
    });

});