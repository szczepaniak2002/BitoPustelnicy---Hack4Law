<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "incidentdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$currentDateTime = date("Y-m-d H:i:s");
$sql = "INSERT INTO messages (text1, datetime1, from_user_id, to_user_id) VALUES ('" . $_POST["text"] . "', '" . $currentDateTime . "',
        '" . $_POST['from_user_id'] . "', '" . $_POST['to_user_id'] . "')";

        echo $sql;

    if ($conn->query($sql) === TRUE) {
        $response = ["success" => true];
    } else {
        $response = ["success" => false, "error" => $conn->error];
    }

    $data = [];
    $data['success'] = true;
    echo json_encode($data);
?>