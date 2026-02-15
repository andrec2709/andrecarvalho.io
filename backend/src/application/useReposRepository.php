<?php

$CONFIG_PATH = getenv('CONFIG_PATH');
include_once __DIR__ . '/../repositories/repos/MySQLReposRepository.php';
include_once __DIR__ . '/../repositories/repos/ReposRepository.php';
include_once $CONFIG_PATH;

function useReposRepository(): ReposRepository {
    global $mysqlUser, $mysqlSecret, $mysqlDB;
    return new MySQLReposRepository('localhost', $mysqlUser, $mysqlSecret, $mysqlDB, 3306);
}