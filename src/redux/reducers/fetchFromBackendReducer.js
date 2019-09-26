import {
    BACKEND_REQUEST_FAILED,
    BACKEND_REQUEST_SENT,
    BACKEND_REQUEST_SUCCEEDED,
} from "../actions/fetchFromBackendActions";

function fetchFromBackendReducer(state = {}, action) {
    switch(action.type) {
        case BACKEND_REQUEST_SENT:
            return {
                ...state,
                loadingDataFromBackend: true
            };
        case BACKEND_REQUEST_SUCCEEDED:
            return {
                ...state,
                loadingDataFromBackend: false,
                ...action.data
            };
        case BACKEND_REQUEST_FAILED:
            return {
                ...state,
                loadingDataFromBackend: false
            };
        default:
            return state;
    }
}

export default fetchFromBackendReducer;
