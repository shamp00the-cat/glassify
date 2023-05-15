<?php
include "connect.php";
$glassDb = new connectDb;
$conn = $glassDb->connect();

$pieceId = false;
if(isset($_GET['pieceId'])){
    $pieceId = $_GET['pieceId'];
}
$sql = "SELECT * FROM glass WHERE id = '$pieceId';";
$stmt = $conn->prepare($sql);
$stmt->execute();
$resultSet = $stmt->get_result();
$pieces = $resultSet->fetch_all(MYSQLI_ASSOC);
echo json_encode($pieces);
?>