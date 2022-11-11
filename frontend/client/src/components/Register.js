import { useState } from "react"
import "./styles/login.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {
    const background = {
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${
            process.env.PUBLIC_URL + "backgroundImage.jpg"
        })`,
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
    }

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const userNameInput = (e) => {
        setUserName(e.target.value)
    }
    const passwordInput = (e) => {
        setPassword(e.target.value)
    }

    const navigate = useNavigate()

    const handleRegister = async () => {
        try {
            const { data } = await axios.post(
                "http://localhost:5000/api/v1/users/register",
                { userName, password }
            )
            console.log(data)
            navigate("/login")
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <div className="loginSection" style={background}>
            <div className="loginBody">
                <h1>Register</h1>
                <input
                    type="text"
                    className="inputText"
                    placeholder="Enter Username"
                    name="userName"
                    value={userName}
                    onChange={userNameInput}
                />
                <input
                    type="password"
                    className="inputText"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={passwordInput}
                />
                <button
                    type="submit"
                    id="submitButton"
                    onClick={() => handleRegister()}
                >
                    Register
                </button>

                <div className="askRegister">
                    <p>Already Have an account?</p>
                    <div className="loginDiv">
                        <Link id="loginButton" to="/login">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
