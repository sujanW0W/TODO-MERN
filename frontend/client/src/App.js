import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Register from "./components/Register"

import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
