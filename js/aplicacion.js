jQuery(document).ready(function() {

    
    var altoPantalla = $(window).height();
    var altoBarra = $(".fondo-negro").height();

    window.onscroll = function() {
        if (window.pageYOffset >= altoPantalla){
            $('.fondo-negro').css({position: 'fixed'});
            $('.bloque-aboutus').css({"margin-top": altoBarra});
        } else if (window.pageYOffset <= altoPantalla) {
            $('.fondo-negro').css({position: 'relative'});
            $('.bloque-aboutus').css({"margin-top": '0px'});
        }
    }


});