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
    DropdownItem } from 'reactstrap';

import styles from "./navbar.module.css"

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
                <Navbar className={styles.mainNavBar} light expand="md" sticky="top">
                    <NavbarToggler className={styles.navbarToggler} onClick={this.toggle}/>
                    <NavbarBrand className={styles.navbarBrand}>World News</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
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

export default NavBar;
