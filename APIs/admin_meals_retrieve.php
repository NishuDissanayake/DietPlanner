<?php

if($_GET['APIkey']!='1234modamahii'){
include 'error.php';
echo $error;
}
else{
	
	include 'conn.php';

	$query = $link->query("select * from meals");
	$result = array();

	while ($rowData = $query->fetch_assoc()) {
		$result[] = $rowData;
	}


	echo json_encode($result);
}
?>