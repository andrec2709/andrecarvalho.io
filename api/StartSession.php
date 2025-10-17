<?php

$CONFIG_PATH = getenv('CONFIG_PATH');

include $CONFIG_PATH;


if (session_status() === PHP_SESSION_NONE){
    session_start();
}

if (!isset($_SESSION['language'])){
    $_SESSION['language'] = $_GET['lang'] === 'pt' ? 'pt' : 'en';
}

if (!isset($_SESSION['theme'])){
    $_SESSION['theme'] = "dark";
}

$language = $_SESSION['language'];
include "../lang/$language.php";


?>