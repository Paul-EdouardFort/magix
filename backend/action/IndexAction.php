<?php
    require_once("action/CommonAction.php");

    class IndexAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = [];
            $data["username"] = $_POST["username"];
            $data["password"] = $_POST["password"];

            $result = parent::callAPI("signin", $data);
            $error = FALSE;
			if ($result == "INVALID_USERNAME_PASSWORD") {
	            $key = "Ya focking daft?";  // err
                $error = TRUE;
            }
            else {
                // Pour voir les informations retournées : var_dump($result);exit;
                $key = $result->key;
                $_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
            }

            return compact("key","error");
        }
    }