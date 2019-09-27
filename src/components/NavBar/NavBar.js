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


function redirect (link) {
    return window.location.assign("/everything/" + link)
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
                            <NavItem className={styles.navlink}>
                                <NavLink className={styles.navbarText} href="/components/">Top-Headlines</NavLink>
                            </NavItem>
                            <NavItem className={styles.navlink}>
                                <NavLink className={styles.navbarText} href="/everything/">Everything</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar className={styles.navlink}>
                                <DropdownToggle nav caret className={styles.navbarText}>
                                    Top Headlines
                                </DropdownToggle>
                                <DropdownMenu right className={styles.navbarDropdownMenu}>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("us")}>
                                         USA
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ar")}>
                                        Argentina
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("au")}>
                                        Australia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("at")}>
                                        Austria
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("be")}>
                                        Belgium
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("br")}>
                                        Brazil
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("bg")}>
                                        Bulgaria
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ca")}>
                                        Canada
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("cn")}>
                                        China
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("co")}>
                                        Colombia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("cu")}>
                                        Cuba
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("cz")}>
                                        Czech Republic
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("eg")}>
                                        Egypt
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("fr")}>
                                        France
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("de")}>
                                        Germany
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("gr")}>
                                        Greece
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("hk")}>
                                        Hong Kong
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("hu")}>
                                        Hungary
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("in")}>
                                        India
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("id")}>
                                        Indonesia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ie")}>
                                        Ireland
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("il")}>
                                        Israel
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("it")}>
                                        Italy
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("jp")}>
                                        Japan
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("lv")}>
                                        Latvia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("lt")}>
                                        Lithuania
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("my")}>
                                        Malaysia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("mx")}>
                                        Mexico
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ma")}>
                                        Morocco
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("nl")}>
                                        Netherlands
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("nz")}>
                                        New Zealand
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ng")}>
                                        Nigeria
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("no")}>
                                        Norway
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ph")}>
                                        Philippines
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("pl")}>
                                        Poland
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("pt")}>
                                        Portugal
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ro")}>
                                        Romania
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ru")}>
                                        Russia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("sa")}>
                                        Saudi Arabia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("rs")}>
                                        Serbia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("sg")}>
                                        Singapore
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("sk")}>
                                        Slovakia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("si")}>
                                        Slovenia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("za")}>
                                        South Africa
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("kr")}>
                                        South Korea
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("se")}>
                                        Sweden
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ch")}>
                                        Switzerland
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("tw")}>
                                        Taiwan
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("th")}>
                                        Thailand
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("tr")}>
                                        Turkey
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ae")}>
                                        UAE
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ua")}>
                                        Ukraine
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("gb")}>
                                        United Kingdom
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => redirect("ve")}>
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
