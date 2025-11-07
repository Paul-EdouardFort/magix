<?php
    require_once("action/CommonAction.php");

    class StartGameAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            $data["key"] = $_POST["key"];
            $data["type"] = $_POST["type"];

            $result = parent::callAPI("games/auto-match", $data);
                 
            return compact("result");

        }
    }