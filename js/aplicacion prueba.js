jQuery(document).ready(function() {
    $('#botonprecio').on("click", function() {
        $(this).before("<p>$1,500.00</p>");
        $(this).after("<p><h2>Vuelo a Chapala</h2></p><p> $1,500.00</p>");
        
    });
    
    $('.botonprecios').on("click", function() {
        $(this).before("<p>$6,500.00</p>");
        $(this).after("<p><h2>Vuelo a Chapala</h2></p><p> $6,500.00</p>");
    });
    
    $('#muevete').on("click", function() {
        $(this).animate({"margin-top":"50px","margin-bottom":"50px"},900);
        $(this).animate({"margin-left":"5px"},20).animate({"margin-left":"0px"},20);
    });

});