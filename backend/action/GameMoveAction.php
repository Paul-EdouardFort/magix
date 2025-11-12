<?php
    require_once("action/CommonAction.php");

    class GameMoveAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            $data["key"] = $_SESSION["key"];
            $data["type"] = $_POST["type"];
            if(array_key_exists("uid",$_POST))
                $data["uid"] = $_POST["uid"];
            if(array_key_exists("targetuid",$_POST))
                $data["targetuid"] = $_POST["targetuid"];

            $result = parent::callAPI("games/action", $data);
                 
            return compact("result");
        }
    }