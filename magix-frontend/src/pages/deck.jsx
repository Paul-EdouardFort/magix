import {useEffect,useState,useRef} from "react";
import Button from "../components/button";
import { useNavigate } from "react-router";
export default function Deck() {
    const navigate = useNavigate();
    const [deckSrc, setDeckSrc] = useState(null);
    const [key, setKey] = useState(null);

    useEffect(() => {
        fetch("/api/lobby.php", {
        })
        .then(response => response.json())
        .then(data => {
            if (!data["authorized"])
                navigate("/");
            setKey(data["key"]);
            setDeckSrc('https://magix.apps-de-cours.com/server/deck/' + data["key"]);
            console.log(data);
        })
    }, [])
    
    const handleBack = () => {
        navigate("/lobby")
    }
    
    return <div className="w-screen h-screen bg-black flex ">  
        <Button text="Retour" onClick={handleBack} className=" h-[20%] w-[10%] bg-stone-500"></Button>
        <iframe style={{ width: "100vw", height: "100vh"}} src={deckSrc}></iframe>
    </div> 
}
