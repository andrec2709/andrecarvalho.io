<?php

if (session_status() === PHP_SESSION_NONE){
    session_start();
}

// if (!isset($_SESSION['language'])){
//     $_SESSION['language'] = $_GET['lang'] === 'pt' ? 'pt' : 'en';
//     $_SESSION['langfile'] = "../lang/{$_SESSION['language']}.php";
// }

// if (!isset($_SESSION['theme'])){
//     $_SESSION['theme'] = "dark";
// }


echo json_encode($_SESSION);

?>