import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './css/global.css'
import Index from './pages/index'
import Lobby from './pages/lobby'
import Game from './pages/game'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/game" element={<Game />} />
        </Routes>
    </BrowserRouter>
)
