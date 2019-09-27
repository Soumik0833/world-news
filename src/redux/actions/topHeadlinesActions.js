import {NAVBAR_TOGGLED} from "./navbarToggleActions";

const TOP_HEADLINES_CHANGE_COUNTRY = "TOP_HEADLINES_CHANGE_COUNTRY";

function topHeadlinesChangeCountry (countryCode) {
    return {
        type: TOP_HEADLINES_CHANGE_COUNTRY,
        countryCode,
    }
}

export {
    TOP_HEADLINES_CHANGE_COUNTRY,
}

export {
    topHeadlinesChangeCountry,
}