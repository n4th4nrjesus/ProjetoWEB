<?

    $xml_string = file_get_contents("../xml/cadastros.xml");
    $xml_object = simplexml_load_string($xml_object);

    $email = trim($_POST["email"]);
    $senha = trim($_POST["senha"]);
    $confSenha = trim($_POST["confSenha"]);

    if($senha == $confSenha) {
        $email = $xml_object->createElement($email);
        $senha = $xml_object->createElement($senha);
        $usuario = $xml_object->createElement("usuario");

        $usuario->appendChild($email);
        $usuario->appendChild($senha);
        $xml_object->appendChild($usuario);

        $xml_object->save("../xml/cadastros.xml");        
    
    } else {
        $retorno["status"] = "n";
        $retorno["mensagem"] = "Senha diferentes";
    }





?>