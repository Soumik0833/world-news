import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopHeadlines from "../pages/Newsfeed/TopHeadlines";
import NavBar from "../components/NavBar/NavBar"


const Routes = () => (
    <Router>
        <Switch>
            <Route
                path="/top-headlines/:id"
                exact
                component={TopHeadlines}
            />

            <Route
                path="/"
                exact
                component={NavBar}
            />

        </Switch>
    </Router>
);
export default Routes;
