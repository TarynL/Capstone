import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import "./Login.css"
// import { Footer } from "../nav/Footer"
import plasticRecyc from "../../images/plasticRecyc.jpeg"
import LoginLogo from "../../images/LoginLogo.png"


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
        <main className="container login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist. Please register now.</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
           



                {/* <nav className="navbar">
                    <div>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                </nav> */}
                <div className="left ">
                    <form className="form--login" onSubmit={handleLogin}>
                        <div className="login--logo">
                            <img className="LoginLogo" src={LoginLogo} alt="LoginLogo" />
                            <h2>RecyclePedia!</h2>
                        </div>

                        <h4>Please sign in</h4>
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
                            <Link className ="linkRegister"to="/register">Register Now</Link>
                        </section>
                    </form>
                </div>

                <div className="right ">
                    <img className="background-image" src={plasticRecyc} alt="login" />
                </div>



           
            {/* <Footer /> */}
        </main>
    )
}
