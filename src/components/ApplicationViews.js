import React from "react"
import { Route } from "react-router-dom"
import { PrivateList } from "./recyclables/PrivateList"
import {Home} from "./Home"

export const ApplicationViews = () => {
    return(
        <>
        
        <Route exact path="/">
            <Home/>
        </Route>

        <Route exact path="/yourList">
        <PrivateList />
        </Route>

        <Route exact path="/collections">
        
        </Route>
        </>
    )
}