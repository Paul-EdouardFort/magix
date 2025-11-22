<?php
    require_once("action/DAO/SQLConnection.php");

    class SmartLightDAO {

        public static function getLightsStatus() {
            $connection = SQLConnection::getConnection();

           // $statement = $connection->prepare("SELECT * FROM lights");
           // $statement->execute();
            
            return $connection; // $statement->fetchAll();
        }

    }