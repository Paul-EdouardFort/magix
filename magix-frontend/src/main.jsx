import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './css/global.css'
import Index from './pages/index'
import Lobby from './pages/lobby'
import Game from './pages/game'
import Deck from './pages/deck'
import Infos from './pages/infos';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/game" element={<Game />} />
            <Route path="/deck" element={<Deck />} />
            <Route path="/infos" element={<Infos />} />
        </Routes>
    </BrowserRouter>
)
