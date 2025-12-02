<?php
    require_once("action/InfosDeleteAction.php");
	
	$action = new InfosDeleteAction();
	$data = $action->execute();
	
	echo json_encode($data);