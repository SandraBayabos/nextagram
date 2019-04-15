import React from 'react';
import { Link } from "react-router-dom";
import ModalForm from '../components/Modal';

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
  DropdownItem
} from 'reactstrap';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,


    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,

    });
  }

  handleLogOut = event => {

    event.preventDefault()
    localStorage.removeItem('jwt')
    this.props.setUser()
  }

  render() {
    return (
      <Navbar color="light" light expand="md" sticky="top">
        <NavbarBrand style={styles.NavBarHeader} href="/">Nextagram</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem onClick={this.props.currentUser}>
              <Link to={`/profile`}><NavLink>My Profile</NavLink></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
                    </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                      </DropdownItem>
                <DropdownItem>
                  Option 2
                      </DropdownItem>
                <DropdownItem divider />
                {this.props.currentUser ?
                  <DropdownItem onClick={this.handleLogOut}>{this.props.buttonLabel}{this.props.currentUser && 'Log Out'}</DropdownItem>

                  : <ModalForm currentUser={this.props.currentUser} setUser={this.props.setUser}><button /></ModalForm>
                }
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse >
      </Navbar >
    );
  }
}

const styles = {
  Navbar: {
    backgroundColor: 'grey'
  },
  NavBarHeader: {
    fontFamily: 'Lobster',
  }
}
export default NavBar;