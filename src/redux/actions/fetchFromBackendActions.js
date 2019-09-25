const BACKEND_REQUEST_SENT = "BACKEND_REQUEST_SENT";
const BACKEND_REQUEST_SUCCEEDED = "BACKEND_REQUEST_SUCCEEDED";
const BACKEND_REQUEST_FAILED = "BACKEND_REQUEST_FAILED";
const BACKEND_OPTIMISTIC_DELETE = "BACKEND_OPTIMISTIC_DELETE";

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



function backendOptimisticDelete(namespace, id) {
    return {
        type: BACKEND_OPTIMISTIC_DELETE,
        namespace,
        id
    }
}

export {
    BACKEND_REQUEST_SENT,
    BACKEND_REQUEST_SUCCEEDED,
    BACKEND_REQUEST_FAILED,
    BACKEND_OPTIMISTIC_DELETE,
}

export {
    backendRequestSent,
    backendRequestSucceeded,
    backendRequestFailed,
    backendOptimisticDelete,
}
