<?php
    require_once("action/IndexAction.php");
	
	$action = new IndexAction();
	$data = $action->execute();
	
	echo json_encode($data["key"],$data["error"]);