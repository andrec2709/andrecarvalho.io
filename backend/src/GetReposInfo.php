<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

include_once __DIR__ . '/application/useReposRepository.php';
include_once __DIR__ . '/application/useCommitsRepository.php';

$reposRepo = useReposRepository();
$commitsRepo = useCommitsRepository();

$result1 = $reposRepo->getAll();
$result2 = $commitsRepo->getAll();

$res_json = [];
$temp = [];

foreach ($result1 as $line) {

    $temp["id"] = $line['id'];
    $temp["repo_name"] = $line['repo_name'];
    $temp["description"] = $line['description'];
    $temp["updated_at"] = $line['updated_at'];
    $temp["commits_url"] = $line['commits_url'];
    $temp["avatar_url"] = $line['avatar_url'];

    foreach ($result2 as $line2) {
        if ($line2["id"] == $line["id"]) {
            $temp["commits"] = $line2["commits"];
            break;
        }
    }

    $res_json[] = $temp;
}


echo json_encode($res_json);
