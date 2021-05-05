import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import LoginLogo from "../../images/LoginLogo.png"
import plasticRecyc from "../../images/plasticRecyc.jpeg"
import "./Login.css"
// import { Footer } from "../nav/Footer"


export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }


    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                sessionStorage.setItem("recyclePedia_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }


    return (
        <main style={{ textAlign: "center" }} className="container login">

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            {/* <nav className="navbar">
                    <div>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                </nav> */}
            <div className="left">
                <form className="form--login" onSubmit={handleRegister}>
                    <div className="login--logo">
                        <img className="LoginLogo" src={LoginLogo} alt="LoginLogo" />
                        <h2>RecyclePedia!</h2>
                    </div>
                    <fieldset>
                        <label htmlFor="firstName"> First Name: </label>
                        <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lastName"> Last Name: </label>
                        <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email: </label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Email" required value={registerUser.email} onChange={handleInputChange} />
                    </fieldset>
                    <div className="registerButtons">
                    <fieldset className="submitButtonSection">
                        <button type="submit" className="registerButton"> Sign in </button>
                    </fieldset>
                    <fieldset className="cancelButtonSection">
                        <button type="cancel" className="registerButton" onClick={() => history.push(`/login`)} > Cancel </button>
                    </fieldset>
                    </div>

                </form>
            </div>

            <div className="right ">
                <img className="background-image" src={plasticRecyc} alt="login" />
            </div>
            {/* <Footer /> */}
        </main>
    )
}
