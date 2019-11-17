$(document).ready(function(){
    
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