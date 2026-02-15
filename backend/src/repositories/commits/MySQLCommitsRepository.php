<?php

include_once __DIR__ . '/CommitsRepository.php';

class MySQLCommitsRepository implements CommitsRepository
{
    private mysqli $db;

    public function __construct(string $hostname, string $username, string $pwd, string $database, int $port = 3306)
    {
        $this->db = new mysqli($hostname, $username, $pwd, $database, $port);
    }

    public function getAll()
    {
        $stmt = $this->db->prepare('SELECT * FROM total_commits');
        $stmt->execute();

        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

        return $result;
    }
}