$(document).ready(function () {

    $("#txtDestin").focus();


    $("#btnEnviar").click(function () {
        var erro = false;
        if (($("#txtDestin").val() == "") || ($("#txtAssunto").val() == "") || ($("#txtTexto").val() == "")) {
            erro = true;
        }
        
        if (!erro) {
            $.ajax({
                type: "POST",
                url: "../php/enviarEmail.php",
                dataType: "json",
                data: {
                    destino: $("#txtDestin").val(),
                    copia: $("#txtCopia").val(),
                    assunto: $("#txtAssunto").val(),
                    texto: $("#txtTexto").val()
                },
                success: function (retorno) {
                    alert(retorno.mensagem);
                    if (retorno.status == "s") {
                        window.location.href = "caixaDeEntrada.html";
                    }
                }
            })
        } else {
            alert("Todos os campos obrigatórios devem ser preenchidos!");
        }

    });

});