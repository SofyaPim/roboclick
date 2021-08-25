<?php
$name = $_POST["name"];
$email = $_POST["email"];
$phone = '+7(777)7777';

if (isset($name) && isset($phone)&& isset($email)) {
    $conn = new mysqli("localhost", "root", "", "users");
   
    if($conn->connect_error){
        die("Ошибка: " . $conn->connect_error);
    }
    $name = $conn->real_escape_string($name);
    $phone = $conn->real_escape_string($phone);
    $email = $conn->real_escape_string($email);

    $sql = "INSERT INTO `user-data` (`name`, `phone`, `email`) VALUES ('$name', '$phone', '$email')";
    if($conn->query($sql)){
        echo "Данные успешно добавлены";
    } else{
        echo "Ошибка: " . $conn->error;
    }
    $conn->close();
}





?>