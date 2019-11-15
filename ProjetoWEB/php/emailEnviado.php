<?php

    $xml = simplexml_load_file("../xml/emailEnviado.xml");
    
    $destinatario = trim($_POST["ajax_destinatario"]);
    $cc = trim($_POST["ajax_cc"]);
    $assunto = trim($_POST["ajax_assunto"]);
    $texto = trim($_POST["ajax_texto"]);

    $email_xml = $xml->addChild('email');
    $email_xml->addChild('destinatario', $destinatario);
    $email_xml->addChild('cc', $cc);
    $email_xml->addChild('assunto', $assunto);
    $email_xml->addChild('texto', $texto);
    file_put_contents("../xml/emailEnviado.xml", $xml->asXML());

    $retorno["status"] = "s";
    $retorno["mensagem"] = "E-mail enviado com sucesso!";

    $retorno_json = json_encode($retorno);
    echo $retorno_json;
?>