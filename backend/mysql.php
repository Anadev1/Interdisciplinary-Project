<?php
$server = "mysql106.unoeuro.com"; // Change to domain name, e.g. www.iloveunicorns.com
$username = "alexkrugeri_com"; // Change to the admins username of the server
$password = "245pGaF3Dxnw"; // Change to the admins password of the server
$database = "alexkrugeri_com_db_shareat"; // Change to the name of the database you would like to connect to on the server

$mySQL = new mysqli($server, $username, $password, $database);


if (!$mySQL) {
    die("Could not connect to the MySQL server: " . mysqli_connect_error());
}
