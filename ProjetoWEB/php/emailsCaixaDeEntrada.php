<?php

    session_start();

    $email = trim($_SESSION['email']);

    $xml_obj = simplexml_load_file("../xml/emails.xml");

    $retorno = "";

    for ($i = 0; $i < count($xml_obj); $i ++) {
        if ($email == $xml_obj->email[$i]->copia) {
            $verif_copia = true;
            $complemento_assunto = " (cópia)";
        } else {
            $verif_copia = false;
            $complemento_assunto = "";
        }
        if (($email == $xml_obj->email[$i]->destinatario) || $verif_copia) {
            $retorno_dados["remetente"] = trim($xml_obj->email[$i]->remetente);
            $retorno_dados["assunto"] = trim($xml_obj->email[$i]->assunto);
            $retorno_dados["texto"] = trim($xml_obj->email[$i]->texto);
            
            $retorno .= "<table class=\"tblEmail\">";
            $retorno .= "<tr>";
            $retorno .= "<td class=\"colImg\"><img src=\"https://conexaofreelancer.com.br/wp-content/uploads/2018/06/Pessoa.png\" class=\"iconePessoa\"/></td>";
            $retorno .= "<td class=\"colRemet\">".$retorno_dados["remetente"]."</td>";
            $retorno .= "<td class=\"colAssunto\">".$retorno_dados["assunto"].$complemento_assunto."</td>";
            $retorno .= "<td class=\"colTexto\">".$retorno_dados["texto"]."</td>";
            $retorno .= "</tr>";
            $retorno .= "</table>";
        }
    }

    echo html_entity_decode($retorno);

?>