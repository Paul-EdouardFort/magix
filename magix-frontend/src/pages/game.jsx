import {useEffect,useState,useRef} from "react";
import { useNavigate } from "react-router";
import heroData from "../data/heroData"
import GameValue from "../components/gamevalue";
import Button from "../components/button";
import Card from "../components/card";
import Indicator from "../components/indicator";
import gnomeChild from '/img/Gnome_child_chathead.png';
//import hpOrb from '../assets/img/Hitpoints_orb.png';
//import prayerOrb from '../assets/img/Prayer_orb.png';
//import deck from '../assets/img/Teleport_card.png';
export default function Game() {
    const [gameState, setGameState] = useState(null);
    const [gameOngoing, setGameOngoing] = useState(false)
	const [canMakeAction, setCanMakeAction] = useState(true);
	const [selectedCard, setSelectedCard] = useState(null);
	const [opponent, setOpponent] = useState(null);
	const [info, setInfo] = useState(null);
	//const [clientTime , setClientTime] = useState(null)
	//const timeTimeout = useRef(null);
    const navigate = useNavigate();

    const stateTimeout = useRef(null);
    const fetchState = () => {
	fetch("/api/game-state.php")
	.then(response => response.json())
	.then(response => {
		//console.log(response) // <-- État du jeu, ou message comme : LAST_GAME_WON
		if (stateTimeout.current) clearTimeout(stateTimeout.current);
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
            // setClientTime(response["result"]["remainingTurnTime"]);
			console.log(response)
			setOpponent(heroData(response["result"]["opponent"]["heroClass"]));
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
        stateTimeout.current = setTimeout(fetchState, 10);
		//timeTimeout.current = setTimeout(timeUpdate, 1000);

        return () => {
            if (stateTimeout.current) clearTimeout(stateTimeout.current);
			// if (timeTimeout.current) clearTimeout(timeTimeout.current);
        }

    }, [])

	/*const timeUpdate = () => {
		console.log(gameState["remainingTurnTime"])
		setClientTime(clientTime - 1);
		timeTimeout.current = setTimeout(timeUpdate, 1000);
	} */
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
				fetchState();
			})
		}
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
				fetchState();
			})
		}
    }
	const handleSelectBoard = (uid) => {
		if (canMakeAction){
			setSelectedCard(uid);
			console.log(selectedCard);
		}
	}
	const handleSelectEnemy = (uid) => {
		if(canMakeAction && selectedCard){
			setCanMakeAction(false);
			let formData = new FormData();
			formData.append("type","ATTACK");
			formData.append("uid",selectedCard);
			formData.append("targetuid",uid)
			fetch("/api/gameMove.php", {
			method : "POST",
			body : formData
			})
			.then(response => response.json())
			.then(data => {
				setSelectedCard(null);
				console.log(data);
				setCanMakeAction(true);
				fetchState();
			})
		}
	}
    return <div className="h-screen w-screen bg-[url(/img/map.jpg)] bg-cover bg-no-repeat">
            {gameState ? ( <div className="h-full w-full">
                {gameOngoing ? (
				<div className="flex flex-col flex-none h-full w-full">
					
					<div className="basis-2/12 flex-none flex justify-between items-center overflow-hidden">
						<div className="h-[100%] flex flex-none basis-1/4">
							<GameValue src={"/img/Hourglass_Recruitment_Drive_detail.png"} className="h-[100%] aspect-square" value={gameState["remainingTurnTime"]}></GameValue>
						</div>
						<div className="h-[100%] flex flex-none justify-between basis-2/4 " onClick={() => handleSelectEnemy(0)}>
							<GameValue src={"/img/Hitpoints_orb.png"} className="h-[100%] aspect-square" value={gameState["opponent"]["hp"]} maxValue={gameState["opponent"]["maxHp"]}></GameValue>
							<img src={opponent}></img>
							<GameValue src={"/img/Prayer_orb.png"} className="h-[100%] aspect-square" value={gameState["opponent"]["mp"]} maxValue={gameState["opponent"]["maxMp"]}> </GameValue>
						</div>
						<div className="h-[100%] flex-none basis-1/4 flex justify-end items-center ">
							<GameValue src={"/img/back.png"} className="h-[100%] aspect-204/275" value={gameState["opponent"]["remainingCardsCount"]}></GameValue>
							<Indicator value={gameState["yourTurn"]} trueText="Your turn!" falseText="Enemy's turn" className=" bg-stone-500 self-center p-[5vh]"> </Indicator>
						</div>
					</div>
					
					<div className="basis-1/4 flex flex-none justify-center gap-2">{gameState["opponent"]["board"].map(card => {
          					 return <Card id={card["id"]} cost={card["cost"]} hp={card["hp"]} atk={card["atk"]} mechanics={card["mechanics"]} 
                				uid={card["uid"]} baseHp={card["baseHp"]} onClick={handleSelectEnemy} state={card["state"]} turn={!gameState["yourTurn"]}  ></Card>})}
					</div>
					<div className="basis-1/4 flex flex-none justify-center gap-2">{gameState["board"].map(card => {
          					 return <Card id={card["id"]} cost={card["cost"]} hp={card["hp"]} atk={card["atk"]} mechanics={card["mechanics"]} 
                				uid={card["uid"]} baseHp={card["baseHp"]} onClick={handleSelectBoard} state={card["state"]} isSelected={card["uid"] == selectedCard} turn={gameState["yourTurn"]} ></Card>})}
					</div>
					<div className="basis-1/3 flex">
						<div className="flex-col h-[100%] w-fit">
							<GameValue src={"/img/Hitpoints_orb.png"} className="h-[50%] aspect-square" value={gameState["hp"]} maxValue={gameState["maxHp"]}></GameValue>
							<GameValue src={"/img/Prayer_orb.png"} className="h-[50%] aspect-square" value={gameState["mp"]} maxValue={gameState["maxMp"]}> </GameValue>
						</div>
						<div className="h-[100%]">
							<GameValue src={"/img/back.png"} className="h-[100%] aspect-204/275" value={gameState["remainingCardsCount"]}></GameValue>
						</div>
						<div className="basis-15/20 flex justify-center items-center grow gap-2 overflow-x-auto">{gameState["hand"].map(card => {
          					 return <Card id={card["id"]} cost={card["cost"]} hp={card["hp"]} atk={card["atk"]} mechanics={card["mechanics"]} 
                				uid={card["uid"]} baseHp={card["baseHp"]} onClick={handlePlayHand} ></Card>})}
						</div>
						<div className="basis-1/20 flex flex-col">
							
							<Button text="" onClick={handleSpec} className=" h-[50%] bg-[url(/img/Special_attack_orb.png)] bg-contain bg-no-repeat bg-center"></Button>
							<Indicator value={!gameState["heroPowerAlreadyUsed"]} trueText="Spec Ready!" falseText="Regenerating..." className=" h-[10%]"></Indicator>
							<Button text="" onClick={handleEndTurn} className=" h-[40%] bg-[url(/img/play.png)] bg-contain bg-no-repeat bg-center"></Button>
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
