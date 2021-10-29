import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavElements';


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>AREIA</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to='discover'
                                activeClass='active'
                                smooth={true}
                                spy={true}
                                offset={-70}
                                duration={500}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='products'
                                activeClass='active'
                                smooth={true}
                                spy={true}
                                offset={-70}
                                duration={500}>Products</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='about'
                                activeClass='active'
                                smooth={true}
                                spy={true}
                                offset={-80}
                                duration={500}>About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar