<?php

include __DIR__ . "/../config.php";

$url = "https://www.google.com/recaptcha/api/siteverify";

$data = [
    "secret" => $recaptchaSecret,
    "response" => $_POST['g-recaptcha-response'],
];

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if (curl_errno($ch)){
    echo curl_error($ch);
}
else{
    $resp_decoded = json_decode($response, true);

    if ($resp_decoded['success'] === true){

        $to = "contato@andrecarvalho.io";
        $subject = "E-mail from " . $_POST["username"] . " via andrecarvalho.io";
        $msg = $_POST["message"];
        $headers = "From: " . $_POST["email"];
        
        $resp = mail($to, $subject, $msg, $headers);
        echo json_encode(['success' => $resp]);

    }
}

?>

