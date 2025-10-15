<?php

include __DIR__ . '/../config.php';

$mysqli = new mysqli("localhost", $mysqlUser, $mysqlSecret, $mysqlDB, 3306);

$stmt = $mysqli->prepare("SELECT * FROM repos");

$stmt->execute();

// Init cURL object and opts
$ch = curl_init();

curl_setopt($ch, CURLOPT_USERAGENT, "andrec2709");

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch, CURLOPT_HEADER, true);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Accept: application/vnd.github+json",
));

curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);


foreach ($stmt->get_result() as $line){
    
    $total = 0;

    // Removes the '{/sha}' bit from the end of commits_url
    $url = substr($line['commits_url'], 0, strpos($line['commits_url'], "{/sha}"));

    $url .= "?per_page=100";

    // For every repository, set $url and send request
    curl_setopt($ch, CURLOPT_URL, $url);

    $response = curl_exec($ch);

    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);

    $header = explode( "\r\n", substr($response, 0, $header_size));
    
    $body = json_decode(substr($response, $header_size), true);

    $total = count($body);

    $link_header = array_find($header, function (string $value){
    
        return strpos($value, "link: ") !== false;

    });

    if ($link_header !== null){
        
        $links = explode("," ,$link_header);

        $last = array_find($links, function (string $value){

            return strpos($value, "rel=\"last\"") !== false;

        });

        $last = str_replace(["<", ">"], "", explode(";", $last)[0]);
        $index = strpos($last, "page=");

        $ref_url = substr($last, 0, $index+5);
        $last_page_num = intval(substr($last, $index+5));
        
        unset($index);
        unset($links);
        unset($last);
        unset($response);
        unset($body);
        unset($url);
        unset($header_size);

        // cpage = Current page. Makes requests until reach $last_page_num
        for ($cpage = 2; $cpage <= $last_page_num; $cpage++){

            $url = trim($ref_url . $cpage);
            curl_setopt($ch, CURLOPT_URL, $url);
            $response = curl_exec($ch);

            $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);

            $body = json_decode(substr($response, $header_size), true);

            $total += count($body);

        }

    }

    $stmt = $mysqli->prepare("INSERT INTO total_commits (id, commits)
                             VALUES (?, ?)
                             ON DUPLICATE KEY UPDATE commits=?");
    
    $id = $line['id'];

    $stmt->bind_param('sdd', $id, $total, $total);
    $stmt->execute();

}

