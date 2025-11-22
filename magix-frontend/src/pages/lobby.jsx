import {useEffect,useState,useRef} from "react";
import Button from "../components/button";
import { useNavigate } from "react-router";
export default function Lobby() {
    const [chatSrc, setChatSrc] = useState(null);
    const [deckSrc, setDeckSrc] = useState(null);
    const [key, setKey] = useState(null);
    const [username,setUsername] = useState(null);
    useEffect(() => {
        fetch("/api/lobby.php", {
        })
        .then(response => response.json())
        .then(data => {
            if (!data["authorized"])
                navigate("/");
            setKey(data["key"]);
            setChatSrc('https://magix.apps-de-cours.com/server/chat/' + data["key"]);
            setDeckSrc('https://magix.apps-de-cours.com/server/deck/' + data["key"]);
            console.log(data);
            setUsername(localStorage.getItem("username"));
        })
    }, [])
    const navigate = useNavigate();
    const handlePratique = () => {
        startGame("TRAINING");
    }
    const handleJouer = () => {
        startGame("PVP");
    }
    const startGame = (type) => {
        let formData = new FormData()
        formData.append("type", type);
        formData.append("key", key);
        fetch("api/startGame.php", {
            method : "POST",
            body : formData
        })
        .then(response => response.json())
        .then(data => {
            if (data["result"] == "JOINED_PVP" || data["result"] == "JOINED_TRAINING")
                navigate("/game");
        })
    }
    const handleQuitter = () => {
        let formData = new FormData()
        formData.append("logout", true);
        fetch("/api/logout.php", {
            method : "POST",
            body : formData
        })
        .then(response => response.json())
        .then(data => {
            if (data == "SIGNED_OUT")
                navigate("/");
        })
        
    }
    return <div>
            Bonjour {username}!
            <Button text="Pratique" onClick={handlePratique}></Button>
            <Button text="Jouer" onClick={handleJouer}></Button>
            <Button text="Quitter" onClick={handleQuitter}></Button>
            
            
            
            {chatSrc && deckSrc ? 
            (<div><iframe width={700} height={240} 
            src={chatSrc} >
                </iframe>
                <iframe width={700} height={240} src={deckSrc}>
                </iframe>
                </div>
                ) : (
                    <div>Connection lost... Please wait, attempting to reestablish</div>
                )}
            {console.log(chatSrc)}

          </div> 
}
