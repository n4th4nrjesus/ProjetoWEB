$(document).ready(function(){
    
    $.ajax({
        type: "POST",
        dataType: "html",
        url: "../php/emailsExcluidos.php",
        success: function (retorno) {
            $("#divEmails").html(retorno);
        }
    });

    $("#btnNovaMensagem").click(function () {
        window.location.href = "novaMensagem.html";
    });

    $("#trCaixaEnt").click(function () {
        window.location.href = "caixaDeEntrada.html";
    });

    $("#trEnvios").click(function () {
        window.location.href = "itensEnviados.html";
    });

    $("#trDeslogar").click(function () {
        window.location.href = "../index.html";
    });
    
});