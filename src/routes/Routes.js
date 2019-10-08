import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopHeadlines from "../pages/Newsfeed/TopHeadlines";
import HomePage from "../pages/Homepage/HomePage";
import EverythingTopicPage from "../pages/Newsfeed/EverythingTopicPage";


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
                component={HomePage}
            />

            <Route
                path="/topics/:id"
                exact
                component={EverythingTopicPage}
            />

        </Switch>
    </Router>
);
export default Routes;
