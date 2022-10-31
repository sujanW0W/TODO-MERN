import './styles/header.css'
import todoLogo from '../todoLogo.svg'

const Header = () => {
    return(
        <>
            <section className="headerHead">
                <div className="leftHead">
                    <img src={todoLogo} alt="Logo" className="logo"/>
                    <p id="logoName">TODO</p>
                </div>
                <div>
                    <button id="loginButton">Login</button>
                </div>
            </section>
        </>
    )
}

export default Header