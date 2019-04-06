<?php
/**
 * Created by PhpStorm.
 * User: URA
 * Date: 18.03.2019
 * Time: 15:44
 */

/* DATABASE CONFIGURATION */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'admin');
define('DB_PASSWORD', 'Gupfunwk1985');
define('DB_DATABASE', 'gllacy');

$orderSort = ' ';
$myCard = output_card();
header('Location: goods.php');


function getDB()
{
    $dbhost = DB_SERVER;
    $dbuser = DB_USERNAME;
    $dbpass = DB_PASSWORD;
    $dbname = DB_DATABASE;

    $dbConnection = new PDO("mysql:host=$dbhost; dbname=$dbname", $dbuser, $dbpass);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbConnection;
}

function output_card()
{
    //Получаем порядок сортировки из формы через переменную $_POST
    $orderSort = $_POST['sorting'];
    switch ($orderSort) {
        case "по популярности": $sql_sort = ' order by popularity'; break;
        case "сначала недорогие": $sql_sort = ' order by price'; break;
        case "сначала дорогие": $sql_sort = ' order by desc price '; break;
        case "по жирности": $sql_sort = ' order by fatness'; break;
    }
    try {
        $db = getDB();
        $sql_prom = "SELECT price, units, path_picture, name_ice FROM icecream";
        if ($orderSort !== null) {
         $sql = $sql_prom.$sql_sort ;
        }
        else
        {$sql = "SELECT price, units, path_picture, name_ice FROM icecream";}

        $stmt = $db->prepare($sql);
    //    $stmt->bindParam("username", $data->username, PDO::PARAM_STR);
    //    $stmt->bindParam("password", $password, PDO::PARAM_STR);
        $stmt->execute();

        $mainCount = $stmt->rowCount();
        for ($i=0; $i<$mainCount; $i++) {
            $cardData[$i] = $stmt->fetch(PDO::FETCH_OBJ);
        }
        $db = null;
        if ($cardData) {
            return $cardData;

        } else {
            return "echo 'Error.'";
        }
    } catch (PDOException $e) {
        return "echo $e->getMessage()";
    }
}


