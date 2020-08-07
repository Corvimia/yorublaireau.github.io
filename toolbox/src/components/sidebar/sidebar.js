import React from "react";
import {Link} from "react-router-dom";

import "./sidebar.scss";
import {ROUTES} from "../../constants";

export default () => (
    <nav id="sidebar" className="bg-light">
        <div className="sidebar-header">
            <h4>Yoru's Toolbox</h4>
        </div>

        <ul className="list-unstyled components">
            {Object.keys(ROUTES).map(route => (
                <li className="nav-item">
                    <Link to={route} className="nav-link">{ROUTES[route].title}</Link>
                </li>
            ))}
        </ul>

    </nav>);