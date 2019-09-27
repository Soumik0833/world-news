import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import styles from "./navbar.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {navbarToggled} from "../../redux/actions/navbarToggleActions";
import {connect} from "react-redux";
import {topHeadlinesChangeCountry } from "../../redux/actions/topHeadlinesActions";
import {Link} from "react-router-dom";


function redirectCountry (link) {
    return window.location.assign("/top-headlines/country=" + link)
}

function redirectCategory (link) {
    return window.location.assign("/top-headlines/country=us&category=" + link)
}

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Navbar className={styles.mainNavBar} light expand="md" sticky="top">
                    <NavbarToggler className={styles.navbarToggler} onClick={this.props.navbarToggle}/>
                    <NavbarBrand className={styles.navbarBrand}> <FontAwesomeIcon icon={faGlobe} />World News</NavbarBrand>
                    <Collapse isOpen={this.props.navbarIsOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => redirectCategory("business")}>Business</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => redirectCategory("entertainment")}>Entertainment</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => redirectCategory("general")}>General</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => redirectCategory("health")}>Health</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => redirectCategory("ccience")}>Science</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => redirectCategory("sports")}>Sports</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => redirectCategory("technology")}>Technology</NavLink>
                            </NavItem>


                            <UncontrolledDropdown nav inNavbar className={styles.navbarDropdownSelector}>
                                <DropdownToggle nav caret className={styles.navbarText}>
                                    Top Headlines by Country
                                </DropdownToggle>
                                <DropdownMenu right className={styles.navbarDropdownMenu}>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ar")}>
                                        Argentina
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("au")}>
                                        Australia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("at")}>
                                        Austria
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("be")}>
                                        Belgium
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("br")}>
                                        Brazil
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("bg")}>
                                        Bulgaria
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ca")}>
                                        Canada
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("cn")}>
                                        China
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("co")}>
                                        Colombia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("cu")}>
                                        Cuba
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("cz")}>
                                        Czech Republic
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("eg")}>
                                        Egypt
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("fr")}>
                                        France
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("de")}>
                                        Germany
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("gr")}>
                                        Greece
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("hk")}>
                                        Hong Kong
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("hu")}>
                                        Hungary
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("in")}>
                                        India
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("id")}>
                                        Indonesia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ie")}>
                                        Ireland
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("il")}>
                                        Israel
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("it")}>
                                        Italy
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("jp")}>
                                        Japan
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("lv")}>
                                        Latvia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("lt")}>
                                        Lithuania
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("my")}>
                                        Malaysia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("mx")}>
                                        Mexico
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ma")}>
                                        Morocco
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("nl")}>
                                        Netherlands
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("nz")}>
                                        New Zealand
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ng")}>
                                        Nigeria
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("no")}>
                                        Norway
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ph")}>
                                        Philippines
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("pl")}>
                                        Poland
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("pt")}>
                                        Portugal
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ro")}>
                                        Romania
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ru")}>
                                        Russia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("sa")}>
                                        Saudi Arabia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("rs")}>
                                        Serbia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("sg")}>
                                        Singapore
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("sk")}>
                                        Slovakia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("si")}>
                                        Slovenia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("za")}>
                                        South Africa
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("kr")}>
                                        South Korea
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("se")}>
                                        Sweden
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ch")}>
                                        Switzerland
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("tw")}>
                                        Taiwan
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("th")}>
                                        Thailand
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("tr")}>
                                        Turkey
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ae")}>
                                        UAE
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ua")}>
                                        Ukraine
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("gb")}>
                                        United Kingdom
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("us")}>
                                        USA
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirectCountry("ve")}>
                                        Venuzuela
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    navbarIsOpen: state.navbarToggle.navbarIsOpen,
    topHeadlineCountry: state.topHeadlineCountryChanger.changeCountry,
});

//Update state in Redux
const mapDispatchToProps = dispatch => ({
    navbarToggle: () => dispatch(navbarToggled()),
    changeCountry: (event) => dispatch(topHeadlinesChangeCountry(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
