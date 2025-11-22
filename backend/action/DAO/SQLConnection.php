<?php
    
    class SQLConnection {
        private static $connection;

        public static function getConnection() {
            if (empty(SQLConnection::$connection)) {
                SQLConnection::$connection = new PDO(DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
                SQLConnection::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                SQLConnection::$connection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            }

            return SQLConnection::$connection;
        }
    }