import {combineReducers} from "redux";
import backend from "./fetchFromBackendReducer";
import {reducer as toastr} from "react-redux-toastr";
import navbarToggle from "./navbarToggleReducer";
import topHeadlineCountryChanger from "./topHeadlinesReducer";


export default combineReducers({
    backend,
    toastr,
    navbarToggle,
    topHeadlineCountryChanger,
  }
);

