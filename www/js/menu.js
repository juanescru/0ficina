$(document).ready(function() {
    //Inscripciones
    //
    $('#btnContinuar').click(function() {
        //Capturo el valor de los campos a través de su id
        var lenguaje = $('#lenguaje').val();
        var numPatrocinador = $('#lblNumeroPatrocinador').text();
        var nombrePatrocinador = $('#lblNombrePatrocinador').text();
        //Se crea una variable para almacenar cadena para el array
        var cadena = "";
        //Se guarda toda la cadena
        //Se agrega "," para utilizarlo de escape al convertirlo en array
        cadena += lenguaje + "\",";
        cadena += "\"" + numPatrocinador + "\",";
        cadena += "\"" + nombrePatrocinador;
        //Se almacena localmente el valor del array en una variable local
        localStorage.setItem('susc1Local' , cadena);
    });

    $('#btnSiguiente2').click(function() {
        //Capturo el valor de los campos a través de su id
        var rfc = $('#txtRFC').val();
        var curp = $('#txtCURP').val();
        var nombre = $('#txtNombre').val();
        var apePat = $('#txtApePat').val();
        var apeMat = $('#txtApeMat').val();
        var dia = $('#dia').val();
        var mes = $('#mes').val();
        var ano = $('#ano').val();
        var lugarNacimiento = $('#txtLugarNacimiento').val();
        var sexo = $('#sexo').val();
        var telefono = $('#txtTelefono').val();
        var email = $('#txtEmail').val();
        var kit = $('#kit').val();
        var codigoAutorizacion = $('#txtCodigo').val();
        var metodoEnvio = $('#metodoEnvio').val();
        var centroAutorizado = $('#centroAutorizado').val();
        var paqueteria = $('#paqueteria').val();
        var metodoPago = $('#metodoPago').val();
        //Se crea una variable para almacenar cadena para el array
        var cadena = "";
        //Se guarda toda la cadena
        //Se agrega "," para utilizarlo de escape al convertirlo en array
        cadena += rfc + "\",";
        cadena += "\"" + curp + "\",";
        cadena += "\"" + nombre + "\",";
        cadena += "\"" + apePat + "\",";
        cadena += "\"" + apeMat + "\",";
        cadena += "\"" + dia + "\",";
        cadena += "\"" + mes + "\",";
        cadena += "\"" + ano + "\",";
        cadena += "\"" + lugarNacimiento + "\",";
        cadena += "\"" + sexo + "\",";
        cadena += "\"" + telefono + "\",";
        cadena += "\"" + email + "\",";
        cadena += "\"" + kit + "\",";
        if(kit == 'PAQ1000MX' || kit == 'PAQ1001MX' || kit == 'PAQ1002MX' || kit == 'PAQ1003MX' || kit == 'PAQ1004MX'){
            cadena += "\"" + codigoAutorizacion + "\",";
        }    
        cadena += "\"" + metodoEnvio + "\",";
        if(metodoEnvio == 1){
            cadena += "\"" + centroAutorizado + "\",";
        }else if(metodoEnvio == 2){ 
            cadena += "\"" + paqueteria + "\",";
        }       
        cadena += "\"" + metodoPago;
        //Se almacena localmente el valor del array en una variable local
        localStorage.setItem('susc2Local' ,cadena);
    });

    $('#btnSiguiente3').click(function() {
        var flag = 0;
        //Capturo el valor de los campos a través de su id
        var pais = $('#pais').val();
        var calle = $('#txtCalle').val();
        var num = $('#txtNum').val();
        var numInt = $('#txtNumInt').val();
        var colonia = $('#txtColonia').val();
        var ciudad = $('#txtCiudad').val();
        var estado = $('#estado').val();
        var cp = $('#txtCP').val();
        var cbMismaDir = document.getElementById('cbMismaDir');     
        //Se crea una variable para almacenar cadena para el array
        var cadena = "";
        //Se guarda toda la cadena
        //Se agrega "," para utilizarlo de escape al convertirlo en array
        cadena += pais + "\",";
        cadena += "\"" + calle + "\",";
        cadena += "\"" + num + "\",";
        cadena += "\"" + numInt + "\",";
        cadena += "\"" + colonia + "\",";
        cadena += "\"" + ciudad + "\",";
        cadena += "\"" + estado + "\",";
        cadena += "\"" + cp + "\",";
        if(cbMismaDir.checked){
            flag = 1;
        }else{
            flag = 0;
        }
        cadena += "\"" + flag;
        //Se almacena localmente el valor del array en una variable local
        localStorage.setItem('susc3Local' ,cadena);
    });

    $('#btnSiguiente4').click(function() {
        //Capturo el valor de los campos a través de su id
        var alias = $('#txtAlias').val();
        var password = $('#txtPassword').val();  
        //Se crea una variable para almacenar cadena para el array
        var cadena = "";
        //Se guarda toda la cadena
        //Se agrega "," para utilizarlo de escape al convertirlo en array
        cadena += alias + "\",";
        cadena += "\"" + password;
        //Se almacena localmente el valor del array en una variable local
        localStorage.setItem('susc4Local' ,cadena);
    });

    //Carga los datos locales de los campos de cada formulario hasta que termine la inscripción
    if(menu.checkRelativeRoot() == "suscriptores.html"){
        if(localStorage.getItem('susc1Local')){
            //Extraemos los datos almacenados y los convertimos en Array
            var extraer = localStorage.getItem('susc1Local');
            var ResArray = extraer.split('","');

            $('#lenguaje').val(ResArray[0]);
            $('#lblNumeroPatrocinador').val(ResArray[1]);
            $('#lblNombrePatrocinador').val(ResArray[2]);
        }
    }

    if(menu.checkRelativeRoot() == "suscriptores2.html"){
        if(localStorage.getItem('susc2Local')){
            //Extraemos los datos almacenados y los convertimos en Array
            var extraer = localStorage.getItem('susc2Local');
            var ResArray = extraer.split('","');

            $('#txtRFC').val(ResArray[0]);
            $('#txtCURP').val(ResArray[1]);
            $('#txtNombre').val(ResArray[2]);
            $('#txtApePat').val(ResArray[3]);
            $('#txtApeMat').val(ResArray[4]);

            $('#dia').val(ResArray[5]);
            $('#mes').val(ResArray[6]);
            $('#ano').val(ResArray[7]);
            $('#txtLugarNacimiento').val(ResArray[8]);

            $('#sexo').val(ResArray[9]);
            $('#txtTelefono').val(ResArray[10]);
            $('#txtEmail').val(ResArray[11]);
        }
    }

    if(menu.checkRelativeRoot() == "suscriptores3.html"){
        if(localStorage.getItem('susc3Local')){
            //Extraemos los datos almacenados y los convertimos en Array
            var extraer = localStorage.getItem('susc3Local');
            var ResArray = extraer.split('","');

            $('#pais').val(ResArray[0]);
            $('#txtCalle').val(ResArray[1]);
            $('#txtNum').val(ResArray[2]);
            $('#txtNumInt').val(ResArray[3]);
            $('#txtColonia').val(ResArray[4]);
            $('#txtCiudad').val(ResArray[5]);
            $('#txtCP').val(ResArray[7]);

            if(ResArray[8] == 1){
                document.getElementById("cbMismaDir").checked = true;
            }
        }
    }

    if(menu.checkRelativeRoot() == "suscriptores4.html"){
        if(localStorage.getItem('susc4Local')){
            //Extraemos los datos almacenados y los convertimos en Array
            var extraer = localStorage.getItem('susc4Local');
            var ResArray = extraer.split('","');

            $('#txtAlias').val(ResArray[0]);
            $('#txtPassword').val(ResArray[1]);
        }
    }

    if(menu.checkRelativeRoot() == "suscriptores5.html"){
        if(localStorage.getItem("susc1Local") && localStorage.getItem('susc2Local') && localStorage.getItem('susc3Local')){
            //Extraemos los datos almacenados y los convertimos en Array
            var extraer1 = localStorage.getItem("susc2Local");
            var ResArray1 = extraer1.split('","');


            var extraer2 = localStorage.getItem('susc3Local');
            var ResArray2 = extraer2.split('","');

            var extraer3 = localStorage.getItem('susc1Local');
            var ResArray3 = extraer3.split('","');

            $('#lblNombre').text(ResArray1[2]+ ", " +ResArray1[3]+ " " +ResArray1[4]);
            $('#lblTelefono').text(ResArray1[10]);
            $('#lblEmail').text(ResArray1[11]);

            $('#lblCalle').text(ResArray2[1]+ " " +ResArray2[2]+ "-" +ResArray2[3]);
            $('#lblColonia').text(ResArray2[4]);
            $('#lblCiudad').text(ResArray2[5]);
            $('#lblCP').text(ResArray2[7]);

            $('#lblPatrocinador').text(ResArray3[1]+ ", " +ResArray3[2]);
            $('#lblColocacion').text(ResArray3[1]+ ", " +ResArray3[2]);
        }
    }

    //
    //Termina Inscripciones

    //Inicia validación inscripciones
    //
    $('#kit').change(function() {
        /* Act on the event */
        var opcion = $(this).val();
        if(opcion == 'PAQ1000MX' || opcion == 'PAQ1001MX' || opcion == 'PAQ1002MX' || opcion == 'PAQ1003MX' || opcion == 'PAQ1004MX'){
            $('#codigoAutorizacion').show(200);
        }else{
            $('#codigoAutorizacion').hide(200);
        }
    });
    

    $('#metodoEnvio').change(function() {
        /* Act on the event */
        var opcion = $(this).val();
        if(opcion == 1){
            $('#paqueteriaTr').hide(200);
            $('#centroAutorizadoTr').show(200);
        }else if(opcion == 2){
            $('#centroAutorizadoTr').hide(200);
            $('#paqueteriaTr').show(200);
        }else{
            $('#centroAutorizadoTr').hide(200);
            $('#paqueteriaTr').hide(200);
        }
    });

    //
    //Termina validación inscripciones

    //Menú
    //
    var contador = 1;
    $('.menu_bar').click(function(){
        if (contador == 1) {
            $(this).css('position', 'fixed');
            $('#mascara').fadeIn(300);  
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            $(this).css('position', 'absolute');
            contador = 1;
            $('#mascara').fadeOut(300);  
            $('nav').animate({
                left: '-100%'
            });
        }
    });
    //
    //Termina menú

    //Limpia elementos &nbsp del código html
    //$('#clear').html($('#clear').html().replace(/&nbsp;/gi,''));

    //Contador animado para números
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});

//Redireccionar
function Href(url) {
    location.href=url;
}
function Debug(element) {
    console.log(element);
}