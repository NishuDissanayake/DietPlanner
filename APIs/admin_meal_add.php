<?php

if($_GET['APIkey']!='1234modamahii'){
include 'error.php';
echo $error;
}
else{

    $namee = $_GET['namee'];
    $calories = $_GET['calories'];
    $portion = $_GET['portion'];
    $preptime = $_GET['preptime'];
    $recipe = $_GET['recipe'];
    $mealtime = $_GET['mealtime'];
    $mealtype = $_GET['mealtype'];
    $allergens = $_GET['allergens'];
	
	include 'conn.php';

	$query = "insert into meals (name, mealtype, clories, amount, preptime, recipelink) values ('".$namee."', '".$mealtype."', ".$calories.", '".$portion."', ".$preptime.", '".$recipe."');";

    $query1 = "select mealid from meals where name = '".$namee."';";

	if(mysqli_query($link,$query)){
        $mealquery = mysqli_query($link,$query1);
        $row = mysqli_fetch_array($mealquery);
        if($row){
            $query2 = "insert into mealtime (mealid, mealtime) values (".$row['mealid'].", '".$mealtime."');";
            if(mysqli_query($link,$query2)){
                for ($i=0; $i<sizeof ($allergens); $i++) {  
                    $query3="INSERT INTO mealallergens (mealid, allergen) VALUES (".$row['mealid'].",'".$allergens[$i]. "')";  
                    

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
        else{
            echo mysqli_error($link);
        }
    }
    else{
        echo mysqli_error($link);
    }


}
?>