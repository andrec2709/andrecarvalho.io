<?php

$CONFIG_PATH = getenv('CONFIG_PATH');
include_once __DIR__ . '/../repositories/contributions/ContributionsRepository.php';
include_once __DIR__ . '/../repositories/contributions/MySQLContributionsRepository.php';
include_once $CONFIG_PATH;


function useContributionsRepo(): ContributionsRepository {
    global $mysqlUser, $mysqlSecret, $mysqlDB;

    return new MySQLContributionsRepository('localhost', $mysqlUser, $mysqlSecret, $mysqlDB, 3306);
}