<?php

session_start();
include("mysql.php");


// +----------------------------------------------------+
// | GET Methods being called with identifier "action" |
// +----------------------------------------------------+
// if (isset($_GET['action'])) {
//     $action = $_GET['action'];

//     if ($action == "logout") {
//         session_destroy();
//         $response['authenticated'] = FALSE;
//         echo json_encode($response);
//     }
// }

// +----------------------------------------------------+
// | POST Methods being called with identifier "action" |
// +----------------------------------------------------+

if (isset($_GET['action'])) {
    $action = $_GET['action'];

    // LOGIN
    // if ($action == "login") {
    //     $loginObject = json_decode(file_get_contents('php://input'));
    //     $email = $user->email;
    //     $password = $user->password;

    //     // Get the users login information
    //     $sql = "SELECT * FROM UserLogin WHERE Email = '$email' LIMIT 1";
    //     $result = $mySQL->query($sql);

    //     // Check if the username exists
    //     if ($result->num_rows == 1) {
    //         $data = $result->fetch_object();
    //         // Check if it is the right password for that username
    //         if (password_verify($password, $data->pass)) {
    //             $sql = "SELECT * FROM users WHERE userID = " . $data->id;
    //             $loginObject = $mySQL->query($sql)->fetch_object();
    //             $response['authenticated'] = TRUE;
    //             $response['userData'] = $loginObject;
    //             echo json_encode($response);
    //         } else {
    //             $response['authenticated'] = FALSE;
    //             $response['error'] = "Wrong password";
    //             echo json_encode($response);
    //         }
    //     } else {
    //         $response['authenticated'] = FALSE;
    //         $response['error'] = "User doesn't exist";
    //         echo json_encode($response);
    //     }
    // }

    // SIGN UP
    if ($action == "signup") {
        $user = json_decode(file_get_contents('php://input'));
        // var_dump($user);
        $firstname = $user->firstname;
        $lastname = $user->lastname;
        $email = $user->email;
        $password = $user->password;

        if (!empty($email && $password && $firstname && $lastname)) {

                $sql = "CALL CreateUser('$firstname', '$lastname', '$email', '$password')";
                if ($mySQL->query($sql) === TRUE) {
                    $response['signup'] = TRUE;
                    echo json_encode($response);
                } else {
                    $response['signup'] = FALSE;
                    $response['error'] = "Signup failed. Please try again.";
                    echo json_encode($response);
                }
                
            
        } else {
            $response['signup'] = FALSE;
            $response['error'] = "Signup failed. Please fill out all fields.";
            echo json_encode($response);
        }
    }
}
