import {useEffect,useState,useRef} from "react";
import Button from "../components/button";
import { useNavigate } from "react-router";
export default function Lobby() {
    const navigate = useNavigate();
    const handlePratique = () => {

    }
    const handleJouer = () => {
        
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
            if (data = "SIGNED_OUT")
                navigate("/");
        })
        fetch("/api/lobby.php",{});

    }
    return <div>
            <Button text="Pratique" onClick={handlePratique}></Button>
            <Button text="Jouer" onClick={handleJouer}></Button>
            <Button text="Quitter" onClick={handleQuitter}></Button>
          </div> 
}
