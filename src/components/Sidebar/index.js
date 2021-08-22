import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                        to='discover' 
                        onClick={toggle}
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}>Discover</SidebarLink>
                    <SidebarLink 
                        to='products' 
                        onClick={toggle}
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-35}
                        duration={500}>Products</SidebarLink>
                    <SidebarLink 
                        to='about' 
                        onClick={toggle}
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}>About</SidebarLink>
                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
