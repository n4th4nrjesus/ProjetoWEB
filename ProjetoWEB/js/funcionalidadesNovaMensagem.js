$(document).ready(function(){

    $("#btnEnviar").click(function(){
        
        var destinatario = $("#txtDestinatario").val();
        var cc = $("#txtCopia").val();
        var assunto = $("#txtAssunto").val();
        var texto = $("#txtTexto").val();

        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/emailEnviados.php",
            data: {
                ajax_destinatario: destinatario,
                ajax_cc: cc,
                ajax_assunto: assunto,
                ajax_text: texto,
            },
            success: function(retorno){
                alert(retorno)
            }
        })
    
    });


});