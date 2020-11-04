import React from 'react';
import {Redirect} from 'react-router-dom'
import {Logo,Nav,Navigation,NavItem} from './styles'

const NavBar = () => (
    <Nav>
        <Logo><i class="fas fa-dollar-sign"></i>PROFIT</Logo>
        <Navigation>
            <Redirect from='/' to='/Home'/>
            <NavItem to = '/Home'>Home</NavItem>
            <NavItem to = '/Engine'>Engine</NavItem>
        </Navigation>
    </Nav>
);

export default NavBar;
