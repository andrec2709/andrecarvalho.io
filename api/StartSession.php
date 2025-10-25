<?php

$CONFIG_PATH = getenv('CONFIG_PATH');

include $CONFIG_PATH;

$DEFAULT_THEME = 'purple';

if (session_status() === PHP_SESSION_NONE){
    session_start();
}

if (isset($_GET['lang']) && ($_GET['lang'] === 'en' || $_GET['lang'] === 'pt')){
    $_SESSION['language'] = $_GET['lang'];
}

if (!isset($_SESSION['language'])){
    $prefers_pt = strpos($_SERVER['HTTP_ACCEPT_LANGUAGE'], 'pt') !== false;
    $_SESSION['language'] = $prefers_pt ? 'pt' : 'en';
}

if (!isset($_SESSION['theme'])){
    $_SESSION['theme'] = "dark";
}

$language = $_SESSION['language'];

$lang = json_decode(file_get_contents( __DIR__ . "/../lang/$language.json"), true);

?>