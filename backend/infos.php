<?php
    require_once("action/InfosAction.php");
	
	$action = new InfosAction();
	$data = $action->execute();
	
	echo json_encode($data);