<?php

if($_GET['APIkey']!='1234modamahii'){
include 'error.php';
echo $error;
}
else{

    $fname = $_GET['fname'];
    $lname = $_GET['lname'];
    $email = $_GET['email'];
    $pwd = $_GET['pwwd'];
	
	include 'conn.php';

	$query = "insert into users (firstname, lastname, email, pwd) values ('".$fname."', '".$lname."', '".$email."', '".$pwd."');";

	if(mysqli_query($link,$query)){
        echo "Successfull";
    }
    else{
        echo mysqli_error($link);
    }
               

}
?>