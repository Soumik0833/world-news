import { TOP_HEADLINES_CHANGE_COUNTRY} from "../actions/topHeadlinesActions";

const initialState = {
    changeCountry: "us",
};

function topHeadlineCountryChanger (state = initialState, action) {
    switch (action.type) {
        case TOP_HEADLINES_CHANGE_COUNTRY:
            return {
                ...state,
                changeCountry: action.countryCode,
            };
        default:
            return state;
    }
}

export default topHeadlineCountryChanger;