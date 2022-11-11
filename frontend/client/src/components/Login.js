import "./styles/login.css"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const userNameInput = (e) => {
        setUserName(e.target.value)
    }

    const passwordInput = (e) => {
        setPassword(e.target.value)
    }

    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post(
                "http://localhost:5000/api/v1/users/login",
                { userName, password }
            )
            localStorage.setItem("token", data.token)
            navigate("/")
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const background = {
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${
            process.env.PUBLIC_URL + "backgroundImage.jpg"
        })`,
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
    }

    return (
        <div className="loginSection" style={background}>
            <div className="loginBody">
                <h1>Login</h1>
                <input
                    type="text"
                    className="inputText"
                    placeholder="Username"
                    name="userName"
                    value={userName}
                    onChange={userNameInput}
                />
                <input
                    type="password"
                    className="inputText"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={passwordInput}
                />
                <button
                    type="submit"
                    id="submitButton"
                    onClick={() => handleSubmit()}
                >
                    Submit
                </button>

                <div className="askRegister">
                    <p>Don't Have an account?</p>
                    <div className="loginDiv">
                        <Link id="loginButton" to="/register">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
