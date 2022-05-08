<?php

if($_GET['APIkey']!='1234modamahii'){
include 'error.php';
echo $error;
}
else{

    $planid = $_GET['mealplanid'];
	
	include 'conn.php';

	$query = "delete from mealplan where mealplanid = ".$planid;

	if(mysqli_query($link,$query)){
        echo "Successfull";
    }
    else{
        echo mysqli_error($link);
    }
               

}
?>