<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = file_get_contents("php://input");
    $data = json_decode($data);
    echo "data->type: ". $data->type;
    if($data->type == "login") {
        echo "login->" . $data->login . " password->" . $data->password;
    }

}
?>