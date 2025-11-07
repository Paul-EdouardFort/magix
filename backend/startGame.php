<?php
    require_once("action/StartGameAction.php");
	
	$action = new StartGameAction();
	$data = $action->execute();
	
	echo json_encode($data);