<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

if($_GET['APIkey']!='XhdfsdftyaDGANLhdfjhj346378ajk'){
include 'error.php';
echo $error;
}
else{

    $uid = 3;
    $caloriecountb = 0;
	
	include 'conn.php';

    $stmt = $link->prepare("select caloriecount from userinfo where uid = ".$uid);
    $stmt->execute();
    $result = $stmt->get_result();  
    $value = $result->fetch_object();
    $myvalue = $value->caloriecount;

    $caloriecountb = $myvalue * 0.3;

	$query = $link->query("select m.name from meals as m inner join mealtime as t on m.mealid = t.mealid where t.mealtime = 'breakfast' AND m.clories <= ".$caloriecountb);
	$result = array();

	while ($rowData = $query->fetch_assoc()) {
		$result[] = $rowData;
	}


	echo json_encode($result); 
}
?>