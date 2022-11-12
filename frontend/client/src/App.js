import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Register from "./components/Register"
import EditTask from "./components/EditTask"

import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
    const [taskID, setTaskID] = useState("")
    const getTaskID = (taskID) => {
        setTaskID(taskID)
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard getTaskID={getTaskID} />}
                    />
                    <Route
                        path="/editTask"
                        element={<EditTask taskID={taskID} />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
