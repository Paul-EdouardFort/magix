import {useEffect,useState,useRef} from "react";
import { useNavigate } from "react-router";
import GameValue from "../components/gamevalue";
import Button from "../components/button";
import Card from "../components/card";
import gnomeChild from '../assets/img/Gnome_child_chathead.png';
import hpOrb from '../assets/img/Hitpoints_orb.png';
import prayerOrb from '../assets/img/Prayer_orb.png';
import deck from '../assets/img/Teleport_card.png';
export default function Game() {
    const [gameState, setGameState] = useState(null);
    const [gameOngoing, setGameOngoing] = useState(false)
    const [cards, setCards] = useState(null);
    const navigate = useNavigate();
    const stateTimeout = useRef(null);
    const fetchState = () => {
	fetch("/api/game-state.php")
	.then(response => response.json())
	.then(response => {
		console.log(response) // <-- État du jeu, ou message comme : LAST_GAME_WON
		stateTimeout.current = setTimeout(fetchState, 2000);
        setGameState(response["result"])
        if (response["result"] == "WAITING" ){
            setGameOngoing(false)
        }
        else if(response["result"] == "LAST_GAME_WON"){
            setGameOngoing(false)
        }
        else if(response["result"] == "LAST_GAME_LOST"){
            setGameOngoing(false)
        }
        else{ 
            renderCards(response["result"])}
             if (!gameOngoing)
                setGameOngoing(true)
            }
    );
}

    useEffect(() => {
        fetch("/api/game.php", {
        })
        .then(response => response.json())
        .then(data => {
            if (!data["authorized"])
                navigate("/");
        })
        stateTimeout.current = setTimeout(fetchState, 1000);

        return () => {
            if (stateTimeout.current) clearTimeout(stateTimeout.current);
        }

    }, [])

    const handleSpec = () => {
        simpleAction("HERO_POWER");
    }
    const handleEndTurn = () => {
        simpleAction("END_TURN");
    }
    const handleSurrender = () => {
        simpleAction("SURRENDER");
    }
    const simpleAction = (type) => {
        let formData = new FormData();
        formData.append("type",type);
        fetch("/api/gameMove.php", {
        method : "POST",
        body : formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }
    const renderCards = (result) => {
        let cards = {};
        cards["hand"] = []; cards["board"] = []; cards["enemy"] = [];
        result["hand"].forEach(card => {
            cards["hand"].push(<Card id={card["id"]} cost={card["cost"]} hp={card["hp"]} atk={card["atk"]} mechanics={card["mechanics"]} 
                uid={card["uid"]} baseHp={card["baseHp"]} onClick={handlePlayHand} ></Card>)
        });
         setCards(cards);
    }
    const handlePlayHand = () => {

    }
    /*
    {
	"result": {
		"stateCounter": 1,
		"remainingTurnTime": 50,
		"heroPowerAlreadyUsed": false,
		"yourTurn": false,
		"hp": 30,
		"maxHp": 30,
		"heroClass": "Priest",
		"talent": "SpawnMinion",
		"mp": 0,
		"maxMp": 1,
		"hand": [
			{
				"id": 79,
				"cost": 1,
				"hp": 4,
				"atk": 0,
				"mechanics": [
					"Taunt"
				],
				"uid": 2,
				"baseHP": 4
			},
			{
				"id": 4,
				"cost": 1,
				"hp": 1,
				"atk": 1,
				"mechanics": [
					"Charge"
				],
				"uid": 3,
				"baseHP": 1
			},
			{
				"id": 5,
				"cost": 2,
				"hp": 3,
				"atk": 2,
				"mechanics": [],
				"uid": 4,
				"baseHP": 3
			},
			{
				"id": 6,
				"cost": 2,
				"hp": 1,
				"atk": 1,
				"mechanics": [
					"Battlecry : Spawn a minion"
				],
				"uid": 5,
				"baseHP": 1
			},
			{
				"id": 1,
				"cost": 0,
				"hp": 1,
				"atk": 0,
				"mechanics": [
					"Battlecry : Get 1 crystal (this turn only)"
				],
				"uid": 64,
				"baseHP": 1
			}
		],
		"board": [
			{
				"id": 82,
				"cost": 2,
				"hp": 2,
				"atk": 0,
				"mechanics": [
					"Stealth",
					"At the start of your turn, gain +1/+1"
				],
				"uid": 62,
				"baseHP": 2,
				"state": "IDLE"
			},
			{
				"id": 1,
				"cost": 0,
				"hp": 2,
				"atk": 1,
				"mechanics": [
					"Charge",
					"Taunt"
				],
				"uid": 65,
				"baseHP": 2,
				"state": "IDLE"
			}
		],
		"remainingCardsCount": 26,
		"welcomeText": "Undyneissocool42",
		"opponent": {
			"username": "Hybrid-AI",
			"heroClass": "Warlock",
			"talent": "ExtraCrystal",
			"trophyCount": 0,
			"winCount": 0,
			"lossCount": 0,
			"hp": 30,
			"maxHp": 30,
			"mp": 1,
			"maxMp": 1,
			"board": [
				{
					"id": 82,
					"cost": 2,
					"hp": 3,
					"atk": 1,
					"mechanics": [
						"Stealth",
						"At the start of your turn, gain +1/+1"
					],
					"uid": 63,
					"baseHP": 3,
					"state": "IDLE"
				}
			],
			"handSize": 4,
			"remainingCardsCount": 26,
			"welcomeText": "Agility is the key"
		},
		"latestActions": []
	}
}
    */
    return <div>
            GAME
            {gameState ? ( <div>
                {gameOngoing ? (<div>
                    <div>{gameState["remainingTurnTime"]}</div>
                    <GameValue src={hpOrb} className="" value={gameState["hp"]} maxValue={gameState["maxHp"]}></GameValue>
                    <GameValue src={prayerOrb} className="" value={gameState["mp"]}> </GameValue>
                    <GameValue src={deck} className="" value={gameState["remainingCardsCount"]}></GameValue>
                    <Button text="Special Attack" onClick={handleSpec}></Button>
                    <Button text="End Turn" onClick={handleEndTurn}></Button>
                    {cards["hand"]} </div>) 
                : (<div></div>)}
                </div>
            ) : (
                <img src={gnomeChild} className="w-24 h-24"></img>
            )}
            
            
         
          
          </div> 
}
