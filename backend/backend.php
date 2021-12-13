<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");

session_start();
include("mysql.php");


// +----------------------------------------------------+
// | GET Methods being called with identifier "action" |
// +----------------------------------------------------+
if (isset($_GET['action'])) {
    $action = $_GET['action'];

    if ($action == "logout") {
        session_destroy();
        $response['authenticated'] = FALSE;
        echo json_encode($response);
    }
}

// +----------------------------------------------------+
// | POST Methods being called with identifier "action" |
// +----------------------------------------------------+

if (isset($_GET['action'])) {
    $action = $_GET['action'];

    // LOGIN
    if ($action == "login") {
        $loginObject = json_decode(file_get_contents('php://input'));
        $email = $loginObject->Email;
        $password = $loginObject->PSWD;

        // Get the users login information
        $sql = "SELECT * FROM UserLogin WHERE Email = '$email' LIMIT 1";
        $result = $mySQL->query($sql);

        // Check if the usernam exists
        if ($result->num_rows == 1) {
            $data = $result->fetch_object();
            // Check if it is the right password for that username
            if (password_verify($password, $data->pass)) {
                $sql = "SELECT * FROM users WHERE userID = " . $data->id;
                $user = $mySQL->query($sql)->fetch_object();
                $response['authenticated'] = TRUE;
                $response['userData'] = $user;
                echo json_encode($response);
            } else {
                $response['authenticated'] = FALSE;
                $response['error'] = "Wrong password";
                echo json_encode($response);
            }
        } else {
            $response['authenticated'] = FALSE;
            $response['error'] = "User doesn't exist";
            echo json_encode($response);
        }
    }

    // SIGN UP
    if ($action == "signup") {
        $loginObject = json_decode(file_get_contents('php://input'));
        $email = $loginObject->Email;
        $password = $loginObject->PSWD;
        $passwordCheck = $loginObject->PSWDCheck;

        if (!empty($email) && !empty($password)) {
            // Check if passwords are the same
            if ($password == $passwordCheck) {

                // Check if username already exists
                $sql = "SELECT id FROM UserLogin WHERE Email = '$email'";
                $result = $mySQL->query($sql);

                // If the username does not exist, then create a new user
                if ($result->num_rows == 0) {
                    $passEncrypt = password_hash($loginObject->PSWD, PASSWORD_DEFAULT);
                    $firstname = $loginObject->FirstName;
                    $lastname = $loginObject->LastName;

                    $sql = "CALL CreateUser('$firstname', '$lastname', '$email', '$passEncrypt')";
                    if ($mySQL->query($sql) === TRUE) {
                        $response['signupSuccess'] = TRUE;
                        echo json_encode($response);
                    } else {
                        $response['signupSuccess'] = FALSE;
                        $response['error'] = "Signup failed. Please try again.";
                        echo json_encode($response);
                    }
                } else {
                    $response['signupSuccess'] = FALSE;
                    $response['error'] = "Signup failed. Email taken.";
                    echo json_encode($response);
                }
            } else {
                $response['signupSuccess'] = FALSE;
                $response['error'] = "Signup failed. Passwords not the same.";
                echo json_encode($response);
            }
        } else {
            $response['signupSuccess'] = FALSE;
            $response['error'] = "Signup failed. Please fill out all fields.";
            echo json_encode($response);
        }
    }
}
