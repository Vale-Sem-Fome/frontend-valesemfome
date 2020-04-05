import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Routes from '../../routes';
import '../../assets/css/style.css';

function App() {
    return (
        <Router>
            <Switch>
                {Routes.routes.map(route => {
                    return (
                        <Route
                            exact
                            key={route.name}
                            path={route.path}
                            component={route.component}
                        />
                    )
                })}
            </Switch>
        </Router>
    );
}

export default App;