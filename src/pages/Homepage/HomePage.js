import React from 'react';
import {Container, Card, CardBody, CardHeader, CardText, CardImg, Button} from 'reactstrap';
import {connect} from "react-redux";
import BackendHandler from "../../BackendHandler";
import NavBar from "../../components/NavBar/NavBar";


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        BackendHandler.fetch(BackendHandler.TOP_HEADLINES, props.match.params.id);
    }
}

function mapStateToProps(state) {
    return {
        articles: state.backend.articles,
        countryCode: state.topHeadlineCountryChanger.changeCountry,
    }
}

export default connect(mapStateToProps)(TopHeadlines);
