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
	const [canMakeAction, setCanMakeAction] = useState(true);
    const navigate = useNavigate();
    const stateTimeout = useRef(null);
    const fetchState = () => {
	fetch("/api/game-state.php")
	.then(response => response.json())
	.then(response => {
		//console.log(response) // <-- État du jeu, ou message comme : LAST_GAME_WON
		stateTimeout.current = setTimeout(fetchState, 2000);
        setGameState(response["result"])
        if (response["result"] == "WAITING" ){
            setGameOngoing(null)
        }
        else if(response["result"] == "LAST_GAME_WON"){
            setGameOngoing(null)
        }
        else if(response["result"] == "LAST_GAME_LOST"){
            setGameOngoing(null)
        }
        else{ 
            renderCards(response["result"])
			console.log(response)
             if (!gameOngoing)
                setGameOngoing(true)
        }
	});
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
		if(canMakeAction){
			setCanMakeAction(false);
			let formData = new FormData();
			formData.append("type",type);
			fetch("/api/gameMove.php", {
			method : "POST",
			body : formData
			})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setCanMakeAction(true);
			})
		}
    }
    const renderCards = (result) => {
        let cards = {};
        cards["hand"] = []; cards["board"] = []; cards["opponent"] = [];
        result["hand"].forEach(card => {
            cards["hand"].push(<Card id={card["id"]} cost={card["cost"]} hp={card["hp"]} atk={card["atk"]} mechanics={card["mechanics"]} 
                uid={card["uid"]} baseHp={card["baseHp"]} onClick={handlePlayHand} ></Card>)
        });
		result["board"].forEach(card => {
			cards["board"].push(<Card id={card["id"]} cost={card["cost"]} hp={card["hp"]} atk={card["atk"]} mechanics={card["mechanics"]} 
                uid={card["uid"]} baseHp={card["baseHp"]} onClick={handleSelectBoard} ></Card>)
		});
		result["opponent"]["board"].forEach(card => {
			cards["opponent"].push(<Card id={card["id"]} cost={card["cost"]} hp={card["hp"]} atk={card["atk"]} mechanics={card["mechanics"]} 
                uid={card["uid"]} baseHp={card["baseHp"]} onClick={handleSelectEnemy} ></Card>)
		});
         setCards(cards);
    }
    const handlePlayHand = (uid) => {
		if(canMakeAction){
			setCanMakeAction(false);
			let formData = new FormData();
			formData.append("type","PLAY");
			formData.append("uid",uid);
			fetch("/api/gameMove.php", {
			method : "POST",
			body : formData
			})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setCanMakeAction(true);
			})
		}
    }
	const handleSelectBoard = () => {

	}
	const handleSelectEnemy = () => {

	}
    return <div className="h-screen w-screen">
            {gameState ? ( <div className="h-full w-full">
                {gameOngoing ? (
				<div className="flex flex-col flex-none h-full w-full">
					<div className="basis-2/12 flex-none">
						{gameState["remainingTurnTime"]}
						<GameValue src={hpOrb} className="w-24 h-24" value={gameState["opponent"]["hp"]} maxValue={gameState["opponent"]["maxHp"]}></GameValue>
						<GameValue src={prayerOrb} className="w-24 h-24" value={gameState["opponent"]["mp"]} maxValue={gameState["opponent"]["maxMp"]}> </GameValue>
					</div>
					{cards ? (<div className="basis-1/4 flex flex-none">{cards["opponent"]} </div>) : (<div className="basis-1/4 flex"></div>)}
					{cards ? (<div className="basis-1/4 flex flex-none">{cards["board"]} </div>) : (<div className="basis-1/4 flex"></div>)}
					<div className="basis-1/3 flex flex-none">
						<div className="basis-1/5 flex-col">
							<GameValue src={hpOrb} className="w-24 h-24" value={gameState["hp"]} maxValue={gameState["maxHp"]}></GameValue>
							<GameValue src={prayerOrb} className="w-24 h-24" value={gameState["mp"]} maxValue={gameState["maxMp"]}> </GameValue>
							<GameValue src={deck} className="w-24 h-30" value={gameState["remainingCardsCount"]}></GameValue>
						</div>
						{cards ? (<div className="basis-15/20 flex flex-wrap">{cards["hand"]} </div>) : (<div className="basis-3/5 flex"></div>)}
						<div className="basis-1/20 flex flex-col">
							<Button text="Special Attack" onClick={handleSpec}></Button>
							<Button text="End Turn" onClick={handleEndTurn}></Button>
						</div>	
                    </div>
				</div> ) 
                : (<div>{gameState}</div>)
				}
                </div>
            ) : (
                <img src={gnomeChild} className="w-24 h-24"></img>
            )}
			</div>
            
         
          
          
}
