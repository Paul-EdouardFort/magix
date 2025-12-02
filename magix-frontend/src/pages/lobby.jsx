import {useEffect,useState,useRef} from "react";
import Button from "../components/button";
import { useNavigate } from "react-router";
export default function Lobby() {
    const [chatSrc, setChatSrc] = useState(null);
    const [deckSrc, setDeckSrc] = useState(null);
    const [key, setKey] = useState(null);
    const [username,setUsername] = useState(null);
    const chatRef = useRef(null);
    let viewHeight = null;
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
            setUsername(localStorage.getItem("username"));
        })
        //applyStyles(window.innerHeight / 2 + "vh")
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
    const handleDeck = () => {
        navigate("/deck");
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


    const applyStyles = (newHeight = "200px") => {
        //console.log(newHeight)
        let styles = {
            fontColor : "white",
            backgroundColor : "black",
            fontGoogleName : "Roboto",
            fontSize : "20px",
            hideIcons : true,
            inputBackgroundColor : "red",
            inputFontColor : "yellow",
            height : "350px", //newHeight , //y'a probablement des meilleures façons
            padding: "",
            memberListFontColor : "#ff00dd",
            borderColor : "blue",
            memberListBackgroundColor : "white",
            hideScrollBar: "true", // pour cacher le scroll bar
        }
        
        setTimeout(() => {
            chatRef.current.contentWindow.postMessage(JSON.stringify(styles), "*");	
    }, 100);
    //   <iframe width={700} height={240} src={deckSrc}>
              //  </iframe>

    }
    return <div className="flex h-screen w-screen bg-black justify-between">
            <div className="flex flex-col justify-around items-center w-[25%]">
                <p className="text-yellow-500">Bonjour {username}!</p>
                <Button text="Pratique" onClick={handlePratique} className=" h-[20%] w-[75%] bg-stone-500"></Button>
                <Button text="Jouer" onClick={handleJouer} className=" h-[20%] w-[75%] bg-stone-500"></Button>
                <Button text="Change Deck" onClick={handleDeck} className=" h-[20%] w-[75%] bg-stone-500"></Button>
                <Button text="Quitter" onClick={handleQuitter} className=" h-[20%] w-[75%] bg-stone-500"></Button>
            </div>
            <div className="flex flex-col justify-between items-center w-[75%]">
                <div className="w-full h-[50%] flex justify-center">
                    <img src="/img/Old_School_RuneScape_logo.png" className="aspect-677/313"></img>
                </div>
                {chatSrc && deckSrc ? 
                (<div className="w-full h-[50%] overflow-hidden bg-white"><iframe width={"100%"} height={"100%"} 
                src={chatSrc} onLoad={applyStyles} ref={chatRef}  >
                    </iframe>
                
                    </div>
                    ) : (
                        <div>Connection lost... Please wait, attempting to reestablish</div>
                    )}
            </div>
            
            
          </div> 
}
