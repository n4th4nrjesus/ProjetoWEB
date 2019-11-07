<?

    $xml_string = file_get_contents("../xml/cadastros.xml");
    $xml_object = simplexml_load_string($xml_object);

    $email = trim($_POST["email"]);
    $senha = trim($_POST["senha"]);
    $confSenha = trim($_POST["confSenha"]);


    $xml = new DOMDocument("1.0");

    if($senha === $confSenha) {
        $email = $xml->createElement($email);
        $senha = $xml->createElement($senha);


        



    } else {
        $retorno["status"] = "n";
        $retorno["mensagem"] = "Senha diferentes";
    }





?>