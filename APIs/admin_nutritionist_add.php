<?php

if($_GET['APIkey']!='1234modamahii'){
include 'error.php';
echo $error;
}
else{

    $namee = $_GET['namee'];
    $post = $_GET['post'];
    $location = $_GET['location'];
    $preptime = $_GET['preptime'];
    $contact = $_GET['contact'];
    $province= $_GET['province'];
	
	include 'conn.php';

	$query = "insert into nutritionists (name, position, location, phonenumber, province) values ('".$namee."', '".$post."', '".$location."', '".$contact."', '".$province."');";

	if(mysqli_query($link,$query)){
        echo "Successfull";
    }
    else{
        echo mysqli_error($link);
    }
               

}
?>