import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import "./Login.css"
import { Footer } from "../nav/Footer"
import logo from "../../images/logo.png"


export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
        
                    sessionStorage.setItem("recyclePedia_user", exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist. Please register now.</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>

            <section>
                <nav className="navbar">
                    <div>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                </nav>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Welcome to RecyclePedia!</h1>
                    <h3>Please sign in</h3>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email  </label>
                        <div className="emailInput">
                            <input type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email address"
                                required autoFocus
                                value={loginUser.email}
                                onChange={handleInputChange} />
                            
                        </div>
                        <button type="submit" className="loginButton" >
                                Sign-in
                        </button>
                      
                    </fieldset>
                    <section className="link--register">
                        <Link to="/register">Register Now</Link>
                    </section>
                </form>
                
            </section>

            <Footer />
        </main>
    )
}
