<?php

if($_GET['APIkey']!='1234modamahii'){
include 'error.php';
echo $error;
}
else{

    $age = $_GET['age'];
    $gender = $_GET['gender'];
    $weight = $_GET['weight'];
    $height = $_GET['height'];
    $diet = $_GET['diet'];
    $fat = $_GET['fat'];
    $activity = $_GET['activity'];
    $allergens = $_GET['allergens'];
    $uid = $_GET['uid'];

    $calories = $_GET['calories'];
    $leanfactor;
    $BMR;
    $BMI;
    
	
	include 'conn.php';

	$query = "insert into meals (uid. weight, height, gender, age, bodyfat, leanfactor, BMR, activity, caloriecount, primarydiet, BMI) values (".$uid.", ".$weight.", ".$height.", '".$gender."', ".$age.", '".$bodyfat."', ".$leanfactor.", ".$BMR.", '".$activity."', ".$caloriecount.", '".$primarydiet."', ".$BMI.");";

    $query2 = "insert into userallergies (uid, allergen) values (".$uid.", '".$allergen."');";

	if(mysqli_query($link,$query)){
                for ($i=0; $i<sizeof ($allergens); $i++) {  
                    $query2 = "insert into userallergies (uid, allergen) values (".$uid.", '".$allergen."');";
                    if(mysqli_query($link,$query3)){
                        echo "Successfull";
                    }
                    else{
                        echo mysqli_error($link);
                    }
                }
                }
            else{
                echo mysqli_error($link);
            }


}
?>