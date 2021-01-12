<?php

include "dbFunctions.php"; 

// SQL query returns multiple database records.
$query = "SELECT * FROM statistics order by id"; 

//debug
//echo $query;
//exit();


$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $statistics[] = $row;
}

//debugging
//print_r($statistics);


mysqli_close($link);

echo json_encode($statistics);
?>
