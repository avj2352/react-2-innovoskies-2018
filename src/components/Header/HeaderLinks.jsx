import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderLinks extends Component{
    render(){
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                <Nav>
                    <NavItem eventKey={1} href="#">                        
                        <p className="hidden-lg hidden-md">Innovoskies</p>
                    </NavItem>                    
                </Nav>
                <Nav pullRight>                    
                    <NavDropdown eventKey={1} title="Blog" id="basic-nav-dropdown-right">
                        <MenuItem eventKey={1.1}>Action</MenuItem>
                        <MenuItem eventKey={1.2}>Another action</MenuItem>
                        <MenuItem eventKey={1.3}>Something</MenuItem>
                        <MenuItem eventKey={1.4}>Another action</MenuItem>                        
                        <MenuItem divider />
                        <MenuItem eventKey={1.5}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} href="#">Log In</NavItem>
                </Nav>
            </div>
        );
    }
}

export default HeaderLinks;
