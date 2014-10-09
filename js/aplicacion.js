jQuery(document).ready(function() {


    window.onscroll = function() {
        var altoPantalla = $(window).height();
        if (window.pageYOffset >= altoPantalla){
            $('.fondo-negro').css({position: 'fixed'});
            var altoBarra = $(".fondo-negro").height();
            $('.bloque-aboutus').css({"margin-top": altoBarra});
        } else if (window.pageYOffset <= altoPantalla) {
            $('.fondo-negro').css({position: 'relative'});
            $('.bloque-aboutus').css({"margin-top": '0px'});
        }
    }


});