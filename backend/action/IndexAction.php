<?php
    require_once("action/CommonAction.php");

    class IndexAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = [];
            $data["username"] = "Justice Kazzy";
            $data["password"] = "Undyneissocool42";

            $result = parent::callAPI("signin", $data);
			if ($result == "INVALID_USERNAME_PASSWORD") {
	            $key = 'Ya focking daft?';  // err
            }
            else {
                // Pour voir les informations retournées : var_dump($result);exit;
                $key = $result->key;
            }

            return compact("key");
        }
    }