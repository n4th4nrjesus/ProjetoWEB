$(document).ready(function () {

    $("#txtPesquisa").focus();

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "../php/emailsEnviados.php",
        data: {
            pesquisa: $("#txtPesquisa").val()
        },
        success: function (retorno) {
            $("#divEmails").html(retorno);
        }
    });

    $("#txtPesquisa").keyup(function () {
        $.ajax({
            type: "POST",
            dataType: "html",
            url: "../php/emailsEnviados.php",
            data: {
                pesquisa: $("#txtPesquisa").val()
            },
            success: function (retorno) {
                $("#divEmails").html(retorno);
            }
        });
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

    $("#trItensExcluidos").click(function() {
        window.location.href = "itensExcluidos.html";
    });

});