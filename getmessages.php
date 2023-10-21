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

$errors = [];
$data = [];


if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
	$sql = "SELECT text1, from_user_id, to_user_id FROM messages ORDER BY datetime1 DESC";
    $result = $conn->query($sql);

    $data['data'] = array();
    
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data['data'][] = $row;
        }
    }
    }

    $conn->close();

echo json_encode($data);
?>