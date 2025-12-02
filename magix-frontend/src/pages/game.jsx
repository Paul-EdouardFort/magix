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
	const [warning, setWarning] = useState(null);
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
       updateGame(response);
	});
}
const updateGame = (response) => {
	setWarning(null);
	if (typeof response["result"] !== "object") {
		if (response["result"] == "WAITING" ){
			setGameOngoing(null);
			setInfo("EN ATTENTE D'UN ADVERSAIRE....");
		}
		else if(response["result"] == "LAST_GAME_WON"){
			setGameOngoing(null);
			setInfo("VOUS AVEZ GAGNÉ!!!!");
		}
		else if(response["result"] == "LAST_GAME_LOST"){
			setGameOngoing(null);
			setInfo("VOUS AVEZ PERDU....");
		}
		else {
			if (!gameOngoing)
				setGameOngoing(true);
			setWarning(response["result"]);
		}	
	}
	else {
		setGameState(response["result"])
		
		setOpponent(heroData(response["result"]["opponent"]["heroClass"]));
			if (!gameOngoing)
				setGameOngoing(true);
	}

		
    
}

    useEffect(() => {
        fetch("/api/game.php", {
        })
        .then(response => response.json())
        .then(data => {
            if (!data["authorized"])
                navigate("/");
			else {
				if (!stateTimeout.current) 
					stateTimeout.current = setTimeout(fetchState, 10);
			}
        })
        
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
		navigate("/lobby")
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
				updateGame(data);
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
				updateGame(data);
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
				updateGame(data);
			})
		}
	}
	const handleQuit = () => {
		navigate("/lobby")
	}
    return <div className="h-screen w-screen bg-[url(/img/map.jpg)] bg-cover bg-no-repeat">
            {gameState ? ( <div className="h-full w-full">
				{warning ? (<div className="absolute left-0 right-0 mx-auto my-[35vh] w-fit bg-red-900 p-[10vh] border rounded-xl z-45 ">{warning}</div>) : (<div className="absolute"></div>)}
                {gameOngoing ? (
					
				<div className="flex flex-col flex-none h-full w-full">
					
					<div className="basis-2/12 flex-none flex justify-between items-center overflow-hidden">
						<div className="flex flex-col w-[5vw] basis-1/16 justify-around h-[100%]">
							<Button text="Resign" onClick={handleSurrender} className=" h-[50%] w-[100%] bg-stone-700 text-yellow-500 rounded-[5px] border"></Button>
							<Button text="Chat" onClick={handleSurrender} className=" h-[50%] w-[100%] bg-stone-700 text-yellow-500 rounded-[5px] border"></Button>
						</div>
						<div className="h-[100%] flex flex-none basis-3/16">
							<GameValue src={"/img/Hourglass_Recruitment_Drive_detail.png"} className="h-[100%] aspect-square" value={gameState["remainingTurnTime"]}></GameValue>
						</div>
						<div className="h-[100%] flex flex-none justify-between basis-2/4 " onClick={() => handleSelectEnemy(0)}>
							<GameValue src={"/img/Hitpoints_orb.png"} className="h-[100%] aspect-square" value={gameState["opponent"]["hp"]} maxValue={gameState["opponent"]["maxHp"]}></GameValue>
							<img src={opponent}></img>
							<GameValue src={"/img/Prayer_orb.png"} className="h-[100%] aspect-square" value={gameState["opponent"]["mp"]} maxValue={gameState["opponent"]["maxMp"]}> </GameValue>
						</div>
						<div className="h-[100%] flex-none basis-1/4 flex justify-end items-center ">
							<GameValue src={"/img/back.png"} className="h-[100%] aspect-204/275" value={gameState["opponent"]["remainingCardsCount"]}></GameValue>
							<Indicator value={gameState["yourTurn"]} trueText="YOUR TURN" falseText="ENEMY TURN" className=" bg-stone-900 self-center p-[5vh] rounded-[50px] text-yellow-500 text-[20px] p-[2vh] border border-white"> </Indicator>
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
							<Indicator value={!gameState["heroPowerAlreadyUsed"]} trueText="Ready!" falseText="Regenerating..." className=" h-[10%] overflow-hidden text-center"></Indicator>
							<Button text="" onClick={handleEndTurn} className=" h-[40%] bg-[url(/img/play.png)] bg-contain bg-no-repeat bg-center"></Button>
						</div>
						
                    </div>
				</div> ) 
                : (<div className="flex justify-center items-center h-full"><Button text="Retour" onClick={handleQuit} className=" h-[20%] w-[50%] bg-stone-700 m-[7vh] text-[5vh] text-yellow-500 rounded-[50px]"></Button></div>)
				}
                </div>
            ) : (
				<div className="flex flex-col justify-center items-center text-center w-full h-full">
					<img src={gnomeChild}></img>
                	<p className="bg-stone-500 p-[10vh] text-[10vh] font-bold rounded-[50px]">{info}</p>
					<Button text="Retour" onClick={handleQuit} className=" h-[20%] w-[50%] bg-stone-700 m-[7vh] text-[5vh] text-yellow-500 rounded-[50px]"></Button>
				</div>
            )}
			</div>
            
         
          
          
}
