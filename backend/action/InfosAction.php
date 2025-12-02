<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/InfosDAO.php");

    class InfosAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            $data = [];
            if(array_key_exists("key",$_SESSION))
                $key = $_SESSION["key"];
            else $key = null;
            $data["key"] = $key;
            $data["notes"] = InfosDAO::getNotesStatus();
            return compact("data");
        }
    }