import React from 'react';
import {Container, Card, CardBody, CardHeader, CardText, CardImg, Button} from 'reactstrap';
import {connect} from "react-redux";
import BackendHandler from "../../BackendHandler";
import styles from './topheadlines.module.css';
import NavBar from "../../components/NavBar/NavBar";


class TopHeadlines extends React.Component {

    constructor(props) {
        super(props);
        BackendHandler.fetch(BackendHandler.TOP_HEADLINES,  props.match.params.id);
    }

    setDate(date) {
        let d = new Date(date);
        return d.toLocaleDateString(this.props.locale, {
            day: "numeric",
            year: "numeric",
            month: "long",
            hour: "numeric",
            minute: "2-digit",
        });
    };


    render() {
        return (
            <div className={styles.background}>
                <NavBar className={styles.mainNavBar}/>
                <Container>
                    {this.props.articles ?
                        this.props.articles
                            .map(article =>
                                <Card className={styles.mainCard}>
                                    <Card className={styles.imageCard}>
                                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                                            <span
                                                className={styles.dateBadge}> {this.setDate(article.publishedAt)} </span>
                                            <span className={styles.titleBadge}> {article.title} </span>
                                            <CardImg className={styles.actualImage}
                                                     src={article.urlToImage ? article.urlToImage : "https://picsum.photos/720/480"}/>
                                        </a>
                                    </Card>

                                    <Card className={styles.textCard}>
                                        <CardBody>
                                            <CardHeader className={styles.titleHeader}>{article.title}</CardHeader>
                                            <CardText className={styles.descriptionText}>{article.description}</CardText>
                                            <div className={styles.viewSourceButtonDiv}>
                                                <Button className={styles.viewSourceButton}
                                                        onClick={() => window.open(article.url)}>
                                                    Read More
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Card>
                            )
                        : <></>}
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.backend.articles,
    }
}

export default connect(mapStateToProps)(TopHeadlines);
