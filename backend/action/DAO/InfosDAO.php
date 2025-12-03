<?php
    require_once("action/DAO/SQLConnection.php");

    class InfosDAO {

        public static function getNotesStatus() {
            $connection = SQLConnection::getConnection();

            $statement = $connection->prepare("SELECT * FROM notes ORDER BY id");
            $statement->execute();
            
            return  $statement->fetchAll();
        }

        public static function insertNote($sujet,$description) {
            $connection = SQLConnection::getConnection();

            $statement = $connection->prepare("INSERT INTO notes(sujet,description,date) VALUES (:sujet, :description, CURRENT_DATE)");
            $statement->bindValue(':sujet', $sujet, PDO::PARAM_STR);
            $statement->bindValue(':description', $description, PDO::PARAM_STR);
            
            return $statement->execute();
        }

        public static function deleteNote($id) {
            $connection = SQLConnection::getConnection();

            $statement = $connection->prepare("DELETE FROM notes WHERE id = :id");
            $statement->bindValue(':id', $id, PDO::PARAM_INT);

            return $statement->execute();
        }

        public static function updateNote( $sujet, $description,$id) {
            $connection = SQLConnection::getConnection();

            $statement = $connection->prepare("UPDATE notes SET sujet = :sujet, description = :description WHERE id = :id");
            $statement->bindValue(':id', $id, PDO::PARAM_INT);
            $statement->bindValue(':sujet', $sujet, PDO::PARAM_STR);
            $statement->bindValue(':description', $description, PDO::PARAM_STR);
            
            return $statement->execute();
        }
    }