import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkS)`
    background: linear-gradient(90deg, rgba(103,60,168,1) 47.5%, rgba(0,99,255,0.65) 100%);
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    align-items: center;
    margin-left: 24px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    opacity: 80%;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        opacity: 100%;
        transition: 0.2s ease-in-out;
    }

    $.active {
        border-bottom: 3px solid #01bf71
        opacity: 100%;
    }
`