<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/InfosDAO.php");

    class InfosInsertAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
            $data = [];
            $data["result"] = InfosDAO::insertNote($_POST["sujet"] , $_POST["description"]);
            return compact("data");
        }
    }