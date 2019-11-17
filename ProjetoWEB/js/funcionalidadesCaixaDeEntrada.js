$(document).ready(function(){

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "../php/emailsCaixaDeEntrada.php",
        success: function(retorno){
            $("#divEmails").html(retorno);
        }
    });

    $("#btnNovaMensagem").click(function(){
        window.location.href = "novaMensagem.html";
    });

    $("#tdCaixaEnt, #tdCaixaEnt img, #tdCaixaEnt label").click(function(){
        window.location.href = "caixaDeEntrada.html";
    });

    $("#tdDeslogar, #tdDeslogar img, #tdDeslogar label").click(function(){
        window.location.href = "../index.html";
    });

});