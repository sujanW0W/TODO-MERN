import Header from "./Header"
import MainBody from "./MainBody"
import { useState } from "react"

const Dashboard = () => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    return (
        <>
            <Header token={token} setToken={setToken} />
            <MainBody token={token} setToken={setToken} />
        </>
    )
}

export default Dashboard
