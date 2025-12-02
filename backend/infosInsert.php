<?php
    require_once("action/InfosInsertAction.php");
	
	$action = new InfosInsertAction();
	$data = $action->execute();
	
	echo json_encode($data);