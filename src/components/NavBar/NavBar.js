import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem
} from 'reactstrap';
import styles from "./navbar.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {navbarToggled} from "../../redux/actions/navbarToggleActions";
import {connect} from "react-redux";



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
                            {/*<UncontrolledDropdown nav inNavbar>*/}
                            {/*    <DropdownToggle nav caret>*/}
                            {/*        Options*/}
                            {/*    </DropdownToggle>*/}
                            {/*    <DropdownMenu right>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Option 1*/}
                            {/*        </DropdownItem>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Option 2*/}
                            {/*        </DropdownItem>*/}
                            {/*        <DropdownItem divider />*/}
                            {/*        <DropdownItem>*/}
                            {/*            Reset*/}
                            {/*        </DropdownItem>*/}
                            {/*    </DropdownMenu>*/}
                            {/*</UncontrolledDropdown>*/}
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
