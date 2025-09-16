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
    $decoded = json_decode($response, true);

    if ($decoded['success'] === true){
        $to = "contato@andrecarvalho.io";
        $subject = "Test!!!";
        $message = "Test message!!!";
        $headers = "From: 11andrecarvalho@gmail.com";
        $resp = mail($to, $subject, $message, $headers);

       
        echo json_encode(['success' => $resp]);

    }
}

?>

