import React from "react"
import store from "./redux/reduxStore";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

export const Root = () => {
    return (
    // basename={process.env.PUBLIC_URL}
        <BrowserRouter>
            <Provider store={store} >
                <App />
            </Provider>
        </BrowserRouter>
    )
}

// TODO прочитать статью про UseEffect