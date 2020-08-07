import React from "react";
import  {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import {ROUTES} from "./constants";

export default () => {
    return (
        <BrowserRouter>
            <Sidebar/>

            <div id="content">
                <Switch>
                    {Object.keys(ROUTES).map(route => {
                        const Component = ROUTES[route].component;
                        return (
                            <Route exact path={route}>
                                <Component/>
                            </Route>
                        )
                    })}
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}