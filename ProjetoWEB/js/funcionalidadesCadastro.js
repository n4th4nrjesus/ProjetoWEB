$(document).ready(function(){
   
    $("#btnCadastro").click(function() {

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