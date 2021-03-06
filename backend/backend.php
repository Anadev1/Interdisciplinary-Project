<?php

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
        $email = $loginObject->email;
        $password = $loginObject->password;

        // Get the users login information
        $sql = "SELECT * FROM UserLogin WHERE Email = '$email' LIMIT 1";
        $result = $mySQL->query($sql);

        // Check if the username exists
        if ($result->num_rows == 1) {
            $data = $result->fetch_object();

            // Check if it is the right password for that username
            if (password_verify($password, $data->PSWD)) {
                $sql = "SELECT * FROM users WHERE id = " . $data->id;
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
        $user = json_decode(file_get_contents('php://input'));
        // var_dump($user);
        $firstname = $user->firstname;
        $lastname = $user->lastname;
        $email = $user->email;
        $password = $user->password;

        if (!empty($email && $password && $firstname && $lastname)) {
                $passEncrypt = password_hash($password, PASSWORD_DEFAULT);
                $sql = "CALL CreateUser('$firstname', '$lastname', '$email', '$passEncrypt')";
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

    /*
    if(action == getuserdata) {
        Call DB for userDAta
        Create PHP array with uerData
        json_enconde(php array);
        echo the json

        $data = $result->fetch_assoc();
        echo json_encode($data);
    }
    */

     // ADD ITEM
    if ($action == "additem") {
        $item = json_decode(file_get_contents('php://input'));
        // var_dump($item);
        $itemName = $item->itemName;
        $itemDescription = $item->itemDescription;
        $itemPrice = $item->itemPrice;
        $itemImage = $item->itemImage;

        // Variables that can be changed
        $targetFolder = "../img/";
        $allowedFileTypes = ["pdf", "txt"];
        $allowedImageTypes = ["jpg", "jpeg", "png", "gif"];
        $allowedMaxFileSize = 1024 * 1024 * 5; // Bytes * KiloBytes * MegaBytes
        $addStringToFilename = true; // Adds $stringToAdd to the beginning of the original file name
        $replaceEntireFilename = false; // Replace the entire file name with $stringToAdd
        $stringToAdd = date("Ymd_His_"); // Adds the following datetime format as string: YYYYMMDD_HHMMSS_ (e.g. 20210830_215407_)
        $redirectPath = ""; // E.g. (index.php) - Leave blank if it should not redirect to any path
        $outputAsJSON = true; // Will echo/return the fileData as JSON (redirectPath must be blank!)
        
        // Used to create a JSON response
        $output = [];
        $fileData = [];

        // Used for controlling the logic in this script
        $file = $_FILES["fileToUpload"];
        $fileData["fileName"] = $addStringToFilename ? $stringToAdd . basename($file["name"]) : basename($file["name"]);
        $fileData["size"] = $file["size"];
        $targetFile = $targetFolder . $fileData["fileName"];
        $fileData["type"] = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
        $fileData["isImage"] = false;
        $fileAllowed = false;

        if($replaceEntireFilename) {
            $fileData["fileName"] = $stringToAdd . "." . $fileData["type"];
        }

        // Check if a folder already exists, if not then create the folder
        if (!file_exists($targetFolder)) {
            mkdir($targetFolder, 0777, true);
        }

        // Check if a file with the same name already exists
        if (!file_exists($targetFile)) {
            $fileAllowed = true;
            $output["status"] = "success";
            $output["errorCode"] = "";
        } else {
            $output["status"] = "error";
            $output["errorCode"] = "Filename already exists";        
        }

        if($fileAllowed) {
            // Check if the file is an accepted FILE (non-image)
            // (Defined at line 6)
            foreach($allowedFileTypes as $ext) {
                if($ext == $fileData["type"]) {
                    $fileAllowed = true;
                    $output["status"] = "success";
                    $output["errorCode"] = "";
                    break;
                } else {
                    $fileAllowed = false;
                    $output["status"] = "error";
                    $output["errorCode"] = "File type not accepted";
                }
            }

            // Check if the file is an accepted IMAGE
            // (Defined at line 7)
            if(!$fileAllowed) {
                foreach($allowedImageTypes as $ext) {
                    if($ext == $fileData["type"]) {
                        $fileAllowed = true;
                        $output["status"] = "success";
                        $output["errorCode"] = "";

                        $fileData["isImage"] = true;
                        $fileData["imageWidth"] = getimagesize($file["tmp_name"])[0];
                        $fileData["imageHeight"] = getimagesize($file["tmp_name"])[1];
                        break;
                    } else {
                        $fileAllowed = false;
                        $output["status"] = "error";
                        $output["errorCode"] = "File type not accepted";
                    }
                }
            }
        }

        // Check the file size is within the allowed file size limit
        // (Defined at line 8)
        if($fileAllowed) {
            if($fileData["size"] > $allowedMaxFileSize) {
                $fileAllowed = false;
                $output["status"] = "error";
                $output["errorCode"] = "File size is too big. Only " . round($allowedMaxFileSize / 1024 / 1023, 2) . "MB is allowed";
            }
        }

        // If all requirements has been fullfilled, then begin to resize and upload
        if($output["status"] == "success") {

            // Resize image and upload to other folder
            if($fileData["isImage"] == true) {
                // (Input File, Max resize dimension, New file name, Folder destination)
                // ResizeImage($file, 1400, $fileData["fileName"], "medium/");
                ResizeImage($file, 200, $fileData["fileName"], "small/");
            }

            // Upload the original file
            if(!move_uploaded_file($file["tmp_name"], $targetFolder . $fileData["fileName"])) { // move_uploaded_file() does the actual upload!
                $output["status"] = "error";
                $output["errorCode"] = "Something went wrong in the upload process";
            } else {
                // What to do if upload is a success
            }
        }

        // Add the fileData to the output and convert to JSON
        $output["data"] = $fileData;
        $json = json_encode($output);

        // Return data as JSON
        if($redirectPath == "") {
            if($outputAsJSON) {
                echo $json;
            }
        } else {
            header("location: $redirectPath");
        }

        if (!empty($itemName && $itemDescription && $itemPrice && $itemImage)) {
                $sql = "CALL AddItem('$itemName', '$itemDescription', '$itemPrice', '$itemImage')";
                if ($mySQL->query($sql) === TRUE) {
                    $response['additem'] = TRUE;
                    echo json_encode($response);
                } else {
                    $response['additem'] = FALSE;
                    $response['error'] = "Adding the item failed. Please try again.";
                    echo json_encode($response);
                }
                
            
        } else {
            $response['additem'] = FALSE;
            $response['error'] = "Adding the item failed. Please fill out all fields.";
            echo json_encode($response);
        }
    }

    if($action == "getitems") {
        $sql = "SELECT ItemName, ItemPrice, ItemImage FROM Items";
        $result = $mySQL->query($sql);

        $data = [];
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
    }

    // if($action == "getSingleItem") {
    //     $productId = $_GET['id'];
    //     $sql = "SELECT * FROM Items WHERE id = '$productId'";
    //     $result = $mySQL->query($sql);

    //     $data = [];
    //     while($row = $result->fetch_assoc()) {
    //         $data[] = $row;
    //     }

    //     echo json_encode($data);
    // }


}
