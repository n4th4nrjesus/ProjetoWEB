<?php

    $xml = simplexml_load_file("../xml/cadastros.xml");

    $email = trim($_POST["email"]);
    $senha = trim($_POST["senha"]);
    
    $usuario_xml = $xml->addChild('usuario');
    $usuario_xml->addChild('email', $email);
    $usuario_xml->addChild('senha', $senha);
    
    file_put_contents("../xml/cadastros.xml", $xml->asXML());

    $retorno["status"] = "s";
    $retorno["mensagem"] = "Login realizado com sucesso!";        

    $retorno_json = json_encode($retorno);
    echo $retorno_json;

?>