<?php

include_once __DIR__ . '/../application/useContributionsRepo.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$repo = useContributionsRepo();

echo json_encode($repo->getAll());
