<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

if($_GET['APIkey']!='XhdfsdftyaDGANLhdfjhj346378ajk'){
include 'error.php';
echo $error;
}
else{

	include 'conn.php';
    
    $age = $_GET['age'];
    $gender = $_GET['gender'];
    $weight = $_GET['weight'];
    $height = $_GET['height'];
    $diet = $_GET['diet'];
    $fat = $_GET['fat'];
    $activity = $_GET['activity'];
    $allergens = $_GET['allergens'];
    $uid = $_GET['uid'];

    $heightsquared = $height * $height;
    $BMI = ($weight/$heightsquared);

    $leanfactor = 0;
    $caloriecount = 0;
    $BMR = 0;
    $activitymultiplier = 0;

    if ($gender == "Male")
    {
        if($fat == "low")
        {
            $leanfactor = 1;
        }
        else if ($fat == "moderate")
        {
            $leanfactor = 0.95;
        }
        else if ($fat == "high")
        {
            $leanfactor = 0.90;
        }
        else if ($fat == "veryhigh")
        {
            $leanfactor = 0.85;
        }
        else
        {
            echo "Error in body fat selection!!!";
        }
    }
    else if ($gender == "Female")
    {
        if($fat == "low")
        {
            $leanfactor = 1;
        }
        else if ($fat == "moderate")
        {
            $leanfactor = 0.95;
        }
        else if ($fat == "high")
        {
            $leanfactor = 0.90;
        }
        else if ($fat == "veryhigh")
        {
            $leanfactor = 0.85;
        }
        else
        {
            echo "Error in body fat selection!!!";
        }
    }
    else
    {
        echo "Error in gender selection!!!";
    }

    if($activity == "light")
    {
        $activitymultiplier = 1.55;
    }
    else if($activity == "moderate")
    {
        $activitymultiplier = 1.65;
    }
    else if($activity == "heavy")
    {
        $activitymultiplier = 1.8;
    }
    else if($activity == "veryheavy")
    {
        $activitymultiplier = 2;
    }
    else
    { 
        echo "Error in activity level selection!!!";
    }
    
    $step1 = 0;
    if ($gender == "Male")
    {
        $step1 = $weight;
    }
    else if ($gender == "Female")
    {
        $step1 = $weight * 0.9;
    }

    $step2 = $step1 * 24;

    $BMR = $step2 * $leanfactor;

    $caloriecount = $BMR * $activitymultiplier;


   
	$query = "insert into userinfo (uid, weight, height, gender, age, bodyfat, leanfactor, BMR, activity, caloriecount, primarydiet, BMI) values (".$uid.", ".$weight.", ".$height.", '".$gender."', ".$age.", '".$fat."', ".$leanfactor.", ".$BMR.", '".$activity."', ".$caloriecount.", '".$diet."', ".$BMI.");";


	if(mysqli_query($link,$query)){
                for ($i=0; $i<sizeof ($allergens); $i++) {  
                    $query2 = "insert into userallergies (uid, allergen) values (".$uid.", '".$allergens[$i]."');";
                    if(mysqli_query($link,$query2)){ 
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