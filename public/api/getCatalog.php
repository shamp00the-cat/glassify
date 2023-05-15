<?php
include "connect.php";
$glassDb = new connectDb;
$conn = $glassDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $colors = false;
        if(isset($_GET['colors'])){
            $colors = $_GET['colors'];
            $array=array_map(null, explode(',', $colors));
            $array = "'" . implode("','",$array). "'";
            $sql = "SELECT * FROM glass WHERE color IN ($array)";
        } else {
            $sql = "SELECT * FROM glass";
        }
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $resultSet = $stmt->get_result();
        $pieces = $resultSet->fetch_all(MYSQLI_ASSOC);
        echo json_encode($pieces);
        break;
    case "POST":
        $piece= json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO glass(maker, type, maker_name, code, image, description, color) VALUES(:maker, :type, :maker_name, :code, :image, :description, :color)";
        $stmt = $conn->prepare($sql);
        $stmt->blindParam(':maker', $piece->maker);
        $stmt->blindParam(':type', $piece->type);
        $stmt->blindParam(':maker_name', $piece->maker_name);
        $stmt->blindParam(':code', $piece->code);
        $stmt->blindParam(':image', $piece->image);
        $stmt->blindParam(':description', $piece->description);
        $stmt->blindParam(':color', $piece->color);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 1, 'message' => 'Filled to create record.'];
        }
        break;
}
?>