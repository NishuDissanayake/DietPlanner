<?php

if($_GET['APIkey']!='1234modamahii'){
include 'error.php';
echo $error;
}
else{

    $mealtime = $_GET['mealtime'];
    $caloriecount = $_GET['caloriecount'];
	
	include 'conn.php';

	$query = $link->query("select * from meals as c where m.mealtime = ".$mealtime." AND c.clories <= ".$caloriecount." inner join mealtime as m on c.mealid = m.mealid");
	$result = array();

	while ($rowData = $query->fetch_assoc()) {
		$result[] = $rowData;
	}


	echo json_encode($result);
}
?>