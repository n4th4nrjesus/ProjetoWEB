<?php

    session_start();

    $xml_emails = simplexml_load_file("../xml/emails.xml");
    $xml_cadastros = simplexml_load_file("../xml/cadastros.xml");

    $remet = trim($_SESSION['email']);
    $destin = trim($_POST["destino"]);
    $copia = trim($_POST["copia"]);
    $assunto = trim($_POST["assunto"]);
    $texto = trim($_POST["texto"]);
    
    for ($i = 0; $i < count($xml_cadastros); $i ++) {
        if ($destin == $xml_cadastros->usuario[$i]->email) {
            $email_destin_exis = true;
            break;
        } else {
            $email_destin_exis = false;
        }
    }

    for ($i = 0; $i < count($xml_cadastros); $i ++) {
        if ($copia == "") {
            $email_copia_exis = true;
            break;
        } else if ($copia == $xml_cadastros->usuario[$i]->email){
            $email_copia_exis = true;
            break;
        } else {
            $email_copia_exis = false;
        }
    }

    if (!$email_destin_exis || !$email_copia_exis) {
        $retorno["status"] = "n";
        $retorno["mensagem"] = "Os emails de destino e de cópia devem existir!";
    } else {
        $email_xml = $xml_emails->addChild('email');
        $email_xml->addChild('remetente', $remet);
        $email_xml->addChild('destinatario', $destin);
        $email_xml->addChild('assunto', $assunto);
        $email_xml->addChild('texto', $texto);
        $email_xml->addChild('copia', $copia);
        
        file_put_contents("../xml/emails.xml", $xml_emails->asXML());
                    
        $retorno["status"] = "s";
        $retorno["mensagem"] = "Mensagem enviada com sucesso!";
    }

    $retorno_json = json_encode($retorno);
    echo $retorno_json;

?>