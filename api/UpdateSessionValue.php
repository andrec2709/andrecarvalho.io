<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST'){

    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['key']) && isset($data['value'])){
        
        $_SESSION[$data['key']] = $data['value'];
        echo json_encode(['status' => 'success', 'message' => 'success']);

    }
    else{
        echo json_encode(['status' => 'error', 'message' => 'key or value is not valid']);
    }

}
else{
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}

error_log($_SESSION['language']);

?>