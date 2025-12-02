<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/InfosDAO.php");

    class InfosDeleteAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            $data = [];
            $data["id"] = (int)$_POST["id"];
            $data["result"] = InfosDAO::deleteNote($data["id"]);
            return compact("data");
        }
    }