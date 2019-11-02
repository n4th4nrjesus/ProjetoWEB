<?php
    $xml_str = file_get_contents("../xml/cadastros.xml");
    $xml_obj = simplexml_load_string($xml_str);

    $email = trim($_POST["email"]);
    $senha = trim($_POST["senha"]);

    for ($i = 0; $i < count($xml_obj) ; $i ++) { 
        if ($email == $xml_obj->usuario[$i]->email && $senha == $xml_obj->usuario[$i]->senha) {
            $retorno["status"] = "s";
            $retorno["mensagem"] = "Login realizado com sucesso!";
        } else {
            $retorno["status"] = "n";
            $retorno["mensagem"] = "Email ou senha errado(s). Tente novamente.";
        }

    }

    $retorno_json = json_encode($retorno);
    echo $retorno_json;
?>