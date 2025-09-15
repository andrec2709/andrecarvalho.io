<?php

$url = "https://www.google.com/recaptcha/api/siteverify";

$data = [
    "secret" => "6Ld3jcorAAAAABBfRclMdqZkUcqKlFz7W1_zxUF4",
    "response" => $_POST['g-recaptcha-response'],
    "remoteip" => $_SERVER['REMOTE_ADDR'],
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
    error_log($response);
}


?>