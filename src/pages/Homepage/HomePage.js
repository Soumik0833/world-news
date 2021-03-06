import React from 'react';
import {connect} from "react-redux";
import BackendHandler from "../../BackendHandler";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./homepage.module.css"
import BootstrapCarousel from 'react-bootstrap/Carousel'
import {Card, CardImg} from "reactstrap";
import apple from "../../assets/Images/apple.jpg";
import ai from "../../assets/Images/machineLearning.jpg";
import bitcoin from "../../assets/Images/bitcoin.jpg";
import brexit from "../../assets/Images/brexit.jpg";
import climateChange from "../../assets/Images/climateChange.jpg";
import facebook from "../../assets/Images/facebook.jpg";
import google from "../../assets/Images/google.jpg";
import hack from "../../assets/Images/hack.jpg";
import immigration from "../../assets/Images/immigration.jpg";
import instagram from "../../assets/Images/instagram.jpg";
import marvel from "../../assets/Images/marvel.jpg";
import netflix from "../../assets/Images/netflix.jpg";
import privacy from "../../assets/Images/privacy.jpg";
import stocks from "../../assets/Images/stocks.jpg";
import tesla from "../../assets/Images/tesla.jpg";
import trump from "../../assets/Images/trump.jpg";
import water from "../../assets/Images/water.jpg";
import weather from "../../assets/Images/weather.jpg";
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom";


const listOfTopics = {
    topics: [{
        "name": "Bitcoin",
        "logo": apple,
        "url": "q=apple"
    }, {
        "name": "Climate Change",
        "logo": ai,
        "url": "q=ai+machine+learning",
    }, {
        "name": "Climate Change",
        "logo": bitcoin,
        "url": "q=bitcoin",
    }, {
        "name": "Climate Change",
        "logo": brexit,
        "url": "q=brexit",
    }, {
        "name": "Climate Change",
        "logo": climateChange,
        "url": "q=climate+change",
    }, {
        "name": "Climate Change",
        "logo": facebook,
        "url": "q=facebook",
    }, {
        "name": "Climate Change",
        "logo": google,
        "url": "q=google",
    }, {
        "name": "Climate Change",
        "logo": hack,
        "url": "q=hack",
    }, {
        "name": "Climate Change",
        "logo": immigration,
        "url": "q=immigration",
    }, {
        "name": "Climate Change",
        "logo": instagram,
        "url": "q=instagram",
    }, {
        "name": "Climate Change",
        "logo": marvel,
        "url": "q=marvel",
    }, {
        "name": "Climate Change",
        "logo": netflix,
        "url": "q=netflix",
    }, {
        "name": "Climate Change",
        "logo": privacy,
        "url": "q=privacy",
    }, {
        "name": "Climate Change",
        "logo": stocks,
        "url": "q=stocks",
    }, {
        "name": "Climate Change",
        "logo": tesla,
        "url": "q=tesla",
    }, {
        "name": "Climate Change",
        "logo": trump,
        "url": "q=trump",
    }, {
        "name": "Climate Change",
        "logo": water,
        "url": "q=water",
    }, {
        "name": "Climate Change",
        "logo": weather,
        "url": "q=weather",
    }]
};

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        BackendHandler.fetch(BackendHandler.EVERYTHING, "q=Denmark|Norway|Sweden&in=title");
    }

    render() {
        return (
            <div className={styles.background}>
                <NavBar/>

                <h2 className={styles.topHeadlineText}>Top Headlines</h2>

                <MultiCarousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={1000}
                        centerMode={false}
                        className={styles.carousel}
                        draggable
                        focusOnSelect={false}
                        infinite={true}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={40}
                        renderButtonGroupOutside={true}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 5000,
                                    min: 1024
                                },
                                items: 1,
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 2,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1,
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {this.props.articles ? this.props.articles.map(article =>
                            <div>
                                <img
                                    className={styles.topHeadlineImage}
                                    src={article.image ? article.image : "https://source.unsplash.com/random/720x480"}
                                    alt=""
                                />
                                <BootstrapCarousel.Caption className={styles.carouselCaptionContainer}>
                                    <h3 className={styles.carouselCaption}>{article.title}</h3>
                                </BootstrapCarousel.Caption>
                            </div>
                        ) : <></>}
                    </MultiCarousel>

                    <h2 className={styles.separator}>Topics</h2>

                    <div>
                        <MultiCarousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className={styles.topics}
                            draggable
                            focusOnSelect={false}
                            infinite={false}
                            itemClass={styles.eachTopicItemContainer}
                            keyBoardControl={false}
                            minimumTouchDrag={40}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 5000,
                                        min: 1024
                                    },
                                    items: 8,
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 3,
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
                                    },
                                    items: 7,
                                }
                            }}
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={3}
                            swipeable
                        >
                            {listOfTopics ? listOfTopics.topics.map(topic =>
                                <Card className={styles.topicContainer}>
                                    <Link to={topic.url}>
                                        <CardImg
                                            className={styles.topicImage}
                                            src={topic.logo}
                                        />
                                    </Link>
                                </Card>
                            ) : <></>}
                        </MultiCarousel>
                    </div>

                <div className={styles.topicCard}>
                    {listOfTopics.topics.map(topic =>
                        <Link to={topic.url}>
                    <Card className={styles.eachTopicCard}>
                        <CardImg src={topic.logo} className={styles.eachTopicCardImg}/>
                    </Card>
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.backend.articles,
        sources: state.backend.sources,
    }
}

export default connect(mapStateToProps)(HomePage);
