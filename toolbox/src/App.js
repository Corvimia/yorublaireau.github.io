import React from "react";
import  {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import {ROUTES} from "./constants";

export default () => {
    return (
        <HashRouter>
            <Sidebar/>

            <div id="content">
                <Switch>
                    {Object.keys(ROUTES).map(route => {
                        const Component = ROUTES[route].component;
                        return (
                            <Route exact path={route} key={route}>
                                <Component/>
                            </Route>
                        )
                    })}
                    <Redirect to="/" />
                </Switch>
            </div>
        </HashRouter>
    );
}