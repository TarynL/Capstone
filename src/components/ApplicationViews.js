import React from "react"
import { Route } from "react-router-dom"
import { PrivateCard } from "./recyclables/PrivateCard"
import {Home} from "./Home"

export const ApplicationViews = () => {
    return(
        <>
        
        <Route exact path="/">
            <Home/>
        </Route>

        <Route exact path="/yourList">
        <PrivateCard />
        </Route>

        <Route exact path="/collections">
        
        </Route>
        </>
    )
}