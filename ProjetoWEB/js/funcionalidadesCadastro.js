$(document).ready(function(){
   
    $("#btnCadastro").click(function() { 
        var erro = false;
        $("#box input").each(function() {
            if ($(this).val() == "") {
                erro = true;
            }
        });
        if (erro = true) {
            alert("Todos os campos devem ser preenchidos")
        } else {
            alert("Gravado com sucesso")
        }


        $.ajax({
            type: "POST", 
            url: "..php/cadastrarEmail.php",
            dataType: "json", 
            data: {
                email: $("#txtEmail").val(),
                senha: $("#txtSenha").val(),
                confSenha: $("#txtConfSenha").val()
            },
            success: function (retorno) {
                alert(retorno.mensagem);
            } 
        })

        window.location.replace("caixaDeEntrada.html");
    });



});