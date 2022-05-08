<?php

if($_GET['APIkey']!='1234modamahii'){
include 'error.php';
echo $error;
}
else{

    $day = $_GET['day'];
    $uid = $_GET['uid'];
    $breakfast = $_GET['breakfast'];
    $lunch = $_GET['lunch'];
    $snack = $_GET['snack'];
    $dinner = $_GET['dinner'];
	
	include 'conn.php';

	$query = "insert into mealplan (uid, day, breakfast, lunch, snack, dinner) values (".$uid.", '".$day."', '".$breakfast."', '".$lunch."', '".$snack."', '".$dinner."');";

	if(mysqli_query($link,$query)){
        echo "Successfull";
    }
    else{
        echo mysqli_error($link);
    }
               

}
?>