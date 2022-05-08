<?php

if($_GET['APIkey']!='1234modamahii'){
include 'error.php';
echo $error;
}
else{

    $email = $_GET['email'];
    $pwd= $_GET['pwd'];
	
	include 'conn.php';

	$query = $link->query("select pwd from users where email = '".$email."'");
	$result = array();

	while ($rowData = $query->fetch_assoc()) {
		$result[] = $rowData;
	}


	echo json_encode($result);
}
?>