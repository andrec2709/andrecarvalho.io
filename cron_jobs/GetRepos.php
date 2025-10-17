<?php

$CONFIG_PATH = getenv('CONFIG_PATH');

include $CONFIG_PATH;

$url = "https://api.github.com/users/andrec2709/repos";

$ch = curl_init($url);



curl_setopt($ch, CURLOPT_USERAGENT, "andrec2709");
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/vnd.github+json"));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HEADER, 1);

$resp = curl_exec($ch);

$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$header = substr($resp, 0, $header_size);
$body = substr($resp, $header_size);
$body_json = json_decode($body, true);

$mysqli = new mysqli("localhost", $mysqlUser, $mysqlSecret, $mysqlDB, 3306);
$stmt = $mysqli->prepare("INSERT INTO repos (id, repo_name, description, updated_at, commits_url, avatar_url) 
                        VALUES(?, ?, ?, ?, ?, ?) 
                        ON DUPLICATE KEY UPDATE repo_name=?, description=?, updated_at=?, commits_url=?, avatar_url=?");
$stmt->bind_param('sssssssssss', $id, $name, $description, $updated_at, $commits_url, $avatar_url, $name, $description, $updated_at, $commits_url, $avatar_url);

foreach ($body_json as $i){
    $id = $i['id'];
    $name = $i['name'];
    $description = $i['description'];
    $updated_at = str_replace(['T', 'Z'], [" ", ""], $i['updated_at']);
    $commits_url = $i['commits_url'];
    $avatar_url = $i['owner']['avatar_url'];

    $stmt->execute();

}