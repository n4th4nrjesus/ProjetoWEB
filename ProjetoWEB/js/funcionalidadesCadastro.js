$(document).ready(function(){
   
    $("#btnCadastro").click(function() { 
        var erro = 0;
        $("input").each(function() {
            if ($(this).val() == "") {
                erro = 1;
            }
            if ($("#txtSenha").val() != $("#txtConfSenha").val()) {
                erro = 2;
            }
        });

        if (erro == 0) {
            $.ajax({
                type: "POST", 
                url: "../php/cadastrarEmail.php",
                dataType: "json", 
                data: {
                    email: $("#txtEmail").val(),
                    senha: $("#txtSenha").val()
                },
                success: function (retorno) {
                    alert(retorno.mensagem);
                    if(retorno.status == "s") {
                        window.location.href = "../index.html";
                    }
                } 
            })
        } else if (erro == 1) {
            alert("Todos os campos devem ser preenchidos");
        } else {
            alert("A senha e confirmação de senha devem ser iguais");
        }
    });

});