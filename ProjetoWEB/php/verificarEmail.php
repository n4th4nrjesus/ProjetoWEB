<?php
    $xml_str = file_get_contents("../xml/cadastros.xml");
    $xml_obj = simplexml_load_string($xml_str);

    $email = trim($_POST["email"]);
    $senha = trim($_POST["senha"]);

    for ($i = 0; $i < count($xml_obj); $i ++) {

        if (($email == $email_xml = $xml_obj->usuario[$i]->email) && ($xml_obj->usuario[$i]->senha)) {
            $retorno["status"] = "s";
            $retorno["mensagem"] = "Login realizado com sucesso!";
            break;
        } else {
            $retorno["status"] = "n";
            $retorno["mensagem"] = "Email ou senha errado(s). Tente novamente.";
            break;
        }

    }

    $retorno_json = json_encode($retorno);
    echo $retorno_json;
?>