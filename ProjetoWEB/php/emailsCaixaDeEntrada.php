<?php

    session_start();

    $email = trim($_SESSION['email']);

    $xml_obj = simplexml_load_file("../xml/emails.xml");

    for ($i = 0; $i < count($xml_obj); $i ++) {
        if ($email == $xml_obj->email[$i]->destinatario) {
            $retorno[$i]["remetente"] = trim($xml_obj->email[$i]->remetente);
            $retorno[$i]["destin"] = trim($xml_obj->email[$i]->destinatario);
            $retorno[$i]["assunto"] = trim($xml_obj->email[$i]->assunto);
            $retorno[$i]["texto"] = trim($xml_obj->email[$i]->texto);
            for ($j = 0; $j < count($xml_obj->email[$i]->copias->children()); $j ++) {
                $retorno[$i][$j]["copia"] = trim($xml_obj->email[$i]->copias->destin_copia[$j]);
            }
        }
    }
    
    echo json_encode($retorno);

?>