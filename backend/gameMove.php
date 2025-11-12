<?php
    require_once("action/GameMoveAction.php");
	
	$action = new GameMoveAction();
	$data = $action->execute();
	
	echo json_encode($data);