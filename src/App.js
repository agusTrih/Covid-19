import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import CovidIndo from "./Pages/CovidIndo/CovidIndo";

const store = createStore(reducers, applyMiddleware(thunk));
function App() {
    return (
        <Provider store={store}>
            <CovidIndo />
        </Provider>
    );
}

export default App;
