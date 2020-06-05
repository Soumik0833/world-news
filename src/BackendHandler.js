import store from './redux/store/index';
import {toastr} from "react-redux-toastr";
import {
    backendRequestFailed,
    backendRequestSent,
    backendRequestSucceeded
} from "./redux/actions/fetchFromBackendActions";
require('dotenv').config();


class BackendHandler {
    static fetch(path, query, init = {}) {
        store.dispatch(backendRequestSent());

        const api_key = process.env.REACT_APP_API_KEY;
        const path_with_api_key = `${path}?${query}`;

        fetch(path_with_api_key, {
            ...init,
            method: "GET",
            headers: {
                authorization: api_key
            }
        }).then(BackendHandler._fetchHandler, BackendHandler._rejectHandler);
    }

    static _fetchHandler(response) {
        switch (response.status) {
            case 200:
                response.json().then(BackendHandler._jsonToStore);
                return;
            default:
                toastr.error("Something went wrong");
                store.dispatch(backendRequestFailed())
        }
    }

    static _rejectHandler(error) {
        toastr.error("", error.text);
        store.dispatch(backendRequestFailed())
    }

    static _jsonToStore(json) {
        store.dispatch(backendRequestSucceeded(json));
    }

}

BackendHandler.EVERYTHING = "https://newsapi.org/v2/everything";
BackendHandler.TOP_HEADLINES = "https://newsapi.org/v2/top-headlines";

export default BackendHandler;
