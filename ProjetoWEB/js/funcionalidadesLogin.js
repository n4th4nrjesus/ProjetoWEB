var json = [{origem:"kelly.bettio@pucpr.edu", destinatario:"alunos.bes@pucpr.edu"}, {origem:"eduardo.lino@pucpr.edu"}]

$(document).ready(function(){

    $("#btnConf").click(function() {

        $.ajax({
            type: "POST",
            url: "../php/verificarEmail.php",
            dataType: "json",
            data: {
                email: $("#txtEmail").val(),
                senha: $("#txtSenha").val()
            },
            success: function (retorno) {
                alert(retorno.mensagem);
            }
        });

    });

});
