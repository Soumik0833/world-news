import {
    BACKEND_REQUEST_FAILED,
    BACKEND_REQUEST_SENT,
    BACKEND_REQUEST_SUCCEEDED,
    BACKEND_OPTIMISTIC_DELETE,
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
        case BACKEND_OPTIMISTIC_DELETE:
            return {
                ...state,
                [action.namespace]: state[action.namespace].filter(
                    item => item.id !== action.id
                )
            };
        default:
            return state;
    }
}

export default fetchFromBackendReducer;
