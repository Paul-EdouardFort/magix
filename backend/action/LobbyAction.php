<?php
    require_once("action/CommonAction.php");

    class LobbyAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            $data = [];
            if(array_key_exists("key",$_SESSION))
                $key = $_SESSION["key"];
            else 
                $key = null;

            return compact("key");
        }
    }