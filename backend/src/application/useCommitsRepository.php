<?php

include_once __DIR__ . '/../repositories/commits/MySQLCommitsRepository.php';
include_once __DIR__ . '/../repositories/commits/CommitsRepository.php';

function useCommitsRepository(): CommitsRepository
{
    global $mysqlUser, $mysqlSecret, $mysqlDB;
    return new MySQLCommitsRepository('localhost', $mysqlUser, $mysqlSecret, $mysqlDB, 3306);

}