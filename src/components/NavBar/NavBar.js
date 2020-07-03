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

function ridirect (link) {
    return window.location.assign("q=" + link)
}


class NavBar extends Component {
    render() {
        return (
                <Navbar className={styles.mainNavBar} dark expand="md" sticky="top">
                    <NavbarToggler className={styles.navbarToggler} onClick={this.props.navbarToggle}/>
                    <NavbarBrand className={styles.navbarBrand} href="/"> <FontAwesomeIcon icon={faGlobe}/>World News</NavbarBrand>
                    <Collapse isOpen={this.props.navbarIsOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => ridirect("business")}>Business</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => ridirect("entertainment")}>Entertainment</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => ridirect("general")}>General</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => ridirect("health")}>Health</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => ridirect("science")}>Science</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => ridirect("sports")}>Sports</NavLink>
                            </NavItem>

                            <NavItem className={styles.navbarButtons}>
                                <NavLink className={styles.navbarText} onClick={() => ridirect("technology")}>Technology</NavLink>
                            </NavItem>


                            <UncontrolledDropdown nav inNavbar className={styles.navbarDropdownSelector}>
                                <DropdownToggle nav caret className={styles.navbarText}>
                                    Top Headlines by Country
                                </DropdownToggle>
                                <DropdownMenu right className={styles.navbarDropdownMenu}>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Argentina")}>
                                        Argentina
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Australia")}>
                                        Australia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Austria")}>
                                        Austria
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Belgium")}>
                                        Belgium
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Brazil")}>
                                        Brazil
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Bulgaria")}>
                                        Bulgaria
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Canada")}>
                                        Canada
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("China")}>
                                        China
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Colombia")}>
                                        Colombia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Cuba")}>
                                        Cuba
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Czech Republic")}>
                                        Czech Republic
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Denmark")}>
                                        Denmark
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Egypt")}>
                                        Egypt
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("France")}>
                                        France
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Germany")}>
                                        Germany
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Greece")}>
                                        Greece
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Hong Kong")}>
                                        Hong Kong
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Hungary")}>
                                        Hungary
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("India")}>
                                        India
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Indonesia")}>
                                        Indonesia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Ireland")}>
                                        Ireland
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Israel")}>
                                        Israel
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Italy")}>
                                        Italy
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Japan")}>
                                        Japan
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Latvia")}>
                                        Latvia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Lithuania")}>
                                        Lithuania
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Malaysia")}>
                                        Malaysia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Mexico")}>
                                        Mexico
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Morocco")}>
                                        Morocco
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Netherlands")}>
                                        Netherlands
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("New Zealand")}>
                                        New Zealand
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Nigeria")}>
                                        Nigeria
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Norway")}>
                                        Norway
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Philippines")}>
                                        Philippines
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Poland")}>
                                        Poland
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Portugal")}>
                                        Portugal
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Romania")}>
                                        Romania
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Russia")}>
                                        Russia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Saudi Arabia")}>
                                        Saudi Arabia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Serbia")}>
                                        Serbia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Singapore")}>
                                        Singapore
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Slovakia")}>
                                        Slovakia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Slovenia")}>
                                        Slovenia
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("South Africa")}>
                                        South Africa
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("South Korea")}>
                                        South Korea
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Sweden")}>
                                        Sweden
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Switzerland")}>
                                        Switzerland
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Taiwan")}>
                                        Taiwan
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Thailand")}>
                                        Thailand
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Turkey")}>
                                        Turkey
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("UAE")}>
                                        UAE
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Ukraine")}>
                                        Ukraine
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("United Kingdom")}>
                                        United Kingdom
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("USA")}>
                                        USA
                                    </DropdownItem>

                                    <DropdownItem className={styles.navbarDropdownText} onClick={() => ridirect("Venuzuela")}>
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
});

//Update state in Redux
const mapDispatchToProps = dispatch => ({
    navbarToggle: () => dispatch(navbarToggled()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
