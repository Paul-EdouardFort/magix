<?php
    require_once("action/CommonAction.php");

class LogoutAction extends CommonAction {
     public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

	function executeAction() {
        $data = [];
        if($_SESSION["key"] != null){
            $data["key"] = $_SESSION["key"];
            $result = parent::callAPI("signout", $data);
        }
        else {
            $result = "No server connection to remove";
        }
		session_destroy();
		session_start();

		$_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
		
		return compact("result"); // retourne le résultat de ton appel à l'API (result), pour que ton JS le reçoive
	}
}