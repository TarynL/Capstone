import React from "react"
import { Route } from "react-router-dom"
import { PrivateList } from "./recyclables/PrivateList"
import { PrivateForm } from "./recyclables/PrivateForm"
import { PublicList } from "./collections/PublicList"
import { Home } from "./Home"
import { PrivateEdit } from "./recyclables/PrivateEdit"

export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/yourList">
                <PrivateList />
            </Route>
            <Route path="/yourList/create">
                <PrivateForm />
            </Route>
            <Route path="/yourList/:recyclableId(\d+)/edit">
                <PrivateEdit />
            </Route>

            <Route exact path="/collections">
                <PublicList />
            </Route>
        </>
    )
}