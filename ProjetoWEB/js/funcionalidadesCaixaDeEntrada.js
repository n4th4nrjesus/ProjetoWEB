$(document).ready(function () {

    $("#txtPesquisa").focus();

    
    $.ajax({
        type: "POST",
        dataType: "html",
        url: "../php/emailsCaixaDeEntrada.php",
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
            url: "../php/emailsCaixaDeEntrada.php",
            data: {
                pesquisa: $("#txtPesquisa").val()
            },
            success: function (retorno) {
                $("#divEmails").html(retorno);
            }
        });
    });

    $.ajax({
        type: "POST",
        dataType: "html",
        url: "../php/emailsCaixaDeEntrada.php",
        success: function(){
            $(".tblEmail, tr").on('click', '#btnLixeira', function(){
                $(this).closest('tr').remove();
            })
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

    $("#trItensExcluidos").click(function(){
        window.location.href = "itensExcluidos.html";
    });

});