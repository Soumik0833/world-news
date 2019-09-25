import React from 'react';
import {Provider} from "react-redux";
import Routes from "./routes/Routes";
import ReduxToastr from "react-redux-toastr";

import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
                    <Routes/>
                    <ReduxToastr
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                        closeOnToastrClick
                    />
        </Provider>
    );
}

export default App;
