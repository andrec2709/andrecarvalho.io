<?php

include '../config.php';


$mysqli = new mysqli("localhost", $mysqlUser, $mysqlSecret, $mysqlDB, 3306);

$stmt = $mysqli->prepare("SELECT * FROM repos");
$stmt->execute();
$res_json = [];
$temp = [];

foreach ($stmt->get_result() as $line){

    $temp["id"] = $line['id'];
    $temp["repo_name"] = $line['repo_name'];
    $temp["description"] = $line['description'];
    $temp["updated_at"] = $line['updated_at'];
    $temp["commits_url"] = $line['commits_url'];
    $temp["avatar_url"] = $line['avatar_url'];

    $res_json[] = $temp;
}


echo json_encode($res_json);

?>