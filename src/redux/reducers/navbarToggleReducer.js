import { NAVBAR_TOGGLED } from "../actions/navbarToggleActions"

const initialState = {
    navbarIsOpen: false,
};

function navbarToggleReducer (state = initialState, action) {
    switch (action.type) {
        case NAVBAR_TOGGLED:
            return {
                ...state,
                navbarIsOpen: !state.navbarIsOpen,
            };
        default:
            return state;
    }
}

export default navbarToggleReducer;