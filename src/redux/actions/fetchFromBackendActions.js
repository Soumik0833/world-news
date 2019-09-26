const BACKEND_REQUEST_SENT = "BACKEND_REQUEST_SENT";
const BACKEND_REQUEST_SUCCEEDED = "BACKEND_REQUEST_SUCCEEDED";
const BACKEND_REQUEST_FAILED = "BACKEND_REQUEST_FAILED";

function backendRequestSent() {
    return {
        type: BACKEND_REQUEST_SENT
    }
}

function backendRequestSucceeded(data) {
    return {
        type: BACKEND_REQUEST_SUCCEEDED,
        data
    }
}

function backendRequestFailed() {
    return {
        type: BACKEND_REQUEST_FAILED
    }
}



export {
    BACKEND_REQUEST_SENT,
    BACKEND_REQUEST_SUCCEEDED,
    BACKEND_REQUEST_FAILED,
}

export {
    backendRequestSent,
    backendRequestSucceeded,
    backendRequestFailed,
}
