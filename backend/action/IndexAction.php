<?php
    require_once("action/CommonAction.php");

    class IndexAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = [];
            $key = "ERROR";
            $error = TRUE;
            if ($_POST["username"] && $_POST["password"]){
                $data["username"] = $_POST["username"];
                $data["password"] = $_POST["password"];
                $result = parent::callAPI("signin", $data);
                $error = FALSE;
                if ($result == "INVALID_USERNAME_PASSWORD") {
                    $key = "Ya focking daft?";  // err
                    $error = TRUE;
                }
                else {
                    $key = $result->key;
                    $_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
                    $_SESSION["key"] = $key;
                }
            }
            return compact("key","error");
        }
    }