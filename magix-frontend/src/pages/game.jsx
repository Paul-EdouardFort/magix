import {useEffect,useState,useRef} from "react";
import Button from "../components/button";
import { useNavigate } from "react-router";
export default function Game() {
    const navigate = useNavigate();
    const stateTimeout = useRef(null);
    const fetchState = () => {
	fetch("/api/game-state.php")
	.then(response => response.json())
	.then(response => {
		console.log(response) // <-- État du jeu, ou message comme : LAST_GAME_WON
		stateTimeout.current = setTimeout(fetchState, 2000);
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
    
    return <div>
            GAME
          </div> 
}
