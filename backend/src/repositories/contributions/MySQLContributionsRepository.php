<?php

include_once __DIR__ . '/ContributionsRepository.php';

class MySQLContributionsRepository implements ContributionsRepository {
    private mysqli $db;    

    public function __construct(string $hostname, string $username, string $pwd, string $database, int $port = 3306) {
        $this->db = new mysqli($hostname, $username, $pwd, $database, $port);
    }

    public function save($date, $count, $level) {
        $stmt = $this->db->prepare('INSERT INTO contributions VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE date=?, count=?, level=?');
        $stmt->bind_param('ssssss', $date, $count, $level, $date, $count, $level);
        $stmt->execute();
    }

    public function getAll() {
        $stmt = $this->db->prepare('SELECT * FROM contributions');
        $stmt->execute();
        $result = $stmt->get_result();
        
        return $result->fetch_all(MYSQLI_ASSOC);
    }
}