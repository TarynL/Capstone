import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Footer } from "./nav/Footer"
import "./RecyclePedia.css"


// component that runs applicationViews, Navbar, Footer if user is loggedIn
export const RecyclePedia = () => (
    <>
    <Route
      render={() => {
        if (sessionStorage.getItem("recyclePedia_user")) {
          return (
            <>
              <NavBar />
              <div className="applicationView">
              <ApplicationViews />
              </div>
              <div>
              <Footer />
              </div>
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)

