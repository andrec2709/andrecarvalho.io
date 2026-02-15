<?php

$CONFIG_PATH = getenv('CONFIG_PATH');
include_once __DIR__ . '/repositories/contributions/MySQLContributionsRepository.php';
include_once $CONFIG_PATH;

$url = 'https://api.github.com/graphql';
$repo = new MySQLContributionsRepository('localhost', $mysqlUser, $mysqlSecret, $mysqlDB, 3306);

$ch = curl_init($url);

$data = [
    'query' => '{
  user(login: "andrec2709") {
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            color
            contributionCount
            contributionLevel
            date
            weekday
          }
          firstDay
        } 
      }
    }
  }
  rateLimit {
    cost
    limit
    nodeCount
    remaining
    resetAt
    used
  } 
}',
];

$payload = json_encode($data);

curl_setopt($ch, CURLOPT_USERAGENT, 'andrec2709');
// Move token to configpath file
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: bearer TOKEN"]);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec($ch);
$json = json_decode($response, true);

$weeks = $json['data']['user']['contributionsCollection']['contributionCalendar']['weeks'];

foreach ($weeks as $week) {
    $contributionDays = $week['contributionDays'];

    foreach ($contributionDays as $contributionDay) {
        $contributionLevel = $contributionDay['contributionLevel'];
        $level = match ($contributionLevel) {
            'FIRST_QUARTILE' => 1,
            'SECOND_QUARTILE' => 2,
            'THIRD_QUARTILE' => 3,
            'FOURTH_QUARTILE' => 4,
            'NONE' => 0,
        };
        $count = $contributionDay['contributionCount'];
        $date = $contributionDay['date'];

        $repo->save($date, $count, $level);
    }
}