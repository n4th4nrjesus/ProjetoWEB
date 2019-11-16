$(document).ready(function(){

    $("#btnEnviar").click(function(){

        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/emailEnviados.php",
            data: {
                destinatario: $("#txtDestinatario").val(),
                cc: $("#txtCopia").val(),
                assunto: $("#txtAssunto").val(),
                text: $("#txtTexto").val(),
            },
            success: function(retorno){
                alert(retorno)
            }
        })
    
    });


});