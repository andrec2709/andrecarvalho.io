<?php

$CONFIG_PATH = getenv('CONFIG_PATH');

include $CONFIG_PATH;

$mysqli = new mysqli("localhost", $mysqlUser, $mysqlSecret, $mysqlDB, 3306);

$stmt = $mysqli->prepare("SELECT * FROM repos");
$stmt->execute();

$result1 = $stmt->get_result();

$stmt = $mysqli->prepare("SELECT * FROM total_commits");
$stmt->execute();

$result2 = $stmt->get_result();

$res_json = [];
$temp = [];

foreach ($result1 as $line){

    $temp["id"] = $line['id'];
    $temp["repo_name"] = $line['repo_name'];
    $temp["description"] = $line['description'];
    $temp["updated_at"] = $line['updated_at'];
    $temp["commits_url"] = $line['commits_url'];
    $temp["avatar_url"] = $line['avatar_url'];

    foreach ($result2 as $line2){
        if ($line2["id"] == $line["id"]){
            $temp["commits"] = $line2["commits"];
            break;
        }
    }

    $res_json[] = $temp;
}


echo json_encode($res_json);

?>
