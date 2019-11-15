$(document).ready(function(){

    $("#btnConf").click(function() {

        $.ajax({
            type: "POST",
            url: "php/verificarEmail.php",
            dataType: "json",
            data: {
                email: $("#txtEmail").val(),
                senha: $("#txtSenha").val()
            },
            success: function (retorno) {
                alert(retorno.mensagem);
                if(retorno.status == "s") {
                    window.location.href = "./html/caixaDeEntrada.html";
                }
            }
        });

    });

});
