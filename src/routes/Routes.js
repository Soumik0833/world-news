import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopHeadlines from "../pages/Newsfeed/TopHeadlines";


const Routes = () => (
        <Router>
            <Switch>
            <Route
                path="/everything"
                exact
                component={TopHeadlines}
            />
            </Switch>
        </Router>
);
export default Routes;
