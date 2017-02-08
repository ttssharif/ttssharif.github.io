import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import App from "./components/App.jsx";
import {Home} from "./components/pages/Home.jsx"
import {Out} from "./components/pages/Out.jsx"

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="out" component={Out} />
        </Route>
        <Route path="*" component={App}/>
    </Router>
    // <App />
    , document.getElementById('app'));