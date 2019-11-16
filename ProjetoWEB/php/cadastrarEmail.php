<?php

    $xml = simplexml_load_file("../xml/cadastros.xml");

    $email = trim($_POST["email"]);
    $senha = trim($_POST["senha"]);
    
    for ($i = 0; $i < count($xml); $i ++) {
        if ($email == $xml->usuario[$i]->email) {
            $email_exis = true;
            break;
        } else {
            $email_exis = false;
        }
    }

    if ($email_exis) {
        $retorno["status"] = "n";
        $retorno["mensagem"] = "Este cadastro já existe! Tente novamente com um outro email";
    } else {
        $usuario_xml = $xml->addChild('usuario');
        $usuario_xml->addChild('email', $email);
        $usuario_xml->addChild('senha', $senha);
        
        file_put_contents("../xml/cadastros.xml", $xml->asXML());
                    
        $retorno["status"] = "s";
        $retorno["mensagem"] = "Cadastro realizado com sucesso!";
    }

    $retorno_json = json_encode($retorno);
    echo $retorno_json;

?>