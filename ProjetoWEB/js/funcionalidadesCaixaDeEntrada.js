$(document).ready(function(){

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/emailsCaixaDeEntrada.php",
        success: function(){
            var conteudo = "<table>";
            
            conteudo += "<tr>";
                conteudo += "<td>" + retorno.remetente + "</td>";
                conteudo += "<td>" + retorno.assunto + "</td>";
                conteudo += "<td>" + retorno.texto + "</td>";
            conteudo += "</tr>";
            
            conteudo += "</table>";

            $("#divListaDados").html(conteudo);
        }
    });

    $("#btnNovaMensagem").click(function(){
        window.location.href = "novaMensagem.html";
    });

});