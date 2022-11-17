import "./styles/header.css"
import todoLogo from "../todoLogo.svg"
import { Link } from "react-router-dom"

import Avatar from "@mui/material/Avatar"
import jwt from "jwt-decode"

const Header = ({ token, setToken }) => {
    const decoded = token && jwt(token)

    const handleLogout = () => {
        localStorage.removeItem("token")
        setToken(localStorage.getItem("token"))
    }

    return (
        <>
            <section className="headerHead">
                <Link to="/" className="leftHead">
                    <img src={todoLogo} alt="Logo" className="logo" />
                    {/* <p id="logoName">TODO</p> */}
                </Link>

                {token ? (
                    <div className="loggedInDiv">
                        <Avatar>{decoded.userName[0].toUpperCase()}</Avatar>
                        <p>{decoded.userName} |</p>
                        <button id="submitButton" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="loginDiv">
                        <Link to="/login" id="loginButton">
                            Login
                        </Link>
                    </div>
                )}
            </section>
        </>
    )
}

export default Header
